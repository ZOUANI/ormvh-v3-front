import {Component, OnInit} from '@angular/core';
import {NationalityService} from '../../../controller/service/Nationality.service';
import {NationalityVo} from '../../../controller/model/nationality.model';
import {UserVo} from '../../../controller/model/User.model';

@Component({
    selector: 'app-nationality-create',
    templateUrl: './nationality-create.component.html',
    styleUrls: ['./nationality-create.component.css']
})
export class NationalityCreateComponent implements OnInit {
    constructor(private nationalityService: NationalityService) {
    }

    get nationality(): NationalityVo {
        return this.nationalityService.nationality;
    }

    get updatedBys(): Array<UserVo> {
        return this.nationalityService.updatedBys;
    }

    get createdBys(): Array<UserVo> {
        return this.nationalityService.createdBys;
    }

    get nationalityShowCreate(): boolean {
        return this.nationalityService.nationalityShowCreate;
    }

    set nationalityShowCreate(value: boolean) {
        this.nationalityService.nationalityShowCreate = value;
    }

    ngOnInit(): void {
        this.findAllupdatedBys();
        this.findAllcreatedBys();
    }

    saveNationality() {
        this.nationalityService.saveNationality();
    }

    findAllupdatedBys() {
        this.nationalityService.findAllupdatedBys();
    }

    findAllcreatedBys() {
        this.nationalityService.findAllcreatedBys();
    }

    public createHide() {
        this.nationalityService.createHide();
    }
}