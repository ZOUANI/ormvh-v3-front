import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../../controller/service/Employee.service';
import {EmployeeVo} from '../../../controller/model/employee.model';
import {UserVo} from '../../../controller/model/User.model';

@Component({
    selector: 'app-employee-create',
    templateUrl: './employee-create.component.html',
    styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
    constructor(private employeeService: EmployeeService) {
    }

    get employee(): EmployeeVo {
        return this.employeeService.employee;
    }

    get updatedBys(): Array<UserVo> {
        return this.employeeService.updatedBys;
    }

    get createdBys(): Array<UserVo> {
        return this.employeeService.createdBys;
    }

    get users(): Array<UserVo> {
        return this.employeeService.users;
    }

    get employeeShowCreate(): boolean {
        return this.employeeService.employeeShowCreate;
    }

    set employeeShowCreate(value: boolean) {
        this.employeeService.employeeShowCreate = value;
    }

    ngOnInit(): void {
        this.findAllupdatedBys();
        this.findAllcreatedBys();
        this.findAllusers();
    }

    saveEmployee() {
        this.employeeService.saveEmployee();
    }

    findAllupdatedBys() {
        this.employeeService.findAllupdatedBys();
    }

    findAllcreatedBys() {
        this.employeeService.findAllcreatedBys();
    }

    findAllusers() {
        this.employeeService.findAllusers();
    }

    public createHide() {
        this.employeeService.createHide();
    }
}