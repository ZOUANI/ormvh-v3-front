import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SubdivisionVo} from '../model/subdivision.model';
import {UserVo} from '../model/User.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SubdivisionService {
 

  constructor(private http: HttpClient) { }
  private _subdivisionDetail : SubdivisionVo =  new SubdivisionVo() ;
  private _subdivisionListe  : Array<SubdivisionVo> = new Array<SubdivisionVo>();
  
  private _subdivisionSearch : SubdivisionVo = new SubdivisionVo();
  private _subdivision: SubdivisionVo =  new SubdivisionVo();
  private _searchedSubdivisions: Array<SubdivisionVo> = new Array<SubdivisionVo>();
  private _editableSubdivisions: Array<SubdivisionVo> = new Array<SubdivisionVo>();
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

  get subdivision(): SubdivisionVo {
    if (this._subdivision == null) {
      this._subdivision = new SubdivisionVo();
    }
    return this._subdivision;
  }

  set subdivision(value: SubdivisionVo) {
    this._subdivision = value;
  }

  get subdivisionListe (): Array<SubdivisionVo> {
  return this._subdivisionListe;
}

set subdivisionListe (value: Array<SubdivisionVo>) {
  this._subdivisionListe = value ;
}

get subdivisionDetail (): SubdivisionVo {
  return this._subdivisionDetail;
}

set subdivisionDetail (value: SubdivisionVo) {
  this._subdivisionDetail = value ;
}

get subdivisionSearch (): SubdivisionVo {
  return this._subdivisionSearch;
}

set subdivisionSearch (value: SubdivisionVo) {
  this._subdivisionSearch = value ;
}

get subdivisionShowDetail (): boolean  {
  return this._subdivisionShowDetail;
}

set subdivisionShowDetail (value: boolean ) {
  this._subdivisionShowDetail = value ;
}

  get editableSubdivisions (): Array<SubdivisionVo> {
   return this._editableSubdivisions;
  }

  set editableSubdivisions (value: Array<SubdivisionVo>) {
   this._editableSubdivisions = value;
  }

  public findAll(){
  this.http.get<Array<SubdivisionVo>>('http://localhost:8080/generated/subdivision/').subscribe(
    value => {
      if (value != null) {
           this.subdivisionListe = value;
           this.editableSubdivisions = value;
                                                 
      }
    }
  );
}
findAllsubdivisions():Observable<Array<SubdivisionVo>>{
 return this.http.get<Array<SubdivisionVo>>('http://localhost:8080/generated/subdivision/');
}
  public saveSubdivision() {
  this.http.post<SubdivisionVo>('http://localhost:8080/generated/subdivision/', this.subdivision).subscribe(data=>{
    this.createHide();
     this.subdivisionListe.push(data);

  });
  }

  public editSubdivision() {
  this.http.put<SubdivisionVo>('http://localhost:8080/generated/subdivision/', this.subdivision).subscribe(data=>{
    this.editHide();
  });
   
  }

   public findSubdivision ( pojo : SubdivisionVo ){
  this.http.post<Array<SubdivisionVo>>('http://localhost:8080/generated/subdivision/search/', pojo).subscribe(
    value =>{
       this.subdivisionListe = value;  
    } );
}

public detailShow ( pojo : SubdivisionVo ){
    this.subdivisionDetail = pojo;
    this.subdivisionShowDetail = true;
 
}



delete(pojo: SubdivisionVo) {
   this.http.delete<SubdivisionVo>('http://localhost:8080/generated/subdivision/id/'+pojo.id).subscribe(
        value => {
        var index = this.subdivisionListe.indexOf(pojo);
if (index > -1) {
   this.subdivisionListe.splice(index, 1);
}
}
        );


}


       public findBytitle(ref: string) {
      this.http.get<SubdivisionVo>('http://localhost:8080/generated/subdivision/title/' + ref).subscribe(
        value => {
        if (value != null) { this.subdivision = value; }
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
        private _subdivisionShowDetail : boolean;
              public detailHide (){

       this.subdivisionShowDetail = false;
       this.subdivisionDetail = null;
                                  }
 private _subdivisionShowEdit : boolean;

 private _subdivisionShowCreate : boolean;

get subdivisionShowEdit (): boolean  {
  return this._subdivisionShowEdit;
}

set subdivisionShowEdit (value: boolean ) {
  this._subdivisionShowEdit = value ;
}
get subdivisionShowCreate (): boolean  {
  return this._subdivisionShowCreate;
}

set subdivisionShowCreate (value: boolean ) {
  this._subdivisionShowCreate = value ;
}
             public editShow(pojo : SubdivisionVo ){

       this.subdivisionShowEdit = true;
       this.subdivision = pojo;
                                  }

              public editHide (){

       this.subdivisionShowEdit = false;
       this.subdivision = new SubdivisionVo();
                                  }

               public createShow(){

       this.subdivisionShowCreate = true;
       this.subdivision = new SubdivisionVo();
                                  }

              public createHide (){

       this.subdivisionShowCreate = false;
       this.subdivision = new SubdivisionVo();
                                  }
}