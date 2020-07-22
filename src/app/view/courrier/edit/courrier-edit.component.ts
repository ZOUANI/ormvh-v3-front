import {Component, OnInit} from '@angular/core';
import {CourrierService} from '../../../controller/service/Courrier.service';
import {CourrierVo} from '../../../controller/model/courrier.model';
import {UserVo} from '../../../controller/model/User.model';
import {ExpeditorTypeVo} from '../../../controller/model/ExpeditorType.model';
import {StatusVo} from '../../../controller/model/Status.model';
import {TaskVo} from '../../../controller/model/Task.model';
import {NatureCourrierVo} from '../../../controller/model/NatureCourrier.model';
import {CourrierServiceItemVo} from '../../../controller/model/CourrierServiceItem.model';
import {EvaluationVo} from '../../../controller/model/Evaluation.model';
import {CourrierObjectVo} from '../../../controller/model/CourrierObject.model';
import {SubdivisionVo} from '../../../controller/model/Subdivision.model';
import {ExpeditorVo} from '../../../controller/model/Expeditor.model';
import {TypeCourrierVo} from '../../../controller/model/TypeCourrier.model';
import {VoieVo} from '../../../controller/model/Voie.model';
import {LeServiceVo} from '../../../controller/model/LeService.model';

@Component({
  selector: 'app-courrier-edit',
  templateUrl: './courrier-edit.component.html',
  styleUrls: ['./courrier-edit.component.css']
})
export class CourrierEditComponent implements OnInit {
  constructor(private courrierService: CourrierService) { }

   ngOnInit(): void {
      
    }

   get courrier(): CourrierVo {
    return this.courrierService.courrier;
  }

   get editableCourriers(): Array<CourrierVo> {
    return this.courrierService.editableCourriers;
   }

   set editableCourriers(value: Array<CourrierVo>) {
    this.courrierService.editableCourriers = value;
   }

 
  get task(): TaskVo {
    return this.courrierService.task;
  }

  addTask() {
   return this.courrierService.addTask();
  }

  removeTask(i: number) {
   this.courrierService.removeTask(i);
  }
  get courrierServiceItem(): CourrierServiceItemVo {
    return this.courrierService.courrierServiceItem;
  }

  addCourrierServiceItem() {
   return this.courrierService.addCourrierServiceItem();
  }

  removeCourrierServiceItem(i: number) {
   this.courrierService.removeCourrierServiceItem(i);
  }
   editCourrier() {
    this.courrierService.editCourrier();
  }
    

     findByidCourrier(ref: string) {
      this.courrierService.findByidCourrier(ref);
     }


}