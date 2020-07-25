import {Component, OnInit} from '@angular/core';
import {CategorieModelLettreReponseService} from '../../../controller/service/CategorieModelLettreReponse.service';
import {CategorieModelLettreReponseVo} from '../../../controller/model/categorieModelLettreReponse.model';
import {UserVo} from '../../../controller/model/User.model';

@Component({
    selector: 'app-categorieModelLettreReponse-edit',
    templateUrl: './categorieModelLettreReponse-edit.component.html',
    styleUrls: ['./categorieModelLettreReponse-edit.component.css']
})
export class CategorieModelLettreReponseEditComponent implements OnInit {
    constructor(private categorieModelLettreReponseService: CategorieModelLettreReponseService) {
    }

    get categorieModelLettreReponse(): CategorieModelLettreReponseVo {
        return this.categorieModelLettreReponseService.categorieModelLettreReponse;
    }

    get editableCategorieModelLettreReponses(): Array<CategorieModelLettreReponseVo> {
        return this.categorieModelLettreReponseService.editableCategorieModelLettreReponses;
    }

    set editableCategorieModelLettreReponses(value: Array<CategorieModelLettreReponseVo>) {
        this.categorieModelLettreReponseService.editableCategorieModelLettreReponses = value;
    }

    get updatedBys(): Array<UserVo> {
        return this.categorieModelLettreReponseService.updatedBys;
    }

    get createdBys(): Array<UserVo> {
        return this.categorieModelLettreReponseService.createdBys;
    }

    ngOnInit(): void {
        this.findAllupdatedBys();
        this.findAllcreatedBys();
    }

    editCategorieModelLettreReponse() {
        this.categorieModelLettreReponseService.editCategorieModelLettreReponse();
    }

    findAllupdatedBys() {
        this.categorieModelLettreReponseService.findAllupdatedBys();
    }

    findAllcreatedBys() {
        this.categorieModelLettreReponseService.findAllcreatedBys();
    }

    findBylibelle(ref: string) {
        this.categorieModelLettreReponseService.findBylibelle(ref);
    }

    editHide() {
        this.categorieModelLettreReponseService.editHide();
    }


}