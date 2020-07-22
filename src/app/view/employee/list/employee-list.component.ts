import { Component, OnInit } from '@angular/core';
import {EmployeeVo} from '../../../controller/model/employee.model';
import {EmployeeService} from '../../../controller/service/Employee.service';
import {UserVo} from '../../../controller/model/User.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeelistComponent implements OnInit {

  constructor(private _employeeService : EmployeeService) {}

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
    this.findAll();
      this.findAllupdatedBys();
      this.findAllcreatedBys();
      this.findAllusers();
  }

  get employeeService (): EmployeeService {
    return this._employeeService;
  }

  set employeeService (value: EmployeeService) {
    this._employeeService = value ;
  }

  get employeeListe (): Array<EmployeeVo> {
    return this.employeeService.employeeListe;
  }

  set employeeListe (value: Array<EmployeeVo>) {
    this.employeeService.employeeListe = value ;
  }

  get employeeDetail (): EmployeeVo {
    return this.employeeService.employeeDetail;
}

  set employeeDetail (value: EmployeeVo) {
  this.employeeService.employeeDetail = value ;
}

get employeeSearch (): EmployeeVo {
  return this.employeeService.employeeSearch;
}

set employeeSearch (value: EmployeeVo) {
  this.employeeService.employeeSearch = value ;
}


get employeeShowDetail (): boolean  {
  return this.employeeService.employeeShowDetail;
}

set employeeShowDetail (value: boolean ) {
  this.employeeService.employeeShowDetail = value ;
}

get employeeShowCreate (): boolean  {
  return this.employeeService.employeeShowCreate;
}

set employeeShowCreate (value: boolean ) {
  this.employeeService.employeeShowCreate = value ;
}
get employeeShowEdit (): boolean  {
  return this.employeeService.employeeShowEdit;
}

set employeeShowEdit (value: boolean ) {
  this.employeeService.employeeShowEdit = value ;
}

  editShow( pojo : EmployeeVo ) {
  this.employeeService.editShow(pojo);

}
  createShow()  {
  this.employeeService.createShow();

}

   delete( pojo : EmployeeVo ) {
    this.employeeService.delete(pojo);
  }


 detailShow( pojo : EmployeeVo ) {
  this.employeeService.detailShow( pojo);

}

 findEmployee(pojo : EmployeeVo ) {
  this.employeeService.findEmployee( pojo);

}
 findAll() {
  this.employeeService.findAll();
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

}
