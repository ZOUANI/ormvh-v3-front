import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {VoieVo} from '../model/voie.model';
import {UserVo} from '../model/User.model';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class VoieService {
 

  constructor(private http: HttpClient) { }
  private _voieDetail : VoieVo =  new VoieVo() ;
  private _voieListe  : Array<VoieVo> = new Array<VoieVo>();
  
  private _voieSearch : VoieVo = new VoieVo();
  private _voie: VoieVo =  new VoieVo();
  private _searchedVoies: Array<VoieVo> = new Array<VoieVo>();
  private _editableVoies: Array<VoieVo> = new Array<VoieVo>();
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

  get voie(): VoieVo {
    if (this._voie == null) {
      this._voie = new VoieVo();
    }
    return this._voie;
  }

  set voie(value: VoieVo) {
    this._voie = value;
  }

  get voieListe (): Array<VoieVo> {
  return this._voieListe;
}

set voieListe (value: Array<VoieVo>) {
  this._voieListe = value ;
}

get voieDetail (): VoieVo {
  return this._voieDetail;
}

set voieDetail (value: VoieVo) {
  this._voieDetail = value ;
}

get voieSearch (): VoieVo {
  return this._voieSearch;
}

set voieSearch (value: VoieVo) {
  this._voieSearch = value ;
}

get voieShowDetail (): boolean  {
  return this._voieShowDetail;
}

set voieShowDetail (value: boolean ) {
  this._voieShowDetail = value ;
}

  get editableVoies (): Array<VoieVo> {
   return this._editableVoies;
  }

  set editableVoies (value: Array<VoieVo>) {
   this._editableVoies = value;
  }

  public findAll(){
  this.http.get<Array<VoieVo>>('http://localhost:8080/generated/voie/').subscribe(
    value => {
      if (value != null) {
           this.voieListe = value;
           this.editableVoies = value;
                                                 
      }
    }
  );
}
findAllvoies():Observable<Array<VoieVo>> {
  return this.http.get<Array<VoieVo>>('http://localhost:8080/generated/voie/');
}
  public saveVoie() {
  this.http.post<VoieVo>('http://localhost:8080/generated/voie/', this.voie).subscribe(data=>{
    this.createHide();
     this.voieListe.push(data);

  });
  }

  public editVoie() {
  this.http.put<VoieVo>('http://localhost:8080/generated/voie/', this.voie).subscribe(data=>{
    this.editHide();
  });
   
  }

   public findVoie ( pojo : VoieVo ){
  this.http.post<Array<VoieVo>>('http://localhost:8080/generated/voie/search/', pojo).subscribe(
    value =>{
       this.voieListe = value;  
    } );
}

public detailShow ( pojo : VoieVo ){
    this.voieDetail = pojo;
    this.voieShowDetail = true;
 
}



delete(pojo: VoieVo) {
   this.http.delete<VoieVo>('http://localhost:8080/generated/voie/id/'+pojo.id).subscribe(
        value => {
        var index = this.voieListe.indexOf(pojo);
if (index > -1) {
   this.voieListe.splice(index, 1);
}
}
        );


}


       public findBylibelle(ref: string) {
      this.http.get<VoieVo>('http://localhost:8080/generated/voie/libelle/' + ref).subscribe(
        value => {
        if (value != null) { this.voie = value; }
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
        private _voieShowDetail : boolean;
              public detailHide (){

       this.voieShowDetail = false;
       this.voieDetail = null;
                                  }
 private _voieShowEdit : boolean;

 private _voieShowCreate : boolean;

get voieShowEdit (): boolean  {
  return this._voieShowEdit;
}

set voieShowEdit (value: boolean ) {
  this._voieShowEdit = value ;
}
get voieShowCreate (): boolean  {
  return this._voieShowCreate;
}

set voieShowCreate (value: boolean ) {
  this._voieShowCreate = value ;
}
             public editShow(pojo : VoieVo ){

       this.voieShowEdit = true;
       this.voie = pojo;
                                  }

              public editHide (){

       this.voieShowEdit = false;
       this.voie = new VoieVo();
                                  }

               public createShow(){

       this.voieShowCreate = true;
       this.voie = new VoieVo();
                                  }

              public createHide (){

       this.voieShowCreate = false;
       this.voie = new VoieVo();
                                  }
}