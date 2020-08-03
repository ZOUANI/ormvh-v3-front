import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserVo} from '../model/user.model';
import {RoleVo} from '../model/Role.model';
import {Observable} from 'rxjs';
import {RoleService} from './Role.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import {AuthenticationService} from './auth/authentication.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {


    constructor(private http: HttpClient, private roleService: RoleService , private router : Router , private authService : AuthenticationService) {
    }
    public userPasswordReset = new UserVo();
    public userToUpdate = new UserVo();

    private _userDetail: UserVo = new UserVo();
    private _userListe: Array<UserVo> = new Array<UserVo>();

    private _userSearch: UserVo = new UserVo();
    private _user: UserVo = new UserVo();
    private _searchedUsers: Array<UserVo> = new Array<UserVo>();
    private _editableUsers: Array<UserVo> = new Array<UserVo>();
    private _createdBys: Array<UserVo> = new Array<UserVo>();
    private _updatedBys: Array<UserVo> = new Array<UserVo>();
    private _role: RoleVo;

    get role(): RoleVo {
        if (this._role == null) {
            this._role = new RoleVo();
        }
        return this._role;
    }

    set role(value: RoleVo) {
        this._role = value;
    }

    get createdBys(): Array<UserVo> {
        return this._createdBys;
    }

    set createdBys(value: Array<UserVo>) {
        this._createdBys = value;
    }

    get updatedBys(): Array<UserVo> {
        return this._updatedBys;
    }

    set updatedBys(value: Array<UserVo>) {
        this._updatedBys = value;
    }

    get user(): UserVo {
        if (this._user == null) {
            this._user = new UserVo();
        }
        return this._user;
    }

    set user(value: UserVo) {
        this._user = value;
    }

    get userListe(): Array<UserVo> {
        return this._userListe;
    }

    set userListe(value: Array<UserVo>) {
        this._userListe = value;
    }

    get userDetail(): UserVo {
        return this._userDetail;
    }

    set userDetail(value: UserVo) {
        this._userDetail = value;
    }

    get userSearch(): UserVo {
        return this._userSearch;
    }

    set userSearch(value: UserVo) {
        this._userSearch = value;
    }

    get userShowDetail(): boolean {
        return this._userShowDetail;
    }

    set userShowDetail(value: boolean) {
        this._userShowDetail = value;
    }

    get editableUsers(): Array<UserVo> {
        return this._editableUsers;
    }

    set editableUsers(value: Array<UserVo>) {
        this._editableUsers = value;
    }

    public findAll() {
        this.http.get<Array<UserVo>>('http://localhost:8080/generated/user/').subscribe(
            value => {
                if (value != null) {
                    this.userListe = value;
                    this.editableUsers = value;

                }
            }
        );
    }

    public findAllUsers(): Observable<Array<UserVo>> {
        return this.http.get<Array<UserVo>>('http://localhost:8080/generated/user/');
    }

    public saveUser() {
        this.http.post<UserVo>('http://localhost:8080/generated/user/', this.user).subscribe(data => {
            if (data == null) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'duplicated email or username',

                })
            } else {
                this.userListe.push(data);
                this.roleService.findAll();
                this.user = new UserVo();
                Swal.fire({
                    icon: 'success',
                    title: 'user ' + data.username + ' has been saved',
                    showConfirmButton: false,
                    timer: 2500
                });
            }

        });

    }

    public editUser() {
        console.log(this.userToUpdate);
        this.http.put<UserVo>('http://localhost:8080/generated/user/', this.userToUpdate).subscribe(data => {
            if (data == null) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'cannot update this user : '+this.userToUpdate.username,

                })
            }else {
                this.userToUpdate = new UserVo();
                Swal.fire({
                    icon: 'success',
                    title: 'user ' + data.username + ' has been edited',
                    showConfirmButton: false,
                    timer: 2500
                });
                this.router.navigate(['/user/list']);
            }
        });


    }

    public addRole(item: RoleVo) {
        this.user.rolesVo.push(this.cloneRole(item));
    }

    public cloneRole(role: RoleVo) {
        const myRoleClone = new RoleVo();
        myRoleClone.updatedAt = role.updatedAt;
        myRoleClone.authority = role.authority;
        myRoleClone.createdAt = role.createdAt;
        myRoleClone.id = role.id;
        myRoleClone.updatedByVo.username = role.updatedByVo.username;
        7
        myRoleClone.createdByVo.username = role.createdByVo.username;
        7
        return myRoleClone;
    }

    public removeRole(i: number) {
        this.user.rolesVo.splice(i, 1);
    }

    public findUser(pojo: UserVo) {
        this.http.post<Array<UserVo>>('http://localhost:8080/generated/user/search/', pojo).subscribe(
            value => {
                this.userListe = value;
            });
    }

    public detailShow(pojo: UserVo) {
        this.userDetail = pojo;
        this.userShowDetail = true;

    }


    delete(pojo: UserVo) {
        this.http.delete<UserVo>('http://localhost:8080/generated/user/id/' + pojo.id).subscribe(
            value => {
                var index = this.userListe.indexOf(pojo);
                if (index > -1) {
                    this.userListe.splice(index, 1);
                }
            }
        );


    }


    public findByusername(ref: string) {
        this.http.get<UserVo>('http://localhost:8080/generated/user/username/' + ref).subscribe(
            value => {
                if (value != null) {
                    this.user = value;
                }
            }
        );
    }

    public findAllcreatedBys() {
        this.http.get<Array<UserVo>>('http://localhost:8080/generated/user/').subscribe(
            value => {
                if (value != null) {
                    this.createdBys = value;
                }
            }
        );
    }

    public findAllupdatedBys() {
        this.http.get<Array<UserVo>>('http://localhost:8080/generated/user/').subscribe(
            value => {
                if (value != null) {
                    this.updatedBys = value;
                }
            }
        );
    }


    /***********************************************************************************************/
    private _userShowDetail: boolean;

    public detailHide() {

        this.userShowDetail = false;
        this.userDetail = null;
    }

    public resetPassword(){
        this.userPasswordReset.username = this.authService.authenticatedUser.username;
        this.http.post<any>('http://localhost:8080/generated/user/password-reset',
                            this.userPasswordReset
        ).subscribe(
            data=>{
                if (data == 1) {
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Le mot de passe a été changé, Veuillez réconnecter',
                        showConfirmButton: true
                    });
                    this.authService.logout();
                    this.router.navigate(["login"]);
                }
                if (data == -1) {
                    Swal.fire({
                        position: 'top',
                        icon: 'warning',
                        title: 'mot de passe non valide, Veuillez réessayer',
                        showConfirmButton: true
                    });
                }
            },error1 => {
                console.log(error1);
            }
        );
    }

    public initPassword(){
        this.http.post<any>('http://localhost:8080/generated/user/init-password/'+this.userToUpdate.username,null).subscribe(
            data=>{
                if (data != null) {
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'password changed ',
                        showConfirmButton: true
                    });

                }
                if (data == null) {
                    Swal.fire({
                        position: 'top',
                        icon: 'warning',
                        title: 'cannot init password',
                        showConfirmButton: true
                    });
                }
            },error1 => {
                console.log(error1);
            }
        );
    }


}