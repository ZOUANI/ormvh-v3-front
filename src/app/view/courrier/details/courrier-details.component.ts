import {Component, OnInit} from '@angular/core';
import {CourrierVo} from '../../../controller/model/courrier.model';
import {CourrierService} from '../../../controller/service/Courrier.service';

@Component({
    selector: 'app-courrier-details',
    templateUrl: './courrier-details.component.html',
    styleUrls: ['./courrier-details.component.css']
})

export class CourrierDetailsComponent implements OnInit {

    constructor(private _courrierService: CourrierService) {
    }


    get courrierService(): CourrierService {
        return this._courrierService;
    }

    set courrierService(value: CourrierService) {
        this._courrierService = value;
    }

    get courrierDetail(): CourrierVo {
        return this.courrierService.courrierDetail;
    }

    set courrierDetail(value: CourrierVo) {
        this.courrierService.courrierDetail = value;
    }


    get courrierShowDetail(): boolean {
        return this.courrierService.courrierShowDetail;
    }

    set courrierShowDetail(value: boolean) {
        this.courrierService.courrierShowDetail = value;
    }

    ngOnInit(): void {

    }

    public detailHide() {
        this.courrierService.detailHide();
    }

}