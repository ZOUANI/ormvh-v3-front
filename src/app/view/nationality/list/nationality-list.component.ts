import {Component, OnInit} from '@angular/core';
import {NationalityVo} from '../../../controller/model/nationality.model';
import {NationalityService} from '../../../controller/service/Nationality.service';
import {UserVo} from '../../../controller/model/User.model';

@Component({
    selector: 'app-nationality-list',
    templateUrl: './nationality-list.component.html',
    styleUrls: ['./nationality-list.component.css']
})
export class NationalitylistComponent implements OnInit {

    constructor(private _nationalityService: NationalityService) {
    }

    get updatedBys(): Array<UserVo> {
        return this.nationalityService.updatedBys;
    }

    get createdBys(): Array<UserVo> {
        return this.nationalityService.createdBys;
    }

    get nationalityService(): NationalityService {
        return this._nationalityService;
    }

    set nationalityService(value: NationalityService) {
        this._nationalityService = value;
    }

    get nationalityListe(): Array<NationalityVo> {
        return this.nationalityService.nationalityListe;
    }

    set nationalityListe(value: Array<NationalityVo>) {
        this.nationalityService.nationalityListe = value;
    }

    get nationalityDetail(): NationalityVo {
        return this.nationalityService.nationalityDetail;
    }

    set nationalityDetail(value: NationalityVo) {
        this.nationalityService.nationalityDetail = value;
    }

    get nationalitySearch(): NationalityVo {
        return this.nationalityService.nationalitySearch;
    }

    set nationalitySearch(value: NationalityVo) {
        this.nationalityService.nationalitySearch = value;
    }

    get nationalityShowDetail(): boolean {
        return this.nationalityService.nationalityShowDetail;
    }

    set nationalityShowDetail(value: boolean) {
        this.nationalityService.nationalityShowDetail = value;
    }

    get nationalityShowCreate(): boolean {
        return this.nationalityService.nationalityShowCreate;
    }

    set nationalityShowCreate(value: boolean) {
        this.nationalityService.nationalityShowCreate = value;
    }

    get nationalityShowEdit(): boolean {
        return this.nationalityService.nationalityShowEdit;
    }

    set nationalityShowEdit(value: boolean) {
        this.nationalityService.nationalityShowEdit = value;
    }

    ngOnInit(): void {
        this.findAll();
        this.findAllupdatedBys();
        this.findAllcreatedBys();
    }

    editShow(pojo: NationalityVo) {
        this.nationalityService.editShow(pojo);

    }

    createShow() {
        this.nationalityService.createShow();

    }

    delete(pojo: NationalityVo) {
        this.nationalityService.delete(pojo);
    }


    detailShow(pojo: NationalityVo) {
        this.nationalityService.detailShow(pojo);

    }

    findNationality(pojo: NationalityVo) {
        this.nationalityService.findNationality(pojo);

    }

    findAll() {
        this.nationalityService.findAll();
    }

    findAllupdatedBys() {
        this.nationalityService.findAllupdatedBys();
    }

    findAllcreatedBys() {
        this.nationalityService.findAllcreatedBys();
    }

}
