import { Component, OnInit } from '@angular/core';
import {SubdivisionVo} from '../../../controller/model/subdivision.model';
import {SubdivisionService} from '../../../controller/service/Subdivision.service';
import {UserVo} from '../../../controller/model/User.model';

@Component({
  selector: 'app-subdivision-list',
  templateUrl: './subdivision-list.component.html',
  styleUrls: ['./subdivision-list.component.css']
})
export class SubdivisionlistComponent implements OnInit {

  constructor(private _subdivisionService : SubdivisionService) {}

  get createdBys(): Array<UserVo> {
   return this.subdivisionService.createdBys;
  }
  get updatedBys(): Array<UserVo> {
   return this.subdivisionService.updatedBys;
  }

  ngOnInit(): void {
    this.findAll();
      this.findAllcreatedBys();
      this.findAllupdatedBys();
  }

  get subdivisionService (): SubdivisionService {
    return this._subdivisionService;
  }

  set subdivisionService (value: SubdivisionService) {
    this._subdivisionService = value ;
  }

  get subdivisionListe (): Array<SubdivisionVo> {
    return this.subdivisionService.subdivisionListe;
  }

  set subdivisionListe (value: Array<SubdivisionVo>) {
    this.subdivisionService.subdivisionListe = value ;
  }

  get subdivisionDetail (): SubdivisionVo {
    return this.subdivisionService.subdivisionDetail;
}

  set subdivisionDetail (value: SubdivisionVo) {
  this.subdivisionService.subdivisionDetail = value ;
}

get subdivisionSearch (): SubdivisionVo {
  return this.subdivisionService.subdivisionSearch;
}

set subdivisionSearch (value: SubdivisionVo) {
  this.subdivisionService.subdivisionSearch = value ;
}


get subdivisionShowDetail (): boolean  {
  return this.subdivisionService.subdivisionShowDetail;
}

set subdivisionShowDetail (value: boolean ) {
  this.subdivisionService.subdivisionShowDetail = value ;
}

get subdivisionShowCreate (): boolean  {
  return this.subdivisionService.subdivisionShowCreate;
}

set subdivisionShowCreate (value: boolean ) {
  this.subdivisionService.subdivisionShowCreate = value ;
}
get subdivisionShowEdit (): boolean  {
  return this.subdivisionService.subdivisionShowEdit;
}

set subdivisionShowEdit (value: boolean ) {
  this.subdivisionService.subdivisionShowEdit = value ;
}

  editShow( pojo : SubdivisionVo ) {
  this.subdivisionService.editShow(pojo);

}
  createShow()  {
  this.subdivisionService.createShow();

}

   delete( pojo : SubdivisionVo ) {
    this.subdivisionService.delete(pojo);
  }


 detailShow( pojo : SubdivisionVo ) {
  this.subdivisionService.detailShow( pojo);

}

 findSubdivision(pojo : SubdivisionVo ) {
  this.subdivisionService.findSubdivision( pojo);

}
 findAll() {
  this.subdivisionService.findAll();
}

   findAllcreatedBys() {
     this.subdivisionService.findAllcreatedBys();
   }
   findAllupdatedBys() {
     this.subdivisionService.findAllupdatedBys();
   }

}
