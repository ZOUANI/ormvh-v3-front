import {Component, OnInit} from '@angular/core';
import {ExpeditorVo} from '../../../controller/model/expeditor.model';
import {ExpeditorService} from '../../../controller/service/Expeditor.service';
import {ExpeditorTypeService} from "../../../controller/service/ExpeditorType.service";

@Component({
    selector: 'app-expeditor-details',
    templateUrl: './expeditor-details.component.html',
    styleUrls: ['./expeditor-details.component.css']
})

export class ExpeditorDetailsComponent implements OnInit {

    constructor(private _expeditorService: ExpeditorService, private expidtorTypeSerice: ExpeditorTypeService) {
    }


    get expeditorService(): ExpeditorService {
        return this._expeditorService;
    }

    set expeditorService(value: ExpeditorService) {
        this._expeditorService = value;
    }

    get expeditorDetail(): ExpeditorVo {
        return this.expeditorService.expeditorDetail;
    }

    set expeditorDetail(value: ExpeditorVo) {
        this.expeditorService.expeditorDetail = value;
    }


    get expeditorShowDetail(): boolean {
        return this.expeditorService.expeditorShowDetail;
    }

    set expeditorShowDetail(value: boolean) {
        this.expeditorService.expeditorShowDetail = value;
    }

    ngOnInit(): void {

    }

    public detailHide() {
        this.expeditorService.detailHide();
    }
}
