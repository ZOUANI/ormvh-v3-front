import {Component, OnInit} from '@angular/core';
import {LeServiceService} from '../../../controller/service/LeService.service';
import {LeServiceVo} from '../../../controller/model/leService.model';
import {UserVo} from '../../../controller/model/User.model';

@Component({
    selector: 'app-leService-create',
    templateUrl: './leService-create.component.html',
    styleUrls: ['./leService-create.component.css']
})
export class LeServiceCreateComponent implements OnInit {
    constructor(private leServiceService: LeServiceService) {
    }

    get leService(): LeServiceVo {
        return this.leServiceService.leService;
    }

    get createdBys(): Array<UserVo> {
        return this.leServiceService.createdBys;
    }
    get chefs(): Array<UserVo> {
        return this.leServiceService.chefs;
    }

    get updatedBys(): Array<UserVo> {
        return this.leServiceService.updatedBys;
    }

    get leServiceShowCreate(): boolean {
        return this.leServiceService.leServiceShowCreate;
    }

    set leServiceShowCreate(value: boolean) {
        this.leServiceService.leServiceShowCreate = value;
    }

    ngOnInit(): void {
        this.findAllcreatedBys();
        this.findAllupdatedBys();
        this.findAllChefs();
    }

    saveLeService() {
        this.leServiceService.saveLeService();
    }

    findAllcreatedBys() {
        this.leServiceService.findAllcreatedBys();
    }

    findAllupdatedBys() {
        this.leServiceService.findAllupdatedBys();
    }
    findAllChefs() {
        this.leServiceService.findAllChefs();
    }

    public createHide() {
        this.leServiceService.createHide();
    }
}