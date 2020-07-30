import {Component, OnInit} from '@angular/core';
import {RoleService} from '../../../controller/service/Role.service';
import {RoleVo} from '../../../controller/model/role.model';
import {UserVo} from '../../../controller/model/User.model';

@Component({
    selector: 'app-role-edit',
    templateUrl: './role-edit.component.html',
    styleUrls: ['./role-edit.component.css']
})
export class RoleEditComponent implements OnInit {
    constructor(private roleService: RoleService) {
    }

    get role(): RoleVo {
        return this.roleService.role;
    }

    get editableRoles(): Array<RoleVo> {
        return this.roleService.editableRoles;
    }

    set editableRoles(value: Array<RoleVo>) {
        this.roleService.editableRoles = value;
    }

    get updatedBys(): Array<UserVo> {
        return this.roleService.updatedBys;
    }

    get createdBys(): Array<UserVo> {
        return this.roleService.createdBys;
    }

    ngOnInit(): void {
        this.findAllupdatedBys();
        this.findAllcreatedBys();
    }

    editRole() {
        this.roleService.editRole();
    }

    findAllupdatedBys() {
        this.roleService.findAllupdatedBys();
    }

    findAllcreatedBys() {
        this.roleService.findAllcreatedBys();
    }

    findByauthority(ref: string) {
        this.roleService.findByauthority(ref);
    }

    editHide() {
        this.roleService.editHide();
    }


}