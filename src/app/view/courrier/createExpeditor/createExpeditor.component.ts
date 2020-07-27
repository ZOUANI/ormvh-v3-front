import {Component, OnInit} from '@angular/core';
import {ExpeditorService} from '../../../controller/service/Expeditor.service';
import {ExpeditorVo} from '../../../controller/model/expeditor.model';
import {UserVo} from '../../../controller/model/User.model';
import {SexeVo} from '../../../controller/model/Sexe.model';
import {NationalityVo} from '../../../controller/model/Nationality.model';
import {CourrierService} from '../../../controller/service/Courrier.service';

@Component({
    selector: 'app-createExpeditor',
    templateUrl: './createExpeditor.component.html',
})
export class CreateExpeditorComponent implements OnInit {
    constructor(private expeditorService: ExpeditorService, private courrierService: CourrierService) {
    }

    get expeditor(): ExpeditorVo {
        return this.expeditorService.expeditor;
    }

    get sexes(): Array<SexeVo> {
        return this.expeditorService.sexes;
    }

    get nationalitys(): Array<NationalityVo> {
        return this.expeditorService.nationalitys;
    }

    get createdBys(): Array<UserVo> {
        return this.expeditorService.createdBys;
    }

    get updatedBys(): Array<UserVo> {
        return this.expeditorService.updatedBys;
    }

    get createExpeditorShow(): boolean {
        return this.courrierService.createExpeditorShow;
    }

    set createExpeditorShow(value: boolean) {
        this.courrierService.createExpeditorShow = value;
    }

    ngOnInit(): void {
        this.findAllsexes();
        this.findAllnationalitys();
        this.findAllcreatedBys();
        this.findAllupdatedBys();
    }

    saveExpeditor() {
        this.expeditorService.saveExpeditor();
        this.courrierService.createExpeditorShow = false

    }

    findAllsexes() {
        this.expeditorService.findAllsexes();
    }

    findAllnationalitys() {
        this.expeditorService.findAllnationalitys();
    }

    findAllcreatedBys() {
        this.expeditorService.findAllcreatedBys();
    }

    findAllupdatedBys() {
        this.expeditorService.findAllupdatedBys();
    }

    createExpeditorHide() {
        this.courrierService.createExpeditorShow = false
    }
}