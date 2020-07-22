import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TaskVo} from '../model/task.model';
import {UserVo} from '../model/User.model';
import {StatusVo} from '../model/Status.model';
import {CourrierVo} from '../model/Courrier.model';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }
  private _taskDetail : TaskVo =  new TaskVo() ;
  private _taskListe  : Array<TaskVo> = new Array<TaskVo>();
  
  private _taskSearch : TaskVo = new TaskVo();
  private _task: TaskVo =  new TaskVo();
  private _searchedTasks: Array<TaskVo> = new Array<TaskVo>();
  private _editableTasks: Array<TaskVo> = new Array<TaskVo>();
  private _updatedBys: Array<UserVo> = new Array<UserVo>();
  private _courriers: Array<CourrierVo> = new Array<CourrierVo>();
  private _assignes: Array<UserVo> = new Array<UserVo>();
  private _createdBys: Array<UserVo> = new Array<UserVo>();
  private _statuss: Array<StatusVo> = new Array<StatusVo>();
   get updatedBys(): Array<UserVo> {
    return this._updatedBys;
   }

   set updatedBys(value: Array<UserVo>) {
    this._updatedBys = value;
   }
   get courriers(): Array<CourrierVo> {
    return this._courriers;
   }

   set courriers(value: Array<CourrierVo>) {
    this._courriers = value;
   }
   get assignes(): Array<UserVo> {
    return this._assignes;
   }

   set assignes(value: Array<UserVo>) {
    this._assignes = value;
   }
   get createdBys(): Array<UserVo> {
    return this._createdBys;
   }

   set createdBys(value: Array<UserVo>) {
    this._createdBys = value;
   }
   get statuss(): Array<StatusVo> {
    return this._statuss;
   }

   set statuss(value: Array<StatusVo>) {
    this._statuss = value;
   }

  get task(): TaskVo {
    if (this._task == null) {
      this._task = new TaskVo();
    }
    return this._task;
  }

  set task(value: TaskVo) {
    this._task = value;
  }

  get taskListe (): Array<TaskVo> {
  return this._taskListe;
}

set taskListe (value: Array<TaskVo>) {
  this._taskListe = value ;
}

get taskDetail (): TaskVo {
  return this._taskDetail;
}

set taskDetail (value: TaskVo) {
  this._taskDetail = value ;
}

get taskSearch (): TaskVo {
  return this._taskSearch;
}

set taskSearch (value: TaskVo) {
  this._taskSearch = value ;
}

get taskShowDetail (): boolean  {
  return this._taskShowDetail;
}

set taskShowDetail (value: boolean ) {
  this._taskShowDetail = value ;
}

  get editableTasks (): Array<TaskVo> {
   return this._editableTasks;
  }

  set editableTasks (value: Array<TaskVo>) {
   this._editableTasks = value;
  }

  public findAll(){
  this.http.get<Array<TaskVo>>('http://localhost:8080/generated/task/').subscribe(
    value => {
      if (value != null) {
           this.taskListe = value;
           this.editableTasks = value;
                                                 
      }
    }
  );
}

  public saveTask() {
  this.http.post<TaskVo>('http://localhost:8080/generated/task/', this.task).subscribe(data=>{
     this.taskListe.push(data);

  });
  }

  public editTask() {
  this.http.put<TaskVo>('http://localhost:8080/generated/task/', this.task).subscribe(data=>{
  });
   
  }

   public findTask ( pojo : TaskVo ){
  this.http.post<Array<TaskVo>>('http://localhost:8080/generated/task/search/', pojo).subscribe(
    value =>{
       this.taskListe = value;  
    } );
}

public detailShow ( pojo : TaskVo ){
    this.taskDetail = pojo;
    this.taskShowDetail = true;
 
}



delete(pojo: TaskVo) {
   this.http.delete<TaskVo>('http://localhost:8080/generated/task/id/'+pojo.id).subscribe(
        value => {
        var index = this.taskListe.indexOf(pojo);
if (index > -1) {
   this.taskListe.splice(index, 1);
}
}
        );


}


       public findBytitle(ref: string) {
      this.http.get<TaskVo>('http://localhost:8080/generated/task/title/' + ref).subscribe(
        value => {
        if (value != null) { this.task = value; }
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
            public findAllcourriers() {
             this.http.get<Array<CourrierVo>>('http://localhost:8080/generated/courrier/').subscribe(
            value => {
            if (value != null) { this.courriers = value; }
            }
            );
            }
            public findAllassignes() {
             this.http.get<Array<UserVo>>('http://localhost:8080/generated/user/').subscribe(
            value => {
            if (value != null) { this.assignes = value; }
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
            public findAllstatuss() {
             this.http.get<Array<StatusVo>>('http://localhost:8080/generated/status/').subscribe(
            value => {
            if (value != null) { this.statuss = value; }
            }
            );
            }


          /***********************************************************************************************/
        private _taskShowDetail : boolean;
              public detailHide (){

       this.taskShowDetail = false;
       this.taskDetail = null;
                                  }
}