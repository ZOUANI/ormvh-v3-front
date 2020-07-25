import {Component, OnInit} from '@angular/core';
import {CategorieModelLettreReponseVo} from '../../../controller/model/categorieModelLettreReponse.model';
import {CategorieModelLettreReponseService} from '../../../controller/service/CategorieModelLettreReponse.service';
import {UserVo} from '../../../controller/model/User.model';

@Component({
    selector: 'app-categorieModelLettreReponse-list',
    templateUrl: './categorieModelLettreReponse-list.component.html',
    styleUrls: ['./categorieModelLettreReponse-list.component.css']
})
export class CategorieModelLettreReponselistComponent implements OnInit {

    constructor(private _categorieModelLettreReponseService: CategorieModelLettreReponseService) {
    }

    get updatedBys(): Array<UserVo> {
        return this.categorieModelLettreReponseService.updatedBys;
    }

    get createdBys(): Array<UserVo> {
        return this.categorieModelLettreReponseService.createdBys;
    }

    get categorieModelLettreReponseService(): CategorieModelLettreReponseService {
        return this._categorieModelLettreReponseService;
    }

    set categorieModelLettreReponseService(value: CategorieModelLettreReponseService) {
        this._categorieModelLettreReponseService = value;
    }

    get categorieModelLettreReponseListe(): Array<CategorieModelLettreReponseVo> {
        return this.categorieModelLettreReponseService.categorieModelLettreReponseListe;
    }

    set categorieModelLettreReponseListe(value: Array<CategorieModelLettreReponseVo>) {
        this.categorieModelLettreReponseService.categorieModelLettreReponseListe = value;
    }

    get categorieModelLettreReponseDetail(): CategorieModelLettreReponseVo {
        return this.categorieModelLettreReponseService.categorieModelLettreReponseDetail;
    }

    set categorieModelLettreReponseDetail(value: CategorieModelLettreReponseVo) {
        this.categorieModelLettreReponseService.categorieModelLettreReponseDetail = value;
    }

    get categorieModelLettreReponseSearch(): CategorieModelLettreReponseVo {
        return this.categorieModelLettreReponseService.categorieModelLettreReponseSearch;
    }

    set categorieModelLettreReponseSearch(value: CategorieModelLettreReponseVo) {
        this.categorieModelLettreReponseService.categorieModelLettreReponseSearch = value;
    }

    get categorieModelLettreReponseShowDetail(): boolean {
        return this.categorieModelLettreReponseService.categorieModelLettreReponseShowDetail;
    }

    set categorieModelLettreReponseShowDetail(value: boolean) {
        this.categorieModelLettreReponseService.categorieModelLettreReponseShowDetail = value;
    }

    get categorieModelLettreReponseShowCreate(): boolean {
        return this.categorieModelLettreReponseService.categorieModelLettreReponseShowCreate;
    }

    set categorieModelLettreReponseShowCreate(value: boolean) {
        this.categorieModelLettreReponseService.categorieModelLettreReponseShowCreate = value;
    }

    get categorieModelLettreReponseShowEdit(): boolean {
        return this.categorieModelLettreReponseService.categorieModelLettreReponseShowEdit;
    }

    set categorieModelLettreReponseShowEdit(value: boolean) {
        this.categorieModelLettreReponseService.categorieModelLettreReponseShowEdit = value;
    }

    ngOnInit(): void {
        this.findAll();
        this.findAllupdatedBys();
        this.findAllcreatedBys();
    }

    editShow(pojo: CategorieModelLettreReponseVo) {
        this.categorieModelLettreReponseService.editShow(pojo);

    }

    createShow() {
        this.categorieModelLettreReponseService.createShow();

    }

    delete(pojo: CategorieModelLettreReponseVo) {
        this.categorieModelLettreReponseService.delete(pojo);
    }


    detailShow(pojo: CategorieModelLettreReponseVo) {
        this.categorieModelLettreReponseService.detailShow(pojo);

    }

    findCategorieModelLettreReponse(pojo: CategorieModelLettreReponseVo) {
        this.categorieModelLettreReponseService.findCategorieModelLettreReponse(pojo);

    }

    findAll() {
        this.categorieModelLettreReponseService.findAll();
    }

    findAllupdatedBys() {
        this.categorieModelLettreReponseService.findAllupdatedBys();
    }

    findAllcreatedBys() {
        this.categorieModelLettreReponseService.findAllcreatedBys();
    }

}
