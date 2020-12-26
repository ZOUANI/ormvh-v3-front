import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../controller/service/User.service';
import {UserVo} from '../../../controller/model/user.model';
import {RoleVo} from '../../../controller/model/Role.model';
import {RoleService} from '../../../controller/service/Role.service';
import {LeServiceVo} from "../../../controller/model/LeService.model";
import {LeServiceService} from "../../../controller/service/LeService.service";

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
    private _leServices: LeServiceVo[];

    constructor(private userService: UserService, private roleService: RoleService, private leServiceService: LeServiceService) {
    }

    ngOnInit(): void {
        // this.findAllcreatedBys();
        // this.findAllupdatedBys();
        this.roleService.findAll();
        this.findAllServices();
    }

    private findAllServices() {
        this.leServiceService.findAllServices().subscribe(data => {
            console.log('haaaa services :::: ' + data);
            if (data != null) {
                this._leServices = data;
            }
        }, error => {
            console.log(error);
        });
    }

    get roles() {
        return this.roleService.roleListe;
    }

    get user(): UserVo {
        return this.userService.userToUpdate;
    }

    get leServices(): LeServiceVo[] {
        return this._leServices;
    }


    // get editableUsers(): Array<UserVo> {
    //     return this.userService.editableUsers;
    // }

    // set editableUsers(value: Array<UserVo>) {
    //  this.userService.editableUsers = value;
    // }

    // get createdBys(): Array<UserVo> {
    //  return this.userService.createdBys;
    // }
    // get updatedBys(): Array<UserVo> {
    //  return this.userService.updatedBys;
    // }

    get role(): RoleVo {
        return this.userService.role;
    }

    addRole(item: RoleVo) {
        let cloned = new RoleVo();
        cloned.authority = item.authority;
        this.user.rolesVo.push(cloned);
        // this.roles.splice(this.roles.indexOf(item), 1);
    }

    removeRole(i) {
        this.user.rolesVo.splice(this.user.rolesVo.indexOf(i), 1);
        // this.roles.push(i);
    }

    editUser() {
        this.userService.editUser();
    }

    // findAllcreatedBys() {
    //     this.userService.findAllcreatedBys();
    // }
    //
    // findAllupdatedBys() {
    //     this.userService.findAllupdatedBys();
    // }
    //
    // findByusername(ref: string) {
    //     this.userService.findByusername(ref);
    // }

    switchCredentialsNonExpired() {
        this.user.credentialsNonExpired = !this.user.credentialsNonExpired;
        console.log(this.user);
    }

    switchEnabled() {
        this.user.enabled = !this.user.enabled;
        console.log(this.user);
    }

    switchAccountNonExpired() {
        this.user.accountNonExpired = !this.user.accountNonExpired;
        console.log(this.user);
    }

    switchAccountNonLocked() {
        this.user.accountNonLocked = !this.user.accountNonLocked;
        console.log(this.user);
    }

    existRole(r: RoleVo) {
        for (let item of this.user.rolesVo) {
            if (item.authority == r.authority) {
                return true;
            }
        }
        return false;
    }

    initPassword() {
        return this.userService.initPassword();
    }


}
