import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EvaluationVo} from '../model/evaluation.model';
import {UserVo} from '../model/User.model';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  

  constructor(private http: HttpClient) { }
  private _evaluationDetail : EvaluationVo =  new EvaluationVo() ;
  private _evaluationListe  : Array<EvaluationVo> = new Array<EvaluationVo>();
  
  private _evaluationSearch : EvaluationVo = new EvaluationVo();
  private _evaluation: EvaluationVo =  new EvaluationVo();
  private _searchedEvaluations: Array<EvaluationVo> = new Array<EvaluationVo>();
  private _editableEvaluations: Array<EvaluationVo> = new Array<EvaluationVo>();
  private _createdBys: Array<UserVo> = new Array<UserVo>();
  private _updatedBys: Array<UserVo> = new Array<UserVo>();
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

  get evaluation(): EvaluationVo {
    if (this._evaluation == null) {
      this._evaluation = new EvaluationVo();
    }
    return this._evaluation;
  }

  set evaluation(value: EvaluationVo) {
    this._evaluation = value;
  }

  get evaluationListe (): Array<EvaluationVo> {
  return this._evaluationListe;
}

set evaluationListe (value: Array<EvaluationVo>) {
  this._evaluationListe = value ;
}

get evaluationDetail (): EvaluationVo {
  return this._evaluationDetail;
}

set evaluationDetail (value: EvaluationVo) {
  this._evaluationDetail = value ;
}

get evaluationSearch (): EvaluationVo {
  return this._evaluationSearch;
}

set evaluationSearch (value: EvaluationVo) {
  this._evaluationSearch = value ;
}

get evaluationShowDetail (): boolean  {
  return this._evaluationShowDetail;
}

set evaluationShowDetail (value: boolean ) {
  this._evaluationShowDetail = value ;
}

  get editableEvaluations (): Array<EvaluationVo> {
   return this._editableEvaluations;
  }

  set editableEvaluations (value: Array<EvaluationVo>) {
   this._editableEvaluations = value;
  }

  public findAll(){
  this.http.get<Array<EvaluationVo>>('http://localhost:8080/generated/evaluation/').subscribe(
    value => {
      if (value != null) {
           this.evaluationListe = value;
           this.editableEvaluations = value;
                                                 
      }
    }
  );
}

findAllevaluations():Observable<Array<EvaluationVo>>{
  return this.http.get<Array<EvaluationVo>>('http://localhost:8080/generated/evaluation/');
}

  public saveEvaluation() {
  this.http.post<EvaluationVo>('http://localhost:8080/generated/evaluation/', this.evaluation).subscribe(data=>{
    this.createHide();
     this.evaluationListe.push(data);

  });
  }

  public editEvaluation() {
  this.http.put<EvaluationVo>('http://localhost:8080/generated/evaluation/', this.evaluation).subscribe(data=>{
    this.editHide();
  });
   
  }

   public findEvaluation ( pojo : EvaluationVo ){
  this.http.post<Array<EvaluationVo>>('http://localhost:8080/generated/evaluation/search/', pojo).subscribe(
    value =>{
       this.evaluationListe = value;  
    } );
}

public detailShow ( pojo : EvaluationVo ){
    this.evaluationDetail = pojo;
    this.evaluationShowDetail = true;
 
}



delete(pojo: EvaluationVo) {
   this.http.delete<EvaluationVo>('http://localhost:8080/generated/evaluation/id/'+pojo.id).subscribe(
        value => {
        var index = this.evaluationListe.indexOf(pojo);
if (index > -1) {
   this.evaluationListe.splice(index, 1);
}
}
        );


}


       public findBytitle(ref: string) {
      this.http.get<EvaluationVo>('http://localhost:8080/generated/evaluation/title/' + ref).subscribe(
        value => {
        if (value != null) { this.evaluation = value; }
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
        private _evaluationShowDetail : boolean;
              public detailHide (){

       this.evaluationShowDetail = false;
       this.evaluationDetail = null;
                                  }
 private _evaluationShowEdit : boolean;

 private _evaluationShowCreate : boolean;

get evaluationShowEdit (): boolean  {
  return this._evaluationShowEdit;
}

set evaluationShowEdit (value: boolean ) {
  this._evaluationShowEdit = value ;
}
get evaluationShowCreate (): boolean  {
  return this._evaluationShowCreate;
}

set evaluationShowCreate (value: boolean ) {
  this._evaluationShowCreate = value ;
}
             public editShow(pojo : EvaluationVo ){

       this.evaluationShowEdit = true;
       this.evaluation = pojo;
                                  }

              public editHide (){

       this.evaluationShowEdit = false;
       this.evaluation = new EvaluationVo();
                                  }

               public createShow(){

       this.evaluationShowCreate = true;
       this.evaluation = new EvaluationVo();
                                  }

              public createHide (){

       this.evaluationShowCreate = false;
       this.evaluation = new EvaluationVo();
                                  }
}