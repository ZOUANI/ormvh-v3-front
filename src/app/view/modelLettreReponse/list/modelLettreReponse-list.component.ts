import { Component, OnInit } from '@angular/core';
import {ModelLettreReponseVo} from '../../../controller/model/modelLettreReponse.model';
import {ModelLettreReponseService} from '../../../controller/service/ModelLettreReponse.service';
import {UserVo} from '../../../controller/model/User.model';
import {CategorieModelLettreReponseVo} from '../../../controller/model/CategorieModelLettreReponse.model';

@Component({
  selector: 'app-modelLettreReponse-list',
  templateUrl: './modelLettreReponse-list.component.html',
  styleUrls: ['./modelLettreReponse-list.component.css']
})
export class ModelLettreReponselistComponent implements OnInit {

  constructor(private _modelLettreReponseService : ModelLettreReponseService) {}

  get categorieModelLettreReponses(): Array<CategorieModelLettreReponseVo> {
   return this.modelLettreReponseService.categorieModelLettreReponses;
  }
  get createdBys(): Array<UserVo> {
   return this.modelLettreReponseService.createdBys;
  }
  get updatedBys(): Array<UserVo> {
   return this.modelLettreReponseService.updatedBys;
  }

  ngOnInit(): void {
    this.findAll();
      this.findAllcategorieModelLettreReponses();
      this.findAllcreatedBys();
      this.findAllupdatedBys();
  }

  get modelLettreReponseService (): ModelLettreReponseService {
    return this._modelLettreReponseService;
  }

  set modelLettreReponseService (value: ModelLettreReponseService) {
    this._modelLettreReponseService = value ;
  }

  get modelLettreReponseListe (): Array<ModelLettreReponseVo> {
    return this.modelLettreReponseService.modelLettreReponseListe;
  }

  set modelLettreReponseListe (value: Array<ModelLettreReponseVo>) {
    this.modelLettreReponseService.modelLettreReponseListe = value ;
  }

  get modelLettreReponseDetail (): ModelLettreReponseVo {
    return this.modelLettreReponseService.modelLettreReponseDetail;
}

  set modelLettreReponseDetail (value: ModelLettreReponseVo) {
  this.modelLettreReponseService.modelLettreReponseDetail = value ;
}

get modelLettreReponseSearch (): ModelLettreReponseVo {
  return this.modelLettreReponseService.modelLettreReponseSearch;
}

set modelLettreReponseSearch (value: ModelLettreReponseVo) {
  this.modelLettreReponseService.modelLettreReponseSearch = value ;
}


get modelLettreReponseShowDetail (): boolean  {
  return this.modelLettreReponseService.modelLettreReponseShowDetail;
}

set modelLettreReponseShowDetail (value: boolean ) {
  this.modelLettreReponseService.modelLettreReponseShowDetail = value ;
}


   delete( pojo : ModelLettreReponseVo ) {
    this.modelLettreReponseService.delete(pojo);
  }


 detailShow( pojo : ModelLettreReponseVo ) {
  this.modelLettreReponseService.detailShow( pojo);

}

 findModelLettreReponse(pojo : ModelLettreReponseVo ) {
  this.modelLettreReponseService.findModelLettreReponse( pojo);

}
 findAll() {
  this.modelLettreReponseService.findAll();
}

   findAllcategorieModelLettreReponses() {
     this.modelLettreReponseService.findAllcategorieModelLettreReponses();
   }
   findAllcreatedBys() {
     this.modelLettreReponseService.findAllcreatedBys();
   }
   findAllupdatedBys() {
     this.modelLettreReponseService.findAllupdatedBys();
   }

}
