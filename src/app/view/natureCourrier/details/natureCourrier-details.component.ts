import {Component, OnInit} from '@angular/core';
import {NatureCourrierVo} from '../../../controller/model/natureCourrier.model';
import {NatureCourrierService} from '../../../controller/service/NatureCourrier.service';

@Component({
    selector: 'app-natureCourrier-details',
    templateUrl: './natureCourrier-details.component.html',
    styleUrls: ['./natureCourrier-details.component.css']
})

export class NatureCourrierDetailsComponent implements OnInit {

    constructor(private _natureCourrierService: NatureCourrierService) {
    }


    get natureCourrierService(): NatureCourrierService {
        return this._natureCourrierService;
    }

    set natureCourrierService(value: NatureCourrierService) {
        this._natureCourrierService = value;
    }

    get natureCourrierDetail(): NatureCourrierVo {
        return this.natureCourrierService.natureCourrierDetail;
    }

    set natureCourrierDetail(value: NatureCourrierVo) {
        this.natureCourrierService.natureCourrierDetail = value;
    }


    get natureCourrierShowDetail(): boolean {
        return this.natureCourrierService.natureCourrierShowDetail;
    }

    set natureCourrierShowDetail(value: boolean) {
        this.natureCourrierService.natureCourrierShowDetail = value;
    }

    ngOnInit(): void {

    }

    public detailHide() {
        this.natureCourrierService.detailHide();
    }

}