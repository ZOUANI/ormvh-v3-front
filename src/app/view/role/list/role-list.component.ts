import { Component, OnInit } from '@angular/core';
import {RoleVo} from '../../../controller/model/role.model';
import {RoleService} from '../../../controller/service/Role.service';
import {UserVo} from '../../../controller/model/User.model';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RolelistComponent implements OnInit {

  constructor(private _roleService : RoleService) {}

  get updatedBys(): Array<UserVo> {
   return this.roleService.updatedBys;
  }
  get createdBys(): Array<UserVo> {
   return this.roleService.createdBys;
  }

  ngOnInit(): void {
    this.findAll();
      this.findAllupdatedBys();
      this.findAllcreatedBys();
  }

  get roleService (): RoleService {
    return this._roleService;
  }

  set roleService (value: RoleService) {
    this._roleService = value ;
  }

  get roleListe (): Array<RoleVo> {
    return this.roleService.roleListe;
  }

  set roleListe (value: Array<RoleVo>) {
    this.roleService.roleListe = value ;
  }

  get roleDetail (): RoleVo {
    return this.roleService.roleDetail;
}

  set roleDetail (value: RoleVo) {
  this.roleService.roleDetail = value ;
}

get roleSearch (): RoleVo {
  return this.roleService.roleSearch;
}

set roleSearch (value: RoleVo) {
  this.roleService.roleSearch = value ;
}


get roleShowDetail (): boolean  {
  return this.roleService.roleShowDetail;
}

set roleShowDetail (value: boolean ) {
  this.roleService.roleShowDetail = value ;
}

get roleShowCreate (): boolean  {
  return this.roleService.roleShowCreate;
}

set roleShowCreate (value: boolean ) {
  this.roleService.roleShowCreate = value ;
}
get roleShowEdit (): boolean  {
  return this.roleService.roleShowEdit;
}

set roleShowEdit (value: boolean ) {
  this.roleService.roleShowEdit = value ;
}

  editShow( pojo : RoleVo ) {
  this.roleService.editShow(pojo);

}
  createShow()  {
  this.roleService.createShow();

}

   delete( pojo : RoleVo ) {
    this.roleService.delete(pojo);
  }


 detailShow( pojo : RoleVo ) {
  this.roleService.detailShow( pojo);

}

 findRole(pojo : RoleVo ) {
  this.roleService.findRole( pojo);

}
 findAll() {
  this.roleService.findAll();
}

   findAllupdatedBys() {
     this.roleService.findAllupdatedBys();
   }
   findAllcreatedBys() {
     this.roleService.findAllcreatedBys();
   }

}
