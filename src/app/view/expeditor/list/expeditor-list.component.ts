import { Component, OnInit } from '@angular/core';
import {ExpeditorVo} from '../../../controller/model/expeditor.model';
import {ExpeditorService} from '../../../controller/service/Expeditor.service';
import {UserVo} from '../../../controller/model/User.model';
import {SexeVo} from '../../../controller/model/Sexe.model';
import {NationalityVo} from '../../../controller/model/Nationality.model';

@Component({
  selector: 'app-expeditor-list',
  templateUrl: './expeditor-list.component.html',
  styleUrls: ['./expeditor-list.component.css']
})
export class ExpeditorlistComponent implements OnInit {

  constructor(private _expeditorService : ExpeditorService) {}

  get sexes(): Array<SexeVo> {
   return this.expeditorService.sexes;
  }
  get nationalitys(): Array<NationalityVo> {
   return this.expeditorService.nationalitys;
  }
  get createdBys(): Array<UserVo> {
   return this.expeditorService.createdBys;
  }
  get updatedBys(): Array<UserVo> {
   return this.expeditorService.updatedBys;
  }

  ngOnInit(): void {
    this.findAll();
      this.findAllsexes();
      this.findAllnationalitys();
      this.findAllcreatedBys();
      this.findAllupdatedBys();
  }

  get expeditorService (): ExpeditorService {
    return this._expeditorService;
  }

  set expeditorService (value: ExpeditorService) {
    this._expeditorService = value ;
  }

  get expeditorListe (): Array<ExpeditorVo> {
    return this.expeditorService.expeditorListe;
  }

  set expeditorListe (value: Array<ExpeditorVo>) {
    this.expeditorService.expeditorListe = value ;
  }

  get expeditorDetail (): ExpeditorVo {
    return this.expeditorService.expeditorDetail;
}

  set expeditorDetail (value: ExpeditorVo) {
  this.expeditorService.expeditorDetail = value ;
}

get expeditorSearch (): ExpeditorVo {
  return this.expeditorService.expeditorSearch;
}

set expeditorSearch (value: ExpeditorVo) {
  this.expeditorService.expeditorSearch = value ;
}


get expeditorShowDetail (): boolean  {
  return this.expeditorService.expeditorShowDetail;
}

set expeditorShowDetail (value: boolean ) {
  this.expeditorService.expeditorShowDetail = value ;
}


   delete( pojo : ExpeditorVo ) {
    this.expeditorService.delete(pojo);
  }


 detailShow( pojo : ExpeditorVo ) {
  this.expeditorService.detailShow( pojo);

}

 findExpeditor(pojo : ExpeditorVo ) {
  this.expeditorService.findExpeditor( pojo);

}
 findAll() {
  this.expeditorService.findAll();
}

   findAllsexes() {
     this.expeditorService.findAllsexes();
   }
   findAllnationalitys() {
     this.expeditorService.findAllnationalitys();
   }
   findAllcreatedBys() {
     this.expeditorService.findAllcreatedBys();
   }
   findAllupdatedBys() {
     this.expeditorService.findAllupdatedBys();
   }

}
