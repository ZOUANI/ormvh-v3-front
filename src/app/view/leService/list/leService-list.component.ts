import { Component, OnInit } from '@angular/core';
import {LeServiceVo} from '../../../controller/model/leService.model';
import {LeServiceService} from '../../../controller/service/LeService.service';
import {UserVo} from '../../../controller/model/User.model';

@Component({
  selector: 'app-leService-list',
  templateUrl: './leService-list.component.html',
  styleUrls: ['./leService-list.component.css']
})
export class LeServicelistComponent implements OnInit {

  constructor(private _leServiceService : LeServiceService) {}

  get createdBys(): Array<UserVo> {
   return this.leServiceService.createdBys;
  }
  get updatedBys(): Array<UserVo> {
   return this.leServiceService.updatedBys;
  }

  ngOnInit(): void {
    this.findAll();
      this.findAllcreatedBys();
      this.findAllupdatedBys();
  }

  get leServiceService (): LeServiceService {
    return this._leServiceService;
  }

  set leServiceService (value: LeServiceService) {
    this._leServiceService = value ;
  }

  get leServiceListe (): Array<LeServiceVo> {
    return this.leServiceService.leServiceListe;
  }

  set leServiceListe (value: Array<LeServiceVo>) {
    this.leServiceService.leServiceListe = value ;
  }

  get leServiceDetail (): LeServiceVo {
    return this.leServiceService.leServiceDetail;
}

  set leServiceDetail (value: LeServiceVo) {
  this.leServiceService.leServiceDetail = value ;
}

get leServiceSearch (): LeServiceVo {
  return this.leServiceService.leServiceSearch;
}

set leServiceSearch (value: LeServiceVo) {
  this.leServiceService.leServiceSearch = value ;
}


get leServiceShowDetail (): boolean  {
  return this.leServiceService.leServiceShowDetail;
}

set leServiceShowDetail (value: boolean ) {
  this.leServiceService.leServiceShowDetail = value ;
}

get leServiceShowCreate (): boolean  {
  return this.leServiceService.leServiceShowCreate;
}

set leServiceShowCreate (value: boolean ) {
  this.leServiceService.leServiceShowCreate = value ;
}
get leServiceShowEdit (): boolean  {
  return this.leServiceService.leServiceShowEdit;
}

set leServiceShowEdit (value: boolean ) {
  this.leServiceService.leServiceShowEdit = value ;
}

  editShow( pojo : LeServiceVo ) {
  this.leServiceService.editShow(pojo);

}
  createShow()  {
  this.leServiceService.createShow();

}

   delete( pojo : LeServiceVo ) {
    this.leServiceService.delete(pojo);
  }


 detailShow( pojo : LeServiceVo ) {
  this.leServiceService.detailShow( pojo);

}

 findLeService(pojo : LeServiceVo ) {
  this.leServiceService.findLeService( pojo);

}
 findAll() {
  this.leServiceService.findAll();
}

   findAllcreatedBys() {
     this.leServiceService.findAllcreatedBys();
   }
   findAllupdatedBys() {
     this.leServiceService.findAllupdatedBys();
   }

}
