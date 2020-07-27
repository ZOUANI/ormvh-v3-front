import {Component, OnInit} from '@angular/core';
import {ExpeditorTypeVo} from '../../../controller/model/expeditorType.model';
import {ExpeditorTypeService} from '../../../controller/service/ExpeditorType.service';

@Component({
    selector: 'app-expeditorType-details',
    templateUrl: './expeditorType-details.component.html',
    styleUrls: ['./expeditorType-details.component.css']
})

export class ExpeditorTypeDetailsComponent implements OnInit {

    constructor(private _expeditorTypeService: ExpeditorTypeService) {
    }


    get expeditorTypeService(): ExpeditorTypeService {
        return this._expeditorTypeService;
    }

    set expeditorTypeService(value: ExpeditorTypeService) {
        this._expeditorTypeService = value;
    }

    get expeditorTypeDetail(): ExpeditorTypeVo {
        return this.expeditorTypeService.expeditorTypeDetail;
    }

    set expeditorTypeDetail(value: ExpeditorTypeVo) {
        this.expeditorTypeService.expeditorTypeDetail = value;
    }


    get expeditorTypeShowDetail(): boolean {
        return this.expeditorTypeService.expeditorTypeShowDetail;
    }

    set expeditorTypeShowDetail(value: boolean) {
        this.expeditorTypeService.expeditorTypeShowDetail = value;
    }

    ngOnInit(): void {

    }

    public detailHide() {
        this.expeditorTypeService.detailHide();
    }

}