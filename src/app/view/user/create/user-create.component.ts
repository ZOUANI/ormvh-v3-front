import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../controller/service/User.service';
import {UserVo} from '../../../controller/model/user.model';
import {RoleVo} from '../../../controller/model/Role.model';
import {RoleService} from '../../../controller/service/Role.service';

@Component({
    selector: 'app-user-create',
    templateUrl: './user-create.component.html',
    styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
    constructor(
        private userService: UserService,
        private roleService: RoleService,
    ) {
    }

    ngOnInit(): void {
        this.roleService.findAll();
    }

    get user(): UserVo {
        return this.userService.user;
    }


    get role(): RoleVo {
        return this.userService.role;
    }

    addRole(item: RoleVo) {
        let cloned = new RoleVo();
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

}