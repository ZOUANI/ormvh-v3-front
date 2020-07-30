import {Component, OnInit} from '@angular/core';
import {CourrierObjectVo} from '../../../controller/model/courrierObject.model';
import {CourrierObjectService} from '../../../controller/service/CourrierObject.service';
import {UserVo} from '../../../controller/model/User.model';

@Component({
    selector: 'app-courrierObject-list',
    templateUrl: './courrierObject-list.component.html',
    styleUrls: ['./courrierObject-list.component.css']
})
export class CourrierObjectlistComponent implements OnInit {

    constructor(private _courrierObjectService: CourrierObjectService) {
    }

    get createdBys(): Array<UserVo> {
        return this.courrierObjectService.createdBys;
    }

    get updatedBys(): Array<UserVo> {
        return this.courrierObjectService.updatedBys;
    }

    get courrierObjectService(): CourrierObjectService {
        return this._courrierObjectService;
    }

    set courrierObjectService(value: CourrierObjectService) {
        this._courrierObjectService = value;
    }

    get courrierObjectListe(): Array<CourrierObjectVo> {
        return this.courrierObjectService.courrierObjectListe;
    }

    set courrierObjectListe(value: Array<CourrierObjectVo>) {
        this.courrierObjectService.courrierObjectListe = value;
    }

    get courrierObjectDetail(): CourrierObjectVo {
        return this.courrierObjectService.courrierObjectDetail;
    }

    set courrierObjectDetail(value: CourrierObjectVo) {
        this.courrierObjectService.courrierObjectDetail = value;
    }

    get courrierObjectSearch(): CourrierObjectVo {
        return this.courrierObjectService.courrierObjectSearch;
    }

    set courrierObjectSearch(value: CourrierObjectVo) {
        this.courrierObjectService.courrierObjectSearch = value;
    }

    get courrierObjectShowDetail(): boolean {
        return this.courrierObjectService.courrierObjectShowDetail;
    }

    set courrierObjectShowDetail(value: boolean) {
        this.courrierObjectService.courrierObjectShowDetail = value;
    }

    get courrierObjectShowCreate(): boolean {
        return this.courrierObjectService.courrierObjectShowCreate;
    }

    set courrierObjectShowCreate(value: boolean) {
        this.courrierObjectService.courrierObjectShowCreate = value;
    }

    get courrierObjectShowEdit(): boolean {
        return this.courrierObjectService.courrierObjectShowEdit;
    }

    set courrierObjectShowEdit(value: boolean) {
        this.courrierObjectService.courrierObjectShowEdit = value;
    }

    ngOnInit(): void {
        this.findAll();
        this.findAllcreatedBys();
        this.findAllupdatedBys();
    }

    editShow(pojo: CourrierObjectVo) {
        this.courrierObjectService.editShow(pojo);

    }

    createShow() {
        this.courrierObjectService.createShow();

    }

    delete(pojo: CourrierObjectVo) {
        this.courrierObjectService.delete(pojo);
    }


    detailShow(pojo: CourrierObjectVo) {
        this.courrierObjectService.detailShow(pojo);

    }

    findCourrierObject(pojo: CourrierObjectVo) {
        this.courrierObjectService.findCourrierObject(pojo);

    }

    findAll() {
        this.courrierObjectService.findAll();
    }

    findAllcreatedBys() {
        this.courrierObjectService.findAllcreatedBys();
    }

    findAllupdatedBys() {
        this.courrierObjectService.findAllupdatedBys();
    }

}
