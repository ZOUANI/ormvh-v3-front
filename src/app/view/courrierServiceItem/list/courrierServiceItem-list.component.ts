import { Component, OnInit } from '@angular/core';
import {CourrierServiceItemVo} from '../../../controller/model/courrierServiceItem.model';
import {CourrierServiceItemService} from '../../../controller/service/CourrierServiceItem.service';
import {CourrierVo} from '../../../controller/model/Courrier.model';
import {LeServiceVo} from '../../../controller/model/LeService.model';

@Component({
  selector: 'app-courrierServiceItem-list',
  templateUrl: './courrierServiceItem-list.component.html',
  styleUrls: ['./courrierServiceItem-list.component.css']
})
export class CourrierServiceItemlistComponent implements OnInit {

  constructor(private _courrierServiceItemService : CourrierServiceItemService) {}

  get courriers(): Array<CourrierVo> {
   return this.courrierServiceItemService.courriers;
  }
  get services(): Array<LeServiceVo> {
   return this.courrierServiceItemService.services;
  }

  ngOnInit(): void {
    this.findAll();
      this.findAllcourriers();
      this.findAllservices();
  }

  get courrierServiceItemService (): CourrierServiceItemService {
    return this._courrierServiceItemService;
  }

  set courrierServiceItemService (value: CourrierServiceItemService) {
    this._courrierServiceItemService = value ;
  }

  get courrierServiceItemListe (): Array<CourrierServiceItemVo> {
    return this.courrierServiceItemService.courrierServiceItemListe;
  }

  set courrierServiceItemListe (value: Array<CourrierServiceItemVo>) {
    this.courrierServiceItemService.courrierServiceItemListe = value ;
  }

  get courrierServiceItemDetail (): CourrierServiceItemVo {
    return this.courrierServiceItemService.courrierServiceItemDetail;
}

  set courrierServiceItemDetail (value: CourrierServiceItemVo) {
  this.courrierServiceItemService.courrierServiceItemDetail = value ;
}

get courrierServiceItemSearch (): CourrierServiceItemVo {
  return this.courrierServiceItemService.courrierServiceItemSearch;
}

set courrierServiceItemSearch (value: CourrierServiceItemVo) {
  this.courrierServiceItemService.courrierServiceItemSearch = value ;
}


get courrierServiceItemShowDetail (): boolean  {
  return this.courrierServiceItemService.courrierServiceItemShowDetail;
}

set courrierServiceItemShowDetail (value: boolean ) {
  this.courrierServiceItemService.courrierServiceItemShowDetail = value ;
}

get courrierServiceItemShowCreate (): boolean  {
  return this.courrierServiceItemService.courrierServiceItemShowCreate;
}

set courrierServiceItemShowCreate (value: boolean ) {
  this.courrierServiceItemService.courrierServiceItemShowCreate = value ;
}
get courrierServiceItemShowEdit (): boolean  {
  return this.courrierServiceItemService.courrierServiceItemShowEdit;
}

set courrierServiceItemShowEdit (value: boolean ) {
  this.courrierServiceItemService.courrierServiceItemShowEdit = value ;
}

  editShow( pojo : CourrierServiceItemVo ) {
  this.courrierServiceItemService.editShow(pojo);

}
  createShow()  {
  this.courrierServiceItemService.createShow();

}

   delete( pojo : CourrierServiceItemVo ) {
    this.courrierServiceItemService.delete(pojo);
  }


 detailShow( pojo : CourrierServiceItemVo ) {
  this.courrierServiceItemService.detailShow( pojo);

}

 findCourrierServiceItem(pojo : CourrierServiceItemVo ) {
  this.courrierServiceItemService.findCourrierServiceItem( pojo);

}
 findAll() {
  this.courrierServiceItemService.findAll();
}

   findAllcourriers() {
     this.courrierServiceItemService.findAllcourriers();
   }
   findAllservices() {
     this.courrierServiceItemService.findAllservices();
   }

}
