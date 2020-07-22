import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ModelLettreReponseVo} from '../model/modelLettreReponse.model';
import {UserVo} from '../model/User.model';
import {CategorieModelLettreReponseVo} from '../model/CategorieModelLettreReponse.model';
@Injectable({
  providedIn: 'root'
})
export class ModelLettreReponseService {

  constructor(private http: HttpClient) { }
  private _modelLettreReponseDetail : ModelLettreReponseVo =  new ModelLettreReponseVo() ;
  private _modelLettreReponseListe  : Array<ModelLettreReponseVo> = new Array<ModelLettreReponseVo>();
  
  private _modelLettreReponseSearch : ModelLettreReponseVo = new ModelLettreReponseVo();
  private _modelLettreReponse: ModelLettreReponseVo =  new ModelLettreReponseVo();
  private _searchedModelLettreReponses: Array<ModelLettreReponseVo> = new Array<ModelLettreReponseVo>();
  private _editableModelLettreReponses: Array<ModelLettreReponseVo> = new Array<ModelLettreReponseVo>();
  private _categorieModelLettreReponses: Array<CategorieModelLettreReponseVo> = new Array<CategorieModelLettreReponseVo>();
  private _createdBys: Array<UserVo> = new Array<UserVo>();
  private _updatedBys: Array<UserVo> = new Array<UserVo>();
   get categorieModelLettreReponses(): Array<CategorieModelLettreReponseVo> {
    return this._categorieModelLettreReponses;
   }

   set categorieModelLettreReponses(value: Array<CategorieModelLettreReponseVo>) {
    this._categorieModelLettreReponses = value;
   }
   get createdBys(): Array<UserVo> {
    return this._createdBys;
   }

   set createdBys(value: Array<UserVo>) {
    this._createdBys = value;
   }
   get updatedBys(): Array<UserVo> {
    return this._updatedBys;
   }

   set updatedBys(value: Array<UserVo>) {
    this._updatedBys = value;
   }

  get modelLettreReponse(): ModelLettreReponseVo {
    if (this._modelLettreReponse == null) {
      this._modelLettreReponse = new ModelLettreReponseVo();
    }
    return this._modelLettreReponse;
  }

  set modelLettreReponse(value: ModelLettreReponseVo) {
    this._modelLettreReponse = value;
  }

  get modelLettreReponseListe (): Array<ModelLettreReponseVo> {
  return this._modelLettreReponseListe;
}

set modelLettreReponseListe (value: Array<ModelLettreReponseVo>) {
  this._modelLettreReponseListe = value ;
}

get modelLettreReponseDetail (): ModelLettreReponseVo {
  return this._modelLettreReponseDetail;
}

set modelLettreReponseDetail (value: ModelLettreReponseVo) {
  this._modelLettreReponseDetail = value ;
}

get modelLettreReponseSearch (): ModelLettreReponseVo {
  return this._modelLettreReponseSearch;
}

set modelLettreReponseSearch (value: ModelLettreReponseVo) {
  this._modelLettreReponseSearch = value ;
}

get modelLettreReponseShowDetail (): boolean  {
  return this._modelLettreReponseShowDetail;
}

set modelLettreReponseShowDetail (value: boolean ) {
  this._modelLettreReponseShowDetail = value ;
}

  get editableModelLettreReponses (): Array<ModelLettreReponseVo> {
   return this._editableModelLettreReponses;
  }

  set editableModelLettreReponses (value: Array<ModelLettreReponseVo>) {
   this._editableModelLettreReponses = value;
  }

  public findAll(){
  this.http.get<Array<ModelLettreReponseVo>>('http://localhost:8080/generated/modelLettreReponse/').subscribe(
    value => {
      if (value != null) {
           this.modelLettreReponseListe = value;
           this.editableModelLettreReponses = value;
                                                 
      }
    }
  );
}

  public saveModelLettreReponse() {
  this.http.post<ModelLettreReponseVo>('http://localhost:8080/generated/modelLettreReponse/', this.modelLettreReponse).subscribe(data=>{
     this.modelLettreReponseListe.push(data);

  });
  }

  public editModelLettreReponse() {
  this.http.put<ModelLettreReponseVo>('http://localhost:8080/generated/modelLettreReponse/', this.modelLettreReponse).subscribe(data=>{
  });
   
  }

   public findModelLettreReponse ( pojo : ModelLettreReponseVo ){
  this.http.post<Array<ModelLettreReponseVo>>('http://localhost:8080/generated/modelLettreReponse/search/', pojo).subscribe(
    value =>{
       this.modelLettreReponseListe = value;  
    } );
}

public detailShow ( pojo : ModelLettreReponseVo ){
    this.modelLettreReponseDetail = pojo;
    this.modelLettreReponseShowDetail = true;
 
}



delete(pojo: ModelLettreReponseVo) {
   this.http.delete<ModelLettreReponseVo>('http://localhost:8080/generated/modelLettreReponse/id/'+pojo.id).subscribe(
        value => {
        var index = this.modelLettreReponseListe.indexOf(pojo);
if (index > -1) {
   this.modelLettreReponseListe.splice(index, 1);
}
}
        );


}


       public findBylibelle(ref: string) {
      this.http.get<ModelLettreReponseVo>('http://localhost:8080/generated/modelLettreReponse/libelle/' + ref).subscribe(
        value => {
        if (value != null) { this.modelLettreReponse = value; }
        }
        );
        }

            public findAllcategorieModelLettreReponses() {
             this.http.get<Array<CategorieModelLettreReponseVo>>('http://localhost:8080/generated/categorieModelLettreReponse/').subscribe(
            value => {
            if (value != null) { this.categorieModelLettreReponses = value; }
            }
            );
            }
            public findAllcreatedBys() {
             this.http.get<Array<UserVo>>('http://localhost:8080/generated/user/').subscribe(
            value => {
            if (value != null) { this.createdBys = value; }
            }
            );
            }
            public findAllupdatedBys() {
             this.http.get<Array<UserVo>>('http://localhost:8080/generated/user/').subscribe(
            value => {
            if (value != null) { this.updatedBys = value; }
            }
            );
            }


          /***********************************************************************************************/
        private _modelLettreReponseShowDetail : boolean;
              public detailHide (){

       this.modelLettreReponseShowDetail = false;
       this.modelLettreReponseDetail = null;
                                  }
}