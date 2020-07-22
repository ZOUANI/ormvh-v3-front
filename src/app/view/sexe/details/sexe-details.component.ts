import { Component, OnInit } from '@angular/core';
import {SexeVo} from '../../../controller/model/sexe.model';
import {SexeService} from '../../../controller/service/Sexe.service';

@Component({
  selector: 'app-sexe-details',
  templateUrl: './sexe-details.component.html',
  styleUrls: ['./sexe-details.component.css']
})

export class SexeDetailsComponent implements OnInit {

  constructor(private _sexeService : SexeService) {}


   get sexeService (): SexeService {
    return this._sexeService;
  }

  set sexeService (value: SexeService) {
    this._sexeService = value ;
  }

  get sexeDetail (): SexeVo {
    return this.sexeService.sexeDetail;
}

  set sexeDetail (value: SexeVo) {
  this.sexeService.sexeDetail = value ;
}


get sexeShowDetail (): boolean  {
  return this.sexeService.sexeShowDetail;
}

set sexeShowDetail (value: boolean ) {
  this.sexeService.sexeShowDetail = value ;
}

  ngOnInit(): void {

  }

public detailHide(){
       this.sexeService.detailHide();
}

}