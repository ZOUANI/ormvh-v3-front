import {Component, OnInit} from '@angular/core';
import {TypeCourrierVo} from '../../../controller/model/typeCourrier.model';
import {TypeCourrierService} from '../../../controller/service/TypeCourrier.service';

@Component({
    selector: 'app-typeCourrier-details',
    templateUrl: './typeCourrier-details.component.html',
    styleUrls: ['./typeCourrier-details.component.css']
})

export class TypeCourrierDetailsComponent implements OnInit {

    constructor(private _typeCourrierService: TypeCourrierService) {
    }


    get typeCourrierService(): TypeCourrierService {
        return this._typeCourrierService;
    }

    set typeCourrierService(value: TypeCourrierService) {
        this._typeCourrierService = value;
    }

    get typeCourrierDetail(): TypeCourrierVo {
        return this.typeCourrierService.typeCourrierDetail;
    }

    set typeCourrierDetail(value: TypeCourrierVo) {
        this.typeCourrierService.typeCourrierDetail = value;
    }


    get typeCourrierShowDetail(): boolean {
        return this.typeCourrierService.typeCourrierShowDetail;
    }

    set typeCourrierShowDetail(value: boolean) {
        this.typeCourrierService.typeCourrierShowDetail = value;
    }

    ngOnInit(): void {

    }

    public detailHide() {
        this.typeCourrierService.detailHide();
    }

}