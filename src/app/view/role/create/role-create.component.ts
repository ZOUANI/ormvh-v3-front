import {Component, OnInit} from '@angular/core';
import {RoleService} from '../../../controller/service/Role.service';
import {RoleVo} from '../../../controller/model/role.model';
import {UserVo} from '../../../controller/model/User.model';

@Component({
    selector: 'app-role-create',
    templateUrl: './role-create.component.html',
    styleUrls: ['./role-create.component.css']
})
export class RoleCreateComponent implements OnInit {
    constructor(private roleService: RoleService) {
    }

    get role(): RoleVo {
        return this.roleService.role;
    }

    get updatedBys(): Array<UserVo> {
        return this.roleService.updatedBys;
    }

    get createdBys(): Array<UserVo> {
        return this.roleService.createdBys;
    }

    get roleShowCreate(): boolean {
        return this.roleService.roleShowCreate;
    }

    set roleShowCreate(value: boolean) {
        this.roleService.roleShowCreate = value;
    }

    ngOnInit(): void {
        this.findAllupdatedBys();
        this.findAllcreatedBys();
    }

    saveRole() {
        this.roleService.saveRole();
    }

    findAllupdatedBys() {
        this.roleService.findAllupdatedBys();
    }

    findAllcreatedBys() {
        this.roleService.findAllcreatedBys();
    }

    public createHide() {
        this.roleService.createHide();
    }
}