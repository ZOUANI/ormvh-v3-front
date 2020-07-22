import { Component, OnInit } from '@angular/core';
import {StatusVo} from '../../../controller/model/status.model';
import {StatusService} from '../../../controller/service/Status.service';
import {UserVo} from '../../../controller/model/User.model';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.css']
})
export class StatuslistComponent implements OnInit {

  constructor(private _statusService : StatusService) {}

  get createdBys(): Array<UserVo> {
   return this.statusService.createdBys;
  }
  get updatedBys(): Array<UserVo> {
   return this.statusService.updatedBys;
  }

  ngOnInit(): void {
    this.findAll();
      this.findAllcreatedBys();
      this.findAllupdatedBys();
  }

  get statusService (): StatusService {
    return this._statusService;
  }

  set statusService (value: StatusService) {
    this._statusService = value ;
  }

  get statusListe (): Array<StatusVo> {
    return this.statusService.statusListe;
  }

  set statusListe (value: Array<StatusVo>) {
    this.statusService.statusListe = value ;
  }

  get statusDetail (): StatusVo {
    return this.statusService.statusDetail;
}

  set statusDetail (value: StatusVo) {
  this.statusService.statusDetail = value ;
}

get statusSearch (): StatusVo {
  return this.statusService.statusSearch;
}

set statusSearch (value: StatusVo) {
  this.statusService.statusSearch = value ;
}


get statusShowDetail (): boolean  {
  return this.statusService.statusShowDetail;
}

set statusShowDetail (value: boolean ) {
  this.statusService.statusShowDetail = value ;
}

get statusShowCreate (): boolean  {
  return this.statusService.statusShowCreate;
}

set statusShowCreate (value: boolean ) {
  this.statusService.statusShowCreate = value ;
}
get statusShowEdit (): boolean  {
  return this.statusService.statusShowEdit;
}

set statusShowEdit (value: boolean ) {
  this.statusService.statusShowEdit = value ;
}

  editShow( pojo : StatusVo ) {
  this.statusService.editShow(pojo);

}
  createShow()  {
  this.statusService.createShow();

}

   delete( pojo : StatusVo ) {
    this.statusService.delete(pojo);
  }


 detailShow( pojo : StatusVo ) {
  this.statusService.detailShow( pojo);

}

 findStatus(pojo : StatusVo ) {
  this.statusService.findStatus( pojo);

}
 findAll() {
  this.statusService.findAll();
}

   findAllcreatedBys() {
     this.statusService.findAllcreatedBys();
   }
   findAllupdatedBys() {
     this.statusService.findAllupdatedBys();
   }

}
