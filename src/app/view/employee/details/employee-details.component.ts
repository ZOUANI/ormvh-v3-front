import { Component, OnInit } from '@angular/core';
import {EmployeeVo} from '../../../controller/model/employee.model';
import {EmployeeService} from '../../../controller/service/Employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})

export class EmployeeDetailsComponent implements OnInit {

  constructor(private _employeeService : EmployeeService) {}


   get employeeService (): EmployeeService {
    return this._employeeService;
  }

  set employeeService (value: EmployeeService) {
    this._employeeService = value ;
  }

  get employeeDetail (): EmployeeVo {
    return this.employeeService.employeeDetail;
}

  set employeeDetail (value: EmployeeVo) {
  this.employeeService.employeeDetail = value ;
}


get employeeShowDetail (): boolean  {
  return this.employeeService.employeeShowDetail;
}

set employeeShowDetail (value: boolean ) {
  this.employeeService.employeeShowDetail = value ;
}

  ngOnInit(): void {

  }

public detailHide(){
       this.employeeService.detailHide();
}

}