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

  public authenticatedUser = new UserVo();
  // public authenticatedUserAllInfo = new Collaborater('', '', '', '', '');


  public authenticated: boolean = null;


  public login() {
    console.log(this.userCandidat);
    this.http.post<any>(this.loginUrl, this.userCandidat, {observe: 'response'}).subscribe(
      resp =>  {
        let jwt = resp.headers.get('Authorization');
        this.saveToken(jwt);
        this.loadInfos();
        // if (this.hasRole('ADMIN')) {
          this.router.navigate(['courrier/list']);
        // } else if (this.hasRole('CHEF')) {
        //   this.router.navigate(['new-project']);
        // }else {
        //   this.router.navigate(['unachievedAssignments']);
        // }
      }, error1 => {
        console.log(error1)
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
      console.log(roles);
      this.authenticatedUser.username = username;
    this.authenticatedUser.rolesVo = roles;
    // this.getUserInfos(username);
    this.authenticated = true;

  }

  public logout() {
    localStorage.removeItem('token');
    this.authenticated = false;
    this.authenticatedUser = new UserVo();
    this.router.navigate(['login']);
  }

  // public getUserInfos(username: string) {
  //   this.http.get<Collaborater>(this.getUserInfosUrl + username).subscribe(
  //     data => {
  //       this.authenticatedUserAllInfo = data;
  //     }, error1 => {
  //       console.log(error1)
  //     }
  //   );
  // }

  // public hasRole(role): boolean {
  //   for (let r of this.authenticatedUser.roles) {
  //     if (r == role) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }
}
