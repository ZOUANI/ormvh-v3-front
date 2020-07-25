import {Component, OnInit} from '@angular/core';
import {BordereauVo} from '../../../controller/model/bordereau.model';
import {BordereauService} from '../../../controller/service/Bordereau.service';
import {UserVo} from '../../../controller/model/User.model';

@Component({
    selector: 'app-bordereau-list',
    templateUrl: './bordereau-list.component.html',
    styleUrls: ['./bordereau-list.component.css']
})
export class BordereaulistComponent implements OnInit {

    constructor(private _bordereauService: BordereauService) {
    }

    get createdBys(): Array<UserVo> {
        return this.bordereauService.createdBys;
    }

    get updatedBys(): Array<UserVo> {
        return this.bordereauService.updatedBys;
    }

    get bordereauService(): BordereauService {
        return this._bordereauService;
    }

    set bordereauService(value: BordereauService) {
        this._bordereauService = value;
    }

    get bordereauListe(): Array<BordereauVo> {
        return this.bordereauService.bordereauListe;
    }

    set bordereauListe(value: Array<BordereauVo>) {
        this.bordereauService.bordereauListe = value;
    }

    get bordereauDetail(): BordereauVo {
        return this.bordereauService.bordereauDetail;
    }

    set bordereauDetail(value: BordereauVo) {
        this.bordereauService.bordereauDetail = value;
    }

    get bordereauSearch(): BordereauVo {
        return this.bordereauService.bordereauSearch;
    }

    set bordereauSearch(value: BordereauVo) {
        this.bordereauService.bordereauSearch = value;
    }

    get bordereauShowDetail(): boolean {
        return this.bordereauService.bordereauShowDetail;
    }

    set bordereauShowDetail(value: boolean) {
        this.bordereauService.bordereauShowDetail = value;
    }

    get bordereauShowCreate(): boolean {
        return this.bordereauService.bordereauShowCreate;
    }

    set bordereauShowCreate(value: boolean) {
        this.bordereauService.bordereauShowCreate = value;
    }

    get bordereauShowEdit(): boolean {
        return this.bordereauService.bordereauShowEdit;
    }

    set bordereauShowEdit(value: boolean) {
        this.bordereauService.bordereauShowEdit = value;
    }

    ngOnInit(): void {
        this.findAll();
        this.findAllcreatedBys();
        this.findAllupdatedBys();
    }

    editShow(pojo: BordereauVo) {
        this.bordereauService.editShow(pojo);

    }

    createShow() {
        this.bordereauService.createShow();

    }

    delete(pojo: BordereauVo) {
        this.bordereauService.delete(pojo);
    }


    detailShow(pojo: BordereauVo) {
        this.bordereauService.detailShow(pojo);

    }

    findBordereau(pojo: BordereauVo) {
        this.bordereauService.findBordereau(pojo);

    }

    findAll() {
        this.bordereauService.findAll();
    }

    findAllcreatedBys() {
        this.bordereauService.findAllcreatedBys();
    }

    findAllupdatedBys() {
        this.bordereauService.findAllupdatedBys();
    }

}
