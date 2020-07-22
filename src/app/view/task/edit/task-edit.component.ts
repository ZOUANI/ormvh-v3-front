import {Component, OnInit} from '@angular/core';
import {TaskService} from '../../../controller/service/Task.service';
import {TaskVo} from '../../../controller/model/task.model';
import {UserVo} from '../../../controller/model/User.model';
import {StatusVo} from '../../../controller/model/Status.model';
import {CourrierVo} from '../../../controller/model/Courrier.model';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  constructor(private taskService: TaskService) { }

   ngOnInit(): void {
       this.findAllupdatedBys();
       this.findAllcourriers();
       this.findAllassignes();
       this.findAllcreatedBys();
       this.findAllstatuss();
    }

   get task(): TaskVo {
    return this.taskService.task;
  }

   get editableTasks(): Array<TaskVo> {
    return this.taskService.editableTasks;
   }

   set editableTasks(value: Array<TaskVo>) {
    this.taskService.editableTasks = value;
   }

  get updatedBys(): Array<UserVo> {
   return this.taskService.updatedBys;
  }
  get courriers(): Array<CourrierVo> {
   return this.taskService.courriers;
  }
  get assignes(): Array<UserVo> {
   return this.taskService.assignes;
  }
  get createdBys(): Array<UserVo> {
   return this.taskService.createdBys;
  }
  get statuss(): Array<StatusVo> {
   return this.taskService.statuss;
  }

   editTask() {
    this.taskService.editTask();
  }
    findAllupdatedBys() {
     this.taskService.findAllupdatedBys();
    }
    findAllcourriers() {
     this.taskService.findAllcourriers();
    }
    findAllassignes() {
     this.taskService.findAllassignes();
    }
    findAllcreatedBys() {
     this.taskService.findAllcreatedBys();
    }
    findAllstatuss() {
     this.taskService.findAllstatuss();
    }

     findBytitle(ref: string) {
      this.taskService.findBytitle(ref);
     }


}