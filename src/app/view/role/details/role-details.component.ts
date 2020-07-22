import { Component, OnInit } from '@angular/core';
import {RoleVo} from '../../../controller/model/role.model';
import {RoleService} from '../../../controller/service/Role.service';

@Component({
  selector: 'app-role-details',
  templateUrl: './role-details.component.html',
  styleUrls: ['./role-details.component.css']
})

export class RoleDetailsComponent implements OnInit {

  constructor(private _roleService : RoleService) {}


   get roleService (): RoleService {
    return this._roleService;
  }

  set roleService (value: RoleService) {
    this._roleService = value ;
  }

  get roleDetail (): RoleVo {
    return this.roleService.roleDetail;
}

  set roleDetail (value: RoleVo) {
  this.roleService.roleDetail = value ;
}


get roleShowDetail (): boolean  {
  return this.roleService.roleShowDetail;
}

set roleShowDetail (value: boolean ) {
  this.roleService.roleShowDetail = value ;
}

  ngOnInit(): void {

  }

public detailHide(){
       this.roleService.detailHide();
}

}