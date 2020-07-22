import { Component, OnInit } from '@angular/core';
import {EvaluationVo} from '../../../controller/model/evaluation.model';
import {EvaluationService} from '../../../controller/service/Evaluation.service';

@Component({
  selector: 'app-evaluation-details',
  templateUrl: './evaluation-details.component.html',
  styleUrls: ['./evaluation-details.component.css']
})

export class EvaluationDetailsComponent implements OnInit {

  constructor(private _evaluationService : EvaluationService) {}


   get evaluationService (): EvaluationService {
    return this._evaluationService;
  }

  set evaluationService (value: EvaluationService) {
    this._evaluationService = value ;
  }

  get evaluationDetail (): EvaluationVo {
    return this.evaluationService.evaluationDetail;
}

  set evaluationDetail (value: EvaluationVo) {
  this.evaluationService.evaluationDetail = value ;
}


get evaluationShowDetail (): boolean  {
  return this.evaluationService.evaluationShowDetail;
}

set evaluationShowDetail (value: boolean ) {
  this.evaluationService.evaluationShowDetail = value ;
}

  ngOnInit(): void {

  }

public detailHide(){
       this.evaluationService.detailHide();
}

}