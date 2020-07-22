import { Component, OnInit } from '@angular/core';
import {SexeVo} from '../../../controller/model/sexe.model';
import {SexeService} from '../../../controller/service/Sexe.service';

@Component({
  selector: 'app-sexe-list',
  templateUrl: './sexe-list.component.html',
  styleUrls: ['./sexe-list.component.css']
})
export class SexelistComponent implements OnInit {

  constructor(private _sexeService : SexeService) {}


  ngOnInit(): void {
    this.findAll();
  }

  get sexeService (): SexeService {
    return this._sexeService;
  }

  set sexeService (value: SexeService) {
    this._sexeService = value ;
  }

  get sexeListe (): Array<SexeVo> {
    return this.sexeService.sexeListe;
  }

  set sexeListe (value: Array<SexeVo>) {
    this.sexeService.sexeListe = value ;
  }

  get sexeDetail (): SexeVo {
    return this.sexeService.sexeDetail;
}

  set sexeDetail (value: SexeVo) {
  this.sexeService.sexeDetail = value ;
}

get sexeSearch (): SexeVo {
  return this.sexeService.sexeSearch;
}

set sexeSearch (value: SexeVo) {
  this.sexeService.sexeSearch = value ;
}


get sexeShowDetail (): boolean  {
  return this.sexeService.sexeShowDetail;
}

set sexeShowDetail (value: boolean ) {
  this.sexeService.sexeShowDetail = value ;
}

get sexeShowCreate (): boolean  {
  return this.sexeService.sexeShowCreate;
}

set sexeShowCreate (value: boolean ) {
  this.sexeService.sexeShowCreate = value ;
}
get sexeShowEdit (): boolean  {
  return this.sexeService.sexeShowEdit;
}

set sexeShowEdit (value: boolean ) {
  this.sexeService.sexeShowEdit = value ;
}

  editShow( pojo : SexeVo ) {
  this.sexeService.editShow(pojo);

}
  createShow()  {
  this.sexeService.createShow();

}

   delete( pojo : SexeVo ) {
    this.sexeService.delete(pojo);
  }


 detailShow( pojo : SexeVo ) {
  this.sexeService.detailShow( pojo);

}

 findSexe(pojo : SexeVo ) {
  this.sexeService.findSexe( pojo);

}
 findAll() {
  this.sexeService.findAll();
}


}
