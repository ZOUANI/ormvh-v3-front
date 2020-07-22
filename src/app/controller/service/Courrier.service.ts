import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  CourrierVo
} from '../model/courrier.model';

import {
  TaskVo
} from '../model/Task.model';

import {
  CourrierServiceItemVo
} from '../model/CourrierServiceItem.model';

@Injectable({
  providedIn: 'root'
})
export class CourrierService {
  

  constructor(private http: HttpClient) {}
  private _courrierDetail: CourrierVo = new CourrierVo();
  private _courrierListe: Array < CourrierVo > = new Array < CourrierVo > ();

  private _courrierSearch: CourrierVo = new CourrierVo();
  private _courrier: CourrierVo = new CourrierVo();
  private _searchedCourriers: Array < CourrierVo > = new Array < CourrierVo > ();
  private _editableCourriers: Array < CourrierVo > = new Array < CourrierVo > ();
 
 
  private _task: TaskVo;

  get task(): TaskVo {
    if (this._task == null) {
      this._task = new TaskVo();
    }
    return this._task;
  }

  set task(value: TaskVo) {
    this._task = value;
  }
  private _courrierServiceItem: CourrierServiceItemVo;

  get courrierServiceItem(): CourrierServiceItemVo {
    if (this._courrierServiceItem == null) {
      this._courrierServiceItem = new CourrierServiceItemVo();
    }
    return this._courrierServiceItem;
  }

  set courrierServiceItem(value: CourrierServiceItemVo) {
    this._courrierServiceItem = value;
  }
  
  get courrier(): CourrierVo {
    if (this._courrier == null) {
      this._courrier = new CourrierVo();
    }
    return this._courrier;
  }

  set courrier(value: CourrierVo) {
    this._courrier = value;
  }

  get courrierListe(): Array < CourrierVo > {
    return this._courrierListe;
  }

  set courrierListe(value: Array < CourrierVo > ) {
    this._courrierListe = value;
  }

  get courrierDetail(): CourrierVo {
    return this._courrierDetail;
  }

  set courrierDetail(value: CourrierVo) {
    this._courrierDetail = value;
  }

  get courrierSearch(): CourrierVo {
    return this._courrierSearch;
  }

  set courrierSearch(value: CourrierVo) {
    this._courrierSearch = value;
  }

  get courrierShowDetail(): boolean {
    return this._courrierShowDetail;
  }

  set courrierShowDetail(value: boolean) {
    this._courrierShowDetail = value;
  }

  get editableCourriers(): Array < CourrierVo > {
    return this._editableCourriers;
  }

  set editableCourriers(value: Array < CourrierVo > ) {
    this._editableCourriers = value;
  }

  public findAll() {
    this.http.get < Array < CourrierVo >> ('http://localhost:8080/generated/courrier/').subscribe(
      value => {
        if (value != null) {
          this.courrierListe = value;
        }
      }
    );
  }

  public saveCourrier() {
    this.http.post < CourrierVo > ('http://localhost:8080/generated/courrier/', this.courrier).subscribe(data => {
    if(data!=null)
    this.courrierListe.push(data);
     this.courrier = null; 
  });
   
  }

  public editCourrier() {
    this.http.put < CourrierVo > ('http://localhost:8080/generated/courrier/', this.courrier).subscribe(data => {});
    this.courrier.tasksVo.length = 0;
    this.courrier.courrierServiceItemsVo.length = 0;

  }

  public addTask() {
    this.courrier.tasksVo.push(this.cloneTask(this.task));
    this.task =null;
  }

  public cloneTask(task: TaskVo) {
    const myTaskClone = new TaskVo();
    
    myTaskClone.delai = task.delai;
    myTaskClone.relance = task.relance;
    myTaskClone.accuse = task.accuse;
    myTaskClone.reponse = task.reponse;
    myTaskClone.id = task.id;
    myTaskClone.title = task.title;
    myTaskClone.description = task.description;
    myTaskClone.observation = task.observation;
    
    myTaskClone.courrierVo = task.courrierVo;
    myTaskClone.assigneVo = task.assigneVo;
    myTaskClone.statusVo = task.statusVo;
    
    return myTaskClone;
  }

  public removeTask(i: number) {
    this.courrier.tasksVo.splice(i, 1);
  }
  public addCourrierServiceItem() {
    this.courrier.courrierServiceItemsVo.push(this.cloneCourrierServiceItem(this.courrierServiceItem));
    this.courrierServiceItem = null;
  }

  public cloneCourrierServiceItem(courrierServiceItem: CourrierServiceItemVo) {
    const myCourrierServiceItemClone = new CourrierServiceItemVo();
    myCourrierServiceItemClone.id = courrierServiceItem.id;
    myCourrierServiceItemClone.serviceVo = courrierServiceItem.serviceVo;
    return myCourrierServiceItemClone;
  }

  public removeCourrierServiceItem(i: number) {
    this.courrier.courrierServiceItemsVo.splice(i, 1);
  }
  public findCourrier(pojo: CourrierVo) {
    this.http.post < Array < CourrierVo >> ('http://localhost:8080/generated/courrier/search/', pojo).subscribe(
      value => {
        this.courrierListe = value;
      });
  }

  public detailShow(pojo: CourrierVo) {
    this.courrierDetail = pojo;
    this.courrierShowDetail = true;

  }



  delete(pojo: CourrierVo) {
    this.http.delete < CourrierVo > ('http://localhost:8080/generated/courrier/id/' + pojo.id).subscribe(
      value => {
        var index = this.courrierListe.indexOf(pojo);
        if (index > -1) {
          this.courrierListe.splice(index, 1);
        }
      }
    );


  }


  public findByidCourrier(ref: string) {
    this.http.get < CourrierVo > ('http://localhost:8080/generated/courrier/idCourrier/' + ref).subscribe(
      value => {
        if (value != null) {
          this.courrier = value;
        }
      }
    );
  }



  private _courrierShowDetail: boolean;
  public detailHide() {

    this.courrierShowDetail = false;
    this.courrierDetail = null;
  }
}