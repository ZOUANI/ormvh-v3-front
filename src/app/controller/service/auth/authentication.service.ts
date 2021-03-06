import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';
import {UserVo} from '../../model/User.model';
import {UserAuth} from '../../model/user-auth.model';


@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(
        private http: HttpClient,
        private router: Router,
    ) {
    }

    private loginUrl = 'http://localhost:8080/login';


    public userCandidat = new UserAuth();

    private _authenticatedUser = new UserVo();


    public authenticated: boolean = null;


    public login() {
        console.log(this.userCandidat);
        this.http.post<any>(this.loginUrl, this.userCandidat, {observe: 'response'}).subscribe(
            resp => {
                let jwt = resp.headers.get('Authorization');
                this.saveToken(jwt);
                this.loadInfos();
                if (this._authenticatedUser.passwordChanged) {
                    this.router.navigate(['courrier/list']);
                } else {
                    this.router.navigate(['resetPassword']);
                }
            }, error1 => {
                console.log(error1);
            }
        );
    }


    public saveToken(token: string) {
        localStorage.setItem('token', token);
    }

    public loadInfos() {
        let helper = new JwtHelperService();
        let username = helper.decodeToken(localStorage.getItem('token')).sub;
        let roles = helper.decodeToken(localStorage.getItem('token')).roles;
        let passwordChanged = helper.decodeToken(localStorage.getItem('token')).passwordChanged;

        this._authenticatedUser.passwordChanged = passwordChanged;
        this._authenticatedUser.username = username;
        this._authenticatedUser.rolesVo = roles;
        this.authenticated = true;

    }

    public logout() {
        localStorage.removeItem('token');
        this.authenticated = false;
        this._authenticatedUser = new UserVo();
        this.router.navigate(['login']);
    }


    public hasRole(role): boolean {
        for (let r of this._authenticatedUser.rolesVo) {
            if (r == role) {
                return true;
            }
        }
        return false;
    }


    get authenticatedUser(): UserVo {
        return this._authenticatedUser;
    }

    set authenticatedUser(value: UserVo) {
        this._authenticatedUser = value;
    }
}
