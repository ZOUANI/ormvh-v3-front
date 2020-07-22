import {Component, OnInit} from '@angular/core';
import {EvaluationService} from '../../../controller/service/Evaluation.service';
import {EvaluationVo} from '../../../controller/model/evaluation.model';
import {UserVo} from '../../../controller/model/User.model';

@Component({
  selector: 'app-evaluation-edit',
  templateUrl: './evaluation-edit.component.html',
  styleUrls: ['./evaluation-edit.component.css']
})
export class EvaluationEditComponent implements OnInit {
  constructor(private evaluationService: EvaluationService) { }

   ngOnInit(): void {
       this.findAllcreatedBys();
       this.findAllupdatedBys();
    }

   get evaluation(): EvaluationVo {
    return this.evaluationService.evaluation;
  }

   get editableEvaluations(): Array<EvaluationVo> {
    return this.evaluationService.editableEvaluations;
   }

   set editableEvaluations(value: Array<EvaluationVo>) {
    this.evaluationService.editableEvaluations = value;
   }

  get createdBys(): Array<UserVo> {
   return this.evaluationService.createdBys;
  }
  get updatedBys(): Array<UserVo> {
   return this.evaluationService.updatedBys;
  }

   editEvaluation() {
    this.evaluationService.editEvaluation();
  }
    findAllcreatedBys() {
     this.evaluationService.findAllcreatedBys();
    }
    findAllupdatedBys() {
     this.evaluationService.findAllupdatedBys();
    }

     findBytitle(ref: string) {
      this.evaluationService.findBytitle(ref);
     }

    editHide() {
      this.evaluationService.editHide();
    }
    

}