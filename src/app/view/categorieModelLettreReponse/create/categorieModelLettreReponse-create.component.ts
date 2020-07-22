import {Component, OnInit} from '@angular/core';
import {CategorieModelLettreReponseService} from '../../../controller/service/CategorieModelLettreReponse.service';
import {CategorieModelLettreReponseVo} from '../../../controller/model/categorieModelLettreReponse.model';
import {UserVo} from '../../../controller/model/User.model';

@Component({
  selector: 'app-categorieModelLettreReponse-create',
  templateUrl: './categorieModelLettreReponse-create.component.html',
  styleUrls: ['./categorieModelLettreReponse-create.component.css']
})
export class CategorieModelLettreReponseCreateComponent implements OnInit {
  constructor(private categorieModelLettreReponseService: CategorieModelLettreReponseService) { }

   ngOnInit(): void {
      this.findAllupdatedBys();
      this.findAllcreatedBys();
    }

   get categorieModelLettreReponse(): CategorieModelLettreReponseVo {
    return this.categorieModelLettreReponseService.categorieModelLettreReponse;
  }

  get updatedBys(): Array<UserVo> {
   return this.categorieModelLettreReponseService.updatedBys;
  }
  get createdBys(): Array<UserVo> {
   return this.categorieModelLettreReponseService.createdBys;
  }

   saveCategorieModelLettreReponse() {
    this.categorieModelLettreReponseService.saveCategorieModelLettreReponse();
  }

   findAllupdatedBys() {
     this.categorieModelLettreReponseService.findAllupdatedBys();
   }
   findAllcreatedBys() {
     this.categorieModelLettreReponseService.findAllcreatedBys();
   }

get categorieModelLettreReponseShowCreate (): boolean  {
  return this.categorieModelLettreReponseService.categorieModelLettreReponseShowCreate;
}

set categorieModelLettreReponseShowCreate (value: boolean ) {
  this.categorieModelLettreReponseService.categorieModelLettreReponseShowCreate = value ;
}
public createHide(){
       this.categorieModelLettreReponseService.createHide();
}
}