import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ExpeditorTypeVo} from '../model/expeditorType.model';
import {UserVo} from '../model/User.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ExpeditorTypeService {
 

  constructor(private http: HttpClient) { }
  private _expeditorTypeDetail : ExpeditorTypeVo =  new ExpeditorTypeVo() ;
  private _expeditorTypeListe  : Array<ExpeditorTypeVo> = new Array<ExpeditorTypeVo>();
  
  private _expeditorTypeSearch : ExpeditorTypeVo = new ExpeditorTypeVo();
  private _expeditorType: ExpeditorTypeVo =  new ExpeditorTypeVo();
  private _searchedExpeditorTypes: Array<ExpeditorTypeVo> = new Array<ExpeditorTypeVo>();
  private _editableExpeditorTypes: Array<ExpeditorTypeVo> = new Array<ExpeditorTypeVo>();
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

  get expeditorType(): ExpeditorTypeVo {
    if (this._expeditorType == null) {
      this._expeditorType = new ExpeditorTypeVo();
    }
    return this._expeditorType;
  }

  set expeditorType(value: ExpeditorTypeVo) {
    this._expeditorType = value;
  }

  get expeditorTypeListe (): Array<ExpeditorTypeVo> {
  return this._expeditorTypeListe;
}

set expeditorTypeListe (value: Array<ExpeditorTypeVo>) {
  this._expeditorTypeListe = value ;
}

get expeditorTypeDetail (): ExpeditorTypeVo {
  return this._expeditorTypeDetail;
}

set expeditorTypeDetail (value: ExpeditorTypeVo) {
  this._expeditorTypeDetail = value ;
}

get expeditorTypeSearch (): ExpeditorTypeVo {
  return this._expeditorTypeSearch;
}

set expeditorTypeSearch (value: ExpeditorTypeVo) {
  this._expeditorTypeSearch = value ;
}

get expeditorTypeShowDetail (): boolean  {
  return this._expeditorTypeShowDetail;
}

set expeditorTypeShowDetail (value: boolean ) {
  this._expeditorTypeShowDetail = value ;
}

  get editableExpeditorTypes (): Array<ExpeditorTypeVo> {
   return this._editableExpeditorTypes;
  }

  set editableExpeditorTypes (value: Array<ExpeditorTypeVo>) {
   this._editableExpeditorTypes = value;
  }

  public findAll(){
  this.http.get<Array<ExpeditorTypeVo>>('http://localhost:8080/generated/expeditorType/').subscribe(
    value => {
      if (value != null) {
           this.expeditorTypeListe = value;
           this.editableExpeditorTypes = value;
                                                 
      }
    }
  );
}

findAllexpeditorTypes():Observable<Array<ExpeditorTypeVo>>{
  return this.http.get<Array<ExpeditorTypeVo>>('http://localhost:8080/generated/expeditorType/');
}

  public saveExpeditorType() {
  this.http.post<ExpeditorTypeVo>('http://localhost:8080/generated/expeditorType/', this.expeditorType).subscribe(data=>{
    this.createHide();
     this.expeditorTypeListe.push(data);

  });
  }

  public editExpeditorType() {
  this.http.put<ExpeditorTypeVo>('http://localhost:8080/generated/expeditorType/', this.expeditorType).subscribe(data=>{
    this.editHide();
  });
   
  }

   public findExpeditorType ( pojo : ExpeditorTypeVo ){
  this.http.post<Array<ExpeditorTypeVo>>('http://localhost:8080/generated/expeditorType/search/', pojo).subscribe(
    value =>{
       this.expeditorTypeListe = value;  
    } );
}

public detailShow ( pojo : ExpeditorTypeVo ){
    this.expeditorTypeDetail = pojo;
    this.expeditorTypeShowDetail = true;
 
}



delete(pojo: ExpeditorTypeVo) {
   this.http.delete<ExpeditorTypeVo>('http://localhost:8080/generated/expeditorType/id/'+pojo.id).subscribe(
        value => {
        var index = this.expeditorTypeListe.indexOf(pojo);
if (index > -1) {
   this.expeditorTypeListe.splice(index, 1);
}
}
        );


}


       public findBytitle(ref: string) {
      this.http.get<ExpeditorTypeVo>('http://localhost:8080/generated/expeditorType/title/' + ref).subscribe(
        value => {
        if (value != null) { this.expeditorType = value; }
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
        private _expeditorTypeShowDetail : boolean;
              public detailHide (){

       this.expeditorTypeShowDetail = false;
       this.expeditorTypeDetail = null;
                                  }
 private _expeditorTypeShowEdit : boolean;

 private _expeditorTypeShowCreate : boolean;

get expeditorTypeShowEdit (): boolean  {
  return this._expeditorTypeShowEdit;
}

set expeditorTypeShowEdit (value: boolean ) {
  this._expeditorTypeShowEdit = value ;
}
get expeditorTypeShowCreate (): boolean  {
  return this._expeditorTypeShowCreate;
}

set expeditorTypeShowCreate (value: boolean ) {
  this._expeditorTypeShowCreate = value ;
}
             public editShow(pojo : ExpeditorTypeVo ){

       this.expeditorTypeShowEdit = true;
       this.expeditorType = pojo;
                                  }

              public editHide (){

       this.expeditorTypeShowEdit = false;
       this.expeditorType = new ExpeditorTypeVo();
                                  }

               public createShow(){

       this.expeditorTypeShowCreate = true;
       this.expeditorType = new ExpeditorTypeVo();
                                  }

              public createHide (){

       this.expeditorTypeShowCreate = false;
       this.expeditorType = new ExpeditorTypeVo();
                                  }
}