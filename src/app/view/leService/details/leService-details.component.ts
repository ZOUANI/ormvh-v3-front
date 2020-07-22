import { Component, OnInit } from '@angular/core';
import {LeServiceVo} from '../../../controller/model/leService.model';
import {LeServiceService} from '../../../controller/service/LeService.service';

@Component({
  selector: 'app-leService-details',
  templateUrl: './leService-details.component.html',
  styleUrls: ['./leService-details.component.css']
})

export class LeServiceDetailsComponent implements OnInit {

  constructor(private _leServiceService : LeServiceService) {}


   get leServiceService (): LeServiceService {
    return this._leServiceService;
  }

  set leServiceService (value: LeServiceService) {
    this._leServiceService = value ;
  }

  get leServiceDetail (): LeServiceVo {
    return this.leServiceService.leServiceDetail;
}

  set leServiceDetail (value: LeServiceVo) {
  this.leServiceService.leServiceDetail = value ;
}


get leServiceShowDetail (): boolean  {
  return this.leServiceService.leServiceShowDetail;
}

set leServiceShowDetail (value: boolean ) {
  this.leServiceService.leServiceShowDetail = value ;
}

  ngOnInit(): void {

  }

public detailHide(){
       this.leServiceService.detailHide();
}

}