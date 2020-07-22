import {Component, OnInit} from '@angular/core';
import {EvaluationService} from '../../../controller/service/Evaluation.service';
import {EvaluationVo} from '../../../controller/model/evaluation.model';
import {UserVo} from '../../../controller/model/User.model';

@Component({
  selector: 'app-evaluation-create',
  templateUrl: './evaluation-create.component.html',
  styleUrls: ['./evaluation-create.component.css']
})
export class EvaluationCreateComponent implements OnInit {
  constructor(private evaluationService: EvaluationService) { }

   ngOnInit(): void {
      this.findAllcreatedBys();
      this.findAllupdatedBys();
    }

   get evaluation(): EvaluationVo {
    return this.evaluationService.evaluation;
  }

  get createdBys(): Array<UserVo> {
   return this.evaluationService.createdBys;
  }
  get updatedBys(): Array<UserVo> {
   return this.evaluationService.updatedBys;
  }

   saveEvaluation() {
    this.evaluationService.saveEvaluation();
  }

   findAllcreatedBys() {
     this.evaluationService.findAllcreatedBys();
   }
   findAllupdatedBys() {
     this.evaluationService.findAllupdatedBys();
   }

get evaluationShowCreate (): boolean  {
  return this.evaluationService.evaluationShowCreate;
}

set evaluationShowCreate (value: boolean ) {
  this.evaluationService.evaluationShowCreate = value ;
}
public createHide(){
       this.evaluationService.createHide();
}
}