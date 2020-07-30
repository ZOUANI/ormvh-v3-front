import {Component, OnInit} from '@angular/core';
import {ExpeditorTypeVo} from '../../../controller/model/expeditorType.model';
import {ExpeditorTypeService} from '../../../controller/service/ExpeditorType.service';
import {UserVo} from '../../../controller/model/User.model';

@Component({
    selector: 'app-expeditorType-list',
    templateUrl: './expeditorType-list.component.html',
    styleUrls: ['./expeditorType-list.component.css']
})
export class ExpeditorTypelistComponent implements OnInit {

    constructor(private _expeditorTypeService: ExpeditorTypeService) {
    }

    get createdBys(): Array<UserVo> {
        return this.expeditorTypeService.createdBys;
    }

    get updatedBys(): Array<UserVo> {
        return this.expeditorTypeService.updatedBys;
    }

    get expeditorTypeService(): ExpeditorTypeService {
        return this._expeditorTypeService;
    }

    set expeditorTypeService(value: ExpeditorTypeService) {
        this._expeditorTypeService = value;
    }

    get expeditorTypeListe(): Array<ExpeditorTypeVo> {
        return this.expeditorTypeService.expeditorTypeListe;
    }

    set expeditorTypeListe(value: Array<ExpeditorTypeVo>) {
        this.expeditorTypeService.expeditorTypeListe = value;
    }

    get expeditorTypeDetail(): ExpeditorTypeVo {
        return this.expeditorTypeService.expeditorTypeDetail;
    }

    set expeditorTypeDetail(value: ExpeditorTypeVo) {
        this.expeditorTypeService.expeditorTypeDetail = value;
    }

    get expeditorTypeSearch(): ExpeditorTypeVo {
        return this.expeditorTypeService.expeditorTypeSearch;
    }

    set expeditorTypeSearch(value: ExpeditorTypeVo) {
        this.expeditorTypeService.expeditorTypeSearch = value;
    }

    get expeditorTypeShowDetail(): boolean {
        return this.expeditorTypeService.expeditorTypeShowDetail;
    }

    set expeditorTypeShowDetail(value: boolean) {
        this.expeditorTypeService.expeditorTypeShowDetail = value;
    }

    get expeditorTypeShowCreate(): boolean {
        return this.expeditorTypeService.expeditorTypeShowCreate;
    }

    set expeditorTypeShowCreate(value: boolean) {
        this.expeditorTypeService.expeditorTypeShowCreate = value;
    }

    get expeditorTypeShowEdit(): boolean {
        return this.expeditorTypeService.expeditorTypeShowEdit;
    }

    set expeditorTypeShowEdit(value: boolean) {
        this.expeditorTypeService.expeditorTypeShowEdit = value;
    }

    ngOnInit(): void {
        this.findAll();
        this.findAllcreatedBys();
        this.findAllupdatedBys();
    }

    editShow(pojo: ExpeditorTypeVo) {
        this.expeditorTypeService.editShow(pojo);

    }

    createShow() {
        this.expeditorTypeService.createShow();

    }

    delete(pojo: ExpeditorTypeVo) {
        this.expeditorTypeService.delete(pojo);
    }


    detailShow(pojo: ExpeditorTypeVo) {
        this.expeditorTypeService.detailShow(pojo);

    }

    findExpeditorType(pojo: ExpeditorTypeVo) {
        this.expeditorTypeService.findExpeditorType(pojo);

    }

    findAll() {
        this.expeditorTypeService.findAll();
    }

    findAllcreatedBys() {
        this.expeditorTypeService.findAllcreatedBys();
    }

    findAllupdatedBys() {
        this.expeditorTypeService.findAllupdatedBys();
    }

}
