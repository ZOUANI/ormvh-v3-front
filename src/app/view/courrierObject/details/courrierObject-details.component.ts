import { Component, OnInit } from '@angular/core';
import {CourrierObjectVo} from '../../../controller/model/courrierObject.model';
import {CourrierObjectService} from '../../../controller/service/CourrierObject.service';

@Component({
  selector: 'app-courrierObject-details',
  templateUrl: './courrierObject-details.component.html',
  styleUrls: ['./courrierObject-details.component.css']
})

export class CourrierObjectDetailsComponent implements OnInit {

  constructor(private _courrierObjectService : CourrierObjectService) {}


   get courrierObjectService (): CourrierObjectService {
    return this._courrierObjectService;
  }

  set courrierObjectService (value: CourrierObjectService) {
    this._courrierObjectService = value ;
  }

  get courrierObjectDetail (): CourrierObjectVo {
    return this.courrierObjectService.courrierObjectDetail;
}

  set courrierObjectDetail (value: CourrierObjectVo) {
  this.courrierObjectService.courrierObjectDetail = value ;
}


get courrierObjectShowDetail (): boolean  {
  return this.courrierObjectService.courrierObjectShowDetail;
}

set courrierObjectShowDetail (value: boolean ) {
  this.courrierObjectService.courrierObjectShowDetail = value ;
}

  ngOnInit(): void {

  }

public detailHide(){
       this.courrierObjectService.detailHide();
}

}