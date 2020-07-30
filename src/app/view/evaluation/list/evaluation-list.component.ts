import {Component, OnInit} from '@angular/core';
import {EvaluationVo} from '../../../controller/model/evaluation.model';
import {EvaluationService} from '../../../controller/service/Evaluation.service';
import {UserVo} from '../../../controller/model/User.model';

@Component({
    selector: 'app-evaluation-list',
    templateUrl: './evaluation-list.component.html',
    styleUrls: ['./evaluation-list.component.css']
})
export class EvaluationlistComponent implements OnInit {

    constructor(private _evaluationService: EvaluationService) {
    }

    get createdBys(): Array<UserVo> {
        return this.evaluationService.createdBys;
    }

    get updatedBys(): Array<UserVo> {
        return this.evaluationService.updatedBys;
    }

    get evaluationService(): EvaluationService {
        return this._evaluationService;
    }

    set evaluationService(value: EvaluationService) {
        this._evaluationService = value;
    }

    get evaluationListe(): Array<EvaluationVo> {
        return this.evaluationService.evaluationListe;
    }

    set evaluationListe(value: Array<EvaluationVo>) {
        this.evaluationService.evaluationListe = value;
    }

    get evaluationDetail(): EvaluationVo {
        return this.evaluationService.evaluationDetail;
    }

    set evaluationDetail(value: EvaluationVo) {
        this.evaluationService.evaluationDetail = value;
    }

    get evaluationSearch(): EvaluationVo {
        return this.evaluationService.evaluationSearch;
    }

    set evaluationSearch(value: EvaluationVo) {
        this.evaluationService.evaluationSearch = value;
    }

    get evaluationShowDetail(): boolean {
        return this.evaluationService.evaluationShowDetail;
    }

    set evaluationShowDetail(value: boolean) {
        this.evaluationService.evaluationShowDetail = value;
    }

    get evaluationShowCreate(): boolean {
        return this.evaluationService.evaluationShowCreate;
    }

    set evaluationShowCreate(value: boolean) {
        this.evaluationService.evaluationShowCreate = value;
    }

    get evaluationShowEdit(): boolean {
        return this.evaluationService.evaluationShowEdit;
    }

    set evaluationShowEdit(value: boolean) {
        this.evaluationService.evaluationShowEdit = value;
    }

    ngOnInit(): void {
        this.findAll();
        this.findAllcreatedBys();
        this.findAllupdatedBys();
    }

    editShow(pojo: EvaluationVo) {
        this.evaluationService.editShow(pojo);

    }

    createShow() {
        this.evaluationService.createShow();

    }

    delete(pojo: EvaluationVo) {
        this.evaluationService.delete(pojo);
    }


    detailShow(pojo: EvaluationVo) {
        this.evaluationService.detailShow(pojo);

    }

    findEvaluation(pojo: EvaluationVo) {
        this.evaluationService.findEvaluation(pojo);

    }

    findAll() {
        this.evaluationService.findAll();
    }

    findAllcreatedBys() {
        this.evaluationService.findAllcreatedBys();
    }

    findAllupdatedBys() {
        this.evaluationService.findAllupdatedBys();
    }

}
