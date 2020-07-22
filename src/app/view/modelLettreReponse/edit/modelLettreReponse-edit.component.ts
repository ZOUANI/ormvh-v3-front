import {Component, OnInit} from '@angular/core';
import {ModelLettreReponseService} from '../../../controller/service/ModelLettreReponse.service';
import {ModelLettreReponseVo} from '../../../controller/model/modelLettreReponse.model';
import {UserVo} from '../../../controller/model/User.model';
import {CategorieModelLettreReponseVo} from '../../../controller/model/CategorieModelLettreReponse.model';

@Component({
  selector: 'app-modelLettreReponse-edit',
  templateUrl: './modelLettreReponse-edit.component.html',
  styleUrls: ['./modelLettreReponse-edit.component.css']
})
export class ModelLettreReponseEditComponent implements OnInit {
  constructor(private modelLettreReponseService: ModelLettreReponseService) { }

   ngOnInit(): void {
       this.findAllcategorieModelLettreReponses();
       this.findAllcreatedBys();
       this.findAllupdatedBys();
    }

   get modelLettreReponse(): ModelLettreReponseVo {
    return this.modelLettreReponseService.modelLettreReponse;
  }

   get editableModelLettreReponses(): Array<ModelLettreReponseVo> {
    return this.modelLettreReponseService.editableModelLettreReponses;
   }

   set editableModelLettreReponses(value: Array<ModelLettreReponseVo>) {
    this.modelLettreReponseService.editableModelLettreReponses = value;
   }

  get categorieModelLettreReponses(): Array<CategorieModelLettreReponseVo> {
   return this.modelLettreReponseService.categorieModelLettreReponses;
  }
  get createdBys(): Array<UserVo> {
   return this.modelLettreReponseService.createdBys;
  }
  get updatedBys(): Array<UserVo> {
   return this.modelLettreReponseService.updatedBys;
  }

   editModelLettreReponse() {
    this.modelLettreReponseService.editModelLettreReponse();
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

     findBylibelle(ref: string) {
      this.modelLettreReponseService.findBylibelle(ref);
     }


}