import { Component, OnInit } from '@angular/core';
import {BordereauVo} from '../../../controller/model/bordereau.model';
import {BordereauService} from '../../../controller/service/Bordereau.service';

@Component({
  selector: 'app-bordereau-details',
  templateUrl: './bordereau-details.component.html',
  styleUrls: ['./bordereau-details.component.css']
})

export class BordereauDetailsComponent implements OnInit {

  constructor(private _bordereauService : BordereauService) {}


   get bordereauService (): BordereauService {
    return this._bordereauService;
  }

  set bordereauService (value: BordereauService) {
    this._bordereauService = value ;
  }

  get bordereauDetail (): BordereauVo {
    return this.bordereauService.bordereauDetail;
}

  set bordereauDetail (value: BordereauVo) {
  this.bordereauService.bordereauDetail = value ;
}


get bordereauShowDetail (): boolean  {
  return this.bordereauService.bordereauShowDetail;
}

set bordereauShowDetail (value: boolean ) {
  this.bordereauService.bordereauShowDetail = value ;
}

  ngOnInit(): void {

  }

public detailHide(){
       this.bordereauService.detailHide();
}

}