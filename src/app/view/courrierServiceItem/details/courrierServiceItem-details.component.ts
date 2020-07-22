import { Component, OnInit } from '@angular/core';
import {CourrierServiceItemVo} from '../../../controller/model/courrierServiceItem.model';
import {CourrierServiceItemService} from '../../../controller/service/CourrierServiceItem.service';

@Component({
  selector: 'app-courrierServiceItem-details',
  templateUrl: './courrierServiceItem-details.component.html',
  styleUrls: ['./courrierServiceItem-details.component.css']
})

export class CourrierServiceItemDetailsComponent implements OnInit {

  constructor(private _courrierServiceItemService : CourrierServiceItemService) {}


   get courrierServiceItemService (): CourrierServiceItemService {
    return this._courrierServiceItemService;
  }

  set courrierServiceItemService (value: CourrierServiceItemService) {
    this._courrierServiceItemService = value ;
  }

  get courrierServiceItemDetail (): CourrierServiceItemVo {
    return this.courrierServiceItemService.courrierServiceItemDetail;
}

  set courrierServiceItemDetail (value: CourrierServiceItemVo) {
  this.courrierServiceItemService.courrierServiceItemDetail = value ;
}


get courrierServiceItemShowDetail (): boolean  {
  return this.courrierServiceItemService.courrierServiceItemShowDetail;
}

set courrierServiceItemShowDetail (value: boolean ) {
  this.courrierServiceItemService.courrierServiceItemShowDetail = value ;
}

  ngOnInit(): void {

  }

public detailHide(){
       this.courrierServiceItemService.detailHide();
}

}