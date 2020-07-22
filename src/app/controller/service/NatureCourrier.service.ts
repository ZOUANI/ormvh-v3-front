import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NatureCourrierVo} from '../model/natureCourrier.model';
import {UserVo} from '../model/User.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NatureCourrierService {
 

  constructor(private http: HttpClient) { }
  private _natureCourrierDetail : NatureCourrierVo =  new NatureCourrierVo() ;
  private _natureCourrierListe  : Array<NatureCourrierVo> = new Array<NatureCourrierVo>();
  
  private _natureCourrierSearch : NatureCourrierVo = new NatureCourrierVo();
  private _natureCourrier: NatureCourrierVo =  new NatureCourrierVo();
  private _searchedNatureCourriers: Array<NatureCourrierVo> = new Array<NatureCourrierVo>();
  private _editableNatureCourriers: Array<NatureCourrierVo> = new Array<NatureCourrierVo>();
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

  get natureCourrier(): NatureCourrierVo {
    if (this._natureCourrier == null) {
      this._natureCourrier = new NatureCourrierVo();
    }
    return this._natureCourrier;
  }

  set natureCourrier(value: NatureCourrierVo) {
    this._natureCourrier = value;
  }

  get natureCourrierListe (): Array<NatureCourrierVo> {
  return this._natureCourrierListe;
}

set natureCourrierListe (value: Array<NatureCourrierVo>) {
  this._natureCourrierListe = value ;
}

get natureCourrierDetail (): NatureCourrierVo {
  return this._natureCourrierDetail;
}

set natureCourrierDetail (value: NatureCourrierVo) {
  this._natureCourrierDetail = value ;
}

get natureCourrierSearch (): NatureCourrierVo {
  return this._natureCourrierSearch;
}

set natureCourrierSearch (value: NatureCourrierVo) {
  this._natureCourrierSearch = value ;
}

get natureCourrierShowDetail (): boolean  {
  return this._natureCourrierShowDetail;
}

set natureCourrierShowDetail (value: boolean ) {
  this._natureCourrierShowDetail = value ;
}

  get editableNatureCourriers (): Array<NatureCourrierVo> {
   return this._editableNatureCourriers;
  }

  set editableNatureCourriers (value: Array<NatureCourrierVo>) {
   this._editableNatureCourriers = value;
  }

  public findAll(){
  this.http.get<Array<NatureCourrierVo>>('http://localhost:8080/generated/natureCourrier/').subscribe(
    value => {
      if (value != null) {
           this.natureCourrierListe = value;
           this.editableNatureCourriers = value;
                                                 
      }
    }
  );
}
findAllnatureCourriers():Observable<Array<NatureCourrierVo>>{
  return this.http.get<Array<NatureCourrierVo>>('http://localhost:8080/generated/natureCourrier/');
}

  public saveNatureCourrier() {
  this.http.post<NatureCourrierVo>('http://localhost:8080/generated/natureCourrier/', this.natureCourrier).subscribe(data=>{
     this.natureCourrierListe.push(data);

  });
  }

  public editNatureCourrier() {
  this.http.put<NatureCourrierVo>('http://localhost:8080/generated/natureCourrier/', this.natureCourrier).subscribe(data=>{
  });
   
  }

   public findNatureCourrier ( pojo : NatureCourrierVo ){
  this.http.post<Array<NatureCourrierVo>>('http://localhost:8080/generated/natureCourrier/search/', pojo).subscribe(
    value =>{
       this.natureCourrierListe = value;  
    } );
}

public detailShow ( pojo : NatureCourrierVo ){
    this.natureCourrierDetail = pojo;
    this.natureCourrierShowDetail = true;
 
}



delete(pojo: NatureCourrierVo) {
   this.http.delete<NatureCourrierVo>('http://localhost:8080/generated/natureCourrier/id/'+pojo.id).subscribe(
        value => {
        var index = this.natureCourrierListe.indexOf(pojo);
if (index > -1) {
   this.natureCourrierListe.splice(index, 1);
}
}
        );


}


       public findBylibelle(ref: string) {
      this.http.get<NatureCourrierVo>('http://localhost:8080/generated/natureCourrier/libelle/' + ref).subscribe(
        value => {
        if (value != null) { this.natureCourrier = value; }
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
        private _natureCourrierShowDetail : boolean;
              public detailHide (){

       this.natureCourrierShowDetail = false;
       this.natureCourrierDetail = null;
                                  }
}