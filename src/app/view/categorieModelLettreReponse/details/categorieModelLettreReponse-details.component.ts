import {Component, OnInit} from '@angular/core';
import {CategorieModelLettreReponseVo} from '../../../controller/model/categorieModelLettreReponse.model';
import {CategorieModelLettreReponseService} from '../../../controller/service/CategorieModelLettreReponse.service';

@Component({
    selector: 'app-categorieModelLettreReponse-details',
    templateUrl: './categorieModelLettreReponse-details.component.html',
    styleUrls: ['./categorieModelLettreReponse-details.component.css']
})

export class CategorieModelLettreReponseDetailsComponent implements OnInit {

    constructor(private _categorieModelLettreReponseService: CategorieModelLettreReponseService) {
    }


    get categorieModelLettreReponseService(): CategorieModelLettreReponseService {
        return this._categorieModelLettreReponseService;
    }

    set categorieModelLettreReponseService(value: CategorieModelLettreReponseService) {
        this._categorieModelLettreReponseService = value;
    }

    get categorieModelLettreReponseDetail(): CategorieModelLettreReponseVo {
        return this.categorieModelLettreReponseService.categorieModelLettreReponseDetail;
    }

    set categorieModelLettreReponseDetail(value: CategorieModelLettreReponseVo) {
        this.categorieModelLettreReponseService.categorieModelLettreReponseDetail = value;
    }


    get categorieModelLettreReponseShowDetail(): boolean {
        return this.categorieModelLettreReponseService.categorieModelLettreReponseShowDetail;
    }

    set categorieModelLettreReponseShowDetail(value: boolean) {
        this.categorieModelLettreReponseService.categorieModelLettreReponseShowDetail = value;
    }

    ngOnInit(): void {

    }

    public detailHide() {
        this.categorieModelLettreReponseService.detailHide();
    }

}