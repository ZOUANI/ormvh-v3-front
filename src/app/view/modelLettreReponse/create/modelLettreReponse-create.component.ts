import {Component, OnInit} from '@angular/core';
import {ModelLettreReponseService} from '../../../controller/service/ModelLettreReponse.service';
import {ModelLettreReponseVo} from '../../../controller/model/modelLettreReponse.model';
import {UserVo} from '../../../controller/model/User.model';
import {CategorieModelLettreReponseVo} from '../../../controller/model/CategorieModelLettreReponse.model';

@Component({
    selector: 'app-modelLettreReponse-create',
    templateUrl: './modelLettreReponse-create.component.html',
    styleUrls: ['./modelLettreReponse-create.component.css']
})
export class ModelLettreReponseCreateComponent implements OnInit {
    constructor(private modelLettreReponseService: ModelLettreReponseService) {
    }

    get modelLettreReponse(): ModelLettreReponseVo {
        return this.modelLettreReponseService.modelLettreReponse;
    }

    get categorieModelLettreReponses(): Array<CategorieModelLettreReponseVo> {
        return this.modelLettreReponseService.categorieModelLettreReponses;
    }

    get createdBys(): Array<UserVo> {
        return this.modelLettreReponseService.createdBys;
    }

    get updatedBys(): Array<UserVo> {
        return this.modelLettreReponseService.updatedBys;
    }

    ngOnInit(): void {
        this.findAllcategorieModelLettreReponses();
        this.findAllcreatedBys();
        this.findAllupdatedBys();
    }

    saveModelLettreReponse() {
        this.modelLettreReponseService.saveModelLettreReponse();
    }

    findAllcategorieModelLettreReponses() {
        this.modelLettreReponseService.findAllcategorieModelLettreReponses();
    }

    findAllcreatedBys() {
        this.modelLettreReponseService.findAllcreatedBys();
    }

    findAllupdatedBys() {
        this.modelLettreReponseService.findAllupdatedBys();
    }

}