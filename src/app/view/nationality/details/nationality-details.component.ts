import {Component, OnInit} from '@angular/core';
import {NationalityVo} from '../../../controller/model/nationality.model';
import {NationalityService} from '../../../controller/service/Nationality.service';

@Component({
    selector: 'app-nationality-details',
    templateUrl: './nationality-details.component.html',
    styleUrls: ['./nationality-details.component.css']
})

export class NationalityDetailsComponent implements OnInit {

    constructor(private _nationalityService: NationalityService) {
    }


    get nationalityService(): NationalityService {
        return this._nationalityService;
    }

    set nationalityService(value: NationalityService) {
        this._nationalityService = value;
    }

    get nationalityDetail(): NationalityVo {
        return this.nationalityService.nationalityDetail;
    }

    set nationalityDetail(value: NationalityVo) {
        this.nationalityService.nationalityDetail = value;
    }


    get nationalityShowDetail(): boolean {
        return this.nationalityService.nationalityShowDetail;
    }

    set nationalityShowDetail(value: boolean) {
        this.nationalityService.nationalityShowDetail = value;
    }

    ngOnInit(): void {

    }

    public detailHide() {
        this.nationalityService.detailHide();
    }

}