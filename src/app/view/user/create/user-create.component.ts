import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../controller/service/User.service';
import {UserVo} from '../../../controller/model/user.model';
import {RoleVo} from '../../../controller/model/Role.model';
import {RoleService} from '../../../controller/service/Role.service';
import {LeServiceVo} from '../../../controller/model/LeService.model';
import {LeServiceService} from '../../../controller/service/LeService.service';

@Component({
    selector: 'app-user-create',
    templateUrl: './user-create.component.html',
    styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

    // tslint:disable-next-line:variable-name
    private _leServices: LeServiceVo[];

    constructor(
        private userService: UserService,
        private roleService: RoleService,
        private leServiceService: LeServiceService,
    ) {
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

    ngOnInit(): void {
        this.roleService.findAll();
        this.findAllServices();

    }

    get user(): UserVo {
        return this.userService.user;
    }


    get role(): RoleVo {
        return this.userService.role;
    }

    addRole(item: RoleVo) {
        const cloned = new RoleVo();
        cloned.authority = item.authority;
        this.user.rolesVo.push(cloned);
        this.roles.splice(this.roles.indexOf(item), 1);
    }

    removeRole(i: RoleVo) {
        this.user.rolesVo.splice(this.user.rolesVo.indexOf(i), 1);
        this.roles.push(i);
    }

    saveUser() {
        this.userService.saveUser();
    }


    get roles() {
        return this.roleService.roleListe;
    }


    get leServices(): LeServiceVo[] {
        return this._leServices;
    }
}
