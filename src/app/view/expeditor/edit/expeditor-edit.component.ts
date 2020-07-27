import {Component, OnInit} from '@angular/core';
import {ExpeditorService} from '../../../controller/service/Expeditor.service';
import {ExpeditorVo} from '../../../controller/model/expeditor.model';
import {UserVo} from '../../../controller/model/User.model';
import {SexeVo} from '../../../controller/model/Sexe.model';
import {NationalityVo} from '../../../controller/model/Nationality.model';

@Component({
    selector: 'app-expeditor-edit',
    templateUrl: './expeditor-edit.component.html',
    styleUrls: ['./expeditor-edit.component.css']
})
export class ExpeditorEditComponent implements OnInit {
    constructor(private expeditorService: ExpeditorService) {
    }

    get expeditor(): ExpeditorVo {
        return this.expeditorService.expeditor;
    }

    get editableExpeditors(): Array<ExpeditorVo> {
        return this.expeditorService.editableExpeditors;
    }

    set editableExpeditors(value: Array<ExpeditorVo>) {
        this.expeditorService.editableExpeditors = value;
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

    ngOnInit(): void {
        this.findAllsexes();
        this.findAllnationalitys();
        this.findAllcreatedBys();
        this.findAllupdatedBys();
    }

    editExpeditor() {
        this.expeditorService.editExpeditor();
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

    findBytitle(ref: string) {
        this.expeditorService.findBytitle(ref);
    }


}