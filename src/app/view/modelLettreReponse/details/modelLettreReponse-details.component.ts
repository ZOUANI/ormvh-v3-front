import {Component, OnInit} from '@angular/core';
import {ModelLettreReponseVo} from '../../../controller/model/modelLettreReponse.model';
import {ModelLettreReponseService} from '../../../controller/service/ModelLettreReponse.service';

@Component({
    selector: 'app-modelLettreReponse-details',
    templateUrl: './modelLettreReponse-details.component.html',
    styleUrls: ['./modelLettreReponse-details.component.css']
})

export class ModelLettreReponseDetailsComponent implements OnInit {

    constructor(private _modelLettreReponseService: ModelLettreReponseService) {
    }


    get modelLettreReponseService(): ModelLettreReponseService {
        return this._modelLettreReponseService;
    }

    set modelLettreReponseService(value: ModelLettreReponseService) {
        this._modelLettreReponseService = value;
    }

    get modelLettreReponseDetail(): ModelLettreReponseVo {
        return this.modelLettreReponseService.modelLettreReponseDetail;
    }

    set modelLettreReponseDetail(value: ModelLettreReponseVo) {
        this.modelLettreReponseService.modelLettreReponseDetail = value;
    }


    get modelLettreReponseShowDetail(): boolean {
        return this.modelLettreReponseService.modelLettreReponseShowDetail;
    }

    set modelLettreReponseShowDetail(value: boolean) {
        this.modelLettreReponseService.modelLettreReponseShowDetail = value;
    }

    ngOnInit(): void {

    }

    public detailHide() {
        this.modelLettreReponseService.detailHide();
    }

}