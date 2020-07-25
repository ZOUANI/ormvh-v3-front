import {Component, OnInit} from '@angular/core';
import {TypeCourrierVo} from '../../../controller/model/typeCourrier.model';
import {TypeCourrierService} from '../../../controller/service/TypeCourrier.service';

@Component({
    selector: 'app-typeCourrier-list',
    templateUrl: './typeCourrier-list.component.html',
    styleUrls: ['./typeCourrier-list.component.css']
})
export class TypeCourrierlistComponent implements OnInit {

    constructor(private _typeCourrierService: TypeCourrierService) {
    }

    get typeCourrierService(): TypeCourrierService {
        return this._typeCourrierService;
    }

    set typeCourrierService(value: TypeCourrierService) {
        this._typeCourrierService = value;
    }

    get typeCourrierListe(): Array<TypeCourrierVo> {
        return this.typeCourrierService.typeCourrierListe;
    }

    set typeCourrierListe(value: Array<TypeCourrierVo>) {
        this.typeCourrierService.typeCourrierListe = value;
    }

    get typeCourrierDetail(): TypeCourrierVo {
        return this.typeCourrierService.typeCourrierDetail;
    }

    set typeCourrierDetail(value: TypeCourrierVo) {
        this.typeCourrierService.typeCourrierDetail = value;
    }

    get typeCourrierSearch(): TypeCourrierVo {
        return this.typeCourrierService.typeCourrierSearch;
    }

    set typeCourrierSearch(value: TypeCourrierVo) {
        this.typeCourrierService.typeCourrierSearch = value;
    }

    get typeCourrierShowDetail(): boolean {
        return this.typeCourrierService.typeCourrierShowDetail;
    }

    set typeCourrierShowDetail(value: boolean) {
        this.typeCourrierService.typeCourrierShowDetail = value;
    }

    get typeCourrierShowCreate(): boolean {
        return this.typeCourrierService.typeCourrierShowCreate;
    }

    set typeCourrierShowCreate(value: boolean) {
        this.typeCourrierService.typeCourrierShowCreate = value;
    }

    get typeCourrierShowEdit(): boolean {
        return this.typeCourrierService.typeCourrierShowEdit;
    }

    set typeCourrierShowEdit(value: boolean) {
        this.typeCourrierService.typeCourrierShowEdit = value;
    }

    ngOnInit(): void {
        this.findAll();
    }

    editShow(pojo: TypeCourrierVo) {
        this.typeCourrierService.editShow(pojo);

    }

    createShow() {
        this.typeCourrierService.createShow();

    }

    delete(pojo: TypeCourrierVo) {
        this.typeCourrierService.delete(pojo);
    }


    detailShow(pojo: TypeCourrierVo) {
        this.typeCourrierService.detailShow(pojo);

    }

    findTypeCourrier(pojo: TypeCourrierVo) {
        this.typeCourrierService.findTypeCourrier(pojo);

    }

    findAll() {
        this.typeCourrierService.findAll();
    }


}
