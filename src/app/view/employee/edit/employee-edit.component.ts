import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../../controller/service/Employee.service';
import {EmployeeVo} from '../../../controller/model/employee.model';
import {UserVo} from '../../../controller/model/User.model';

@Component({
    selector: 'app-employee-edit',
    templateUrl: './employee-edit.component.html',
    styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
    constructor(private employeeService: EmployeeService) {
    }

    get employee(): EmployeeVo {
        return this.employeeService.employee;
    }

    get editableEmployees(): Array<EmployeeVo> {
        return this.employeeService.editableEmployees;
    }

    set editableEmployees(value: Array<EmployeeVo>) {
        this.employeeService.editableEmployees = value;
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

    ngOnInit(): void {
        this.findAllupdatedBys();
        this.findAllcreatedBys();
        this.findAllusers();
    }

    editEmployee() {
        this.employeeService.editEmployee();
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

    findBytitle(ref: string) {
        this.employeeService.findBytitle(ref);
    }

    editHide() {
        this.employeeService.editHide();
    }


}