import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RoleVo} from '../model/role.model';
import {UserVo} from '../model/User.model';
@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }
  private _roleDetail : RoleVo =  new RoleVo() ;
  private _roleListe  : Array<RoleVo> = new Array<RoleVo>();
  
  private _roleSearch : RoleVo = new RoleVo();
  private _role: RoleVo =  new RoleVo();
  private _searchedRoles: Array<RoleVo> = new Array<RoleVo>();
  private _editableRoles: Array<RoleVo> = new Array<RoleVo>();
  private _updatedBys: Array<UserVo> = new Array<UserVo>();
  private _createdBys: Array<UserVo> = new Array<UserVo>();
   get updatedBys(): Array<UserVo> {
    return this._updatedBys;
   }

   set updatedBys(value: Array<UserVo>) {
    this._updatedBys = value;
   }
   get createdBys(): Array<UserVo> {
    return this._createdBys;
   }

   set createdBys(value: Array<UserVo>) {
    this._createdBys = value;
   }

  get role(): RoleVo {
    if (this._role == null) {
      this._role = new RoleVo();
    }
    return this._role;
  }

  set role(value: RoleVo) {
    this._role = value;
  }

  get roleListe (): Array<RoleVo> {
  return this._roleListe;
}

set roleListe (value: Array<RoleVo>) {
  this._roleListe = value ;
}

get roleDetail (): RoleVo {
  return this._roleDetail;
}

set roleDetail (value: RoleVo) {
  this._roleDetail = value ;
}

get roleSearch (): RoleVo {
  return this._roleSearch;
}

set roleSearch (value: RoleVo) {
  this._roleSearch = value ;
}

get roleShowDetail (): boolean  {
  return this._roleShowDetail;
}

set roleShowDetail (value: boolean ) {
  this._roleShowDetail = value ;
}

  get editableRoles (): Array<RoleVo> {
   return this._editableRoles;
  }

  set editableRoles (value: Array<RoleVo>) {
   this._editableRoles = value;
  }

  public findAll(){
  this.http.get<Array<RoleVo>>('http://localhost:8080/generated/role/').subscribe(
    value => {
      if (value != null) {
           this.roleListe = value;
           this.editableRoles = value;
                                                 
      }
    }
  );
}

  public saveRole() {
  this.http.post<RoleVo>('http://localhost:8080/generated/role/', this.role).subscribe(data=>{
    this.createHide();
     this.roleListe.push(data);

  });
  }

  public editRole() {
  this.http.put<RoleVo>('http://localhost:8080/generated/role/', this.role).subscribe(data=>{
    this.editHide();
  });
   
  }

   public findRole ( pojo : RoleVo ){
  this.http.post<Array<RoleVo>>('http://localhost:8080/generated/role/search/', pojo).subscribe(
    value =>{
       this.roleListe = value;  
    } );
}

public detailShow ( pojo : RoleVo ){
    this.roleDetail = pojo;
    this.roleShowDetail = true;
 
}



delete(pojo: RoleVo) {
   this.http.delete<RoleVo>('http://localhost:8080/generated/role/id/'+pojo.id).subscribe(
        value => {
        var index = this.roleListe.indexOf(pojo);
if (index > -1) {
   this.roleListe.splice(index, 1);
}
}
        );


}


       public findByauthority(ref: string) {
      this.http.get<RoleVo>('http://localhost:8080/generated/role/authority/' + ref).subscribe(
        value => {
        if (value != null) { this.role = value; }
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
            public findAllcreatedBys() {
             this.http.get<Array<UserVo>>('http://localhost:8080/generated/user/').subscribe(
            value => {
            if (value != null) { this.createdBys = value; }
            }
            );
            }


          /***********************************************************************************************/
        private _roleShowDetail : boolean;
              public detailHide (){

       this.roleShowDetail = false;
       this.roleDetail = null;
                                  }
 private _roleShowEdit : boolean;

 private _roleShowCreate : boolean;

get roleShowEdit (): boolean  {
  return this._roleShowEdit;
}

set roleShowEdit (value: boolean ) {
  this._roleShowEdit = value ;
}
get roleShowCreate (): boolean  {
  return this._roleShowCreate;
}

set roleShowCreate (value: boolean ) {
  this._roleShowCreate = value ;
}
             public editShow(pojo : RoleVo ){

       this.roleShowEdit = true;
       this.role = pojo;
                                  }

              public editHide (){

       this.roleShowEdit = false;
       this.role = new RoleVo();
                                  }

               public createShow(){

       this.roleShowCreate = true;
       this.role = new RoleVo();
                                  }

              public createHide (){

       this.roleShowCreate = false;
       this.role = new RoleVo();
                                  }
}