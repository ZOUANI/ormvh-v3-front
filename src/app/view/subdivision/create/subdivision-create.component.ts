import {Component, OnInit} from '@angular/core';
import {SubdivisionService} from '../../../controller/service/Subdivision.service';
import {SubdivisionVo} from '../../../controller/model/subdivision.model';
import {UserVo} from '../../../controller/model/User.model';

@Component({
    selector: 'app-subdivision-create',
    templateUrl: './subdivision-create.component.html',
    styleUrls: ['./subdivision-create.component.css']
})
export class SubdivisionCreateComponent implements OnInit {
    constructor(private subdivisionService: SubdivisionService) {
    }

    get subdivision(): SubdivisionVo {
        return this.subdivisionService.subdivision;
    }

    get createdBys(): Array<UserVo> {
        return this.subdivisionService.createdBys;
    }

    get updatedBys(): Array<UserVo> {
        return this.subdivisionService.updatedBys;
    }

    get subdivisionShowCreate(): boolean {
        return this.subdivisionService.subdivisionShowCreate;
    }

    set subdivisionShowCreate(value: boolean) {
        this.subdivisionService.subdivisionShowCreate = value;
    }

    ngOnInit(): void {
        this.findAllcreatedBys();
        this.findAllupdatedBys();
    }

    saveSubdivision() {
        this.subdivisionService.saveSubdivision();
    }

    findAllcreatedBys() {
        this.subdivisionService.findAllcreatedBys();
    }

    findAllupdatedBys() {
        this.subdivisionService.findAllupdatedBys();
    }

    public createHide() {
        this.subdivisionService.createHide();
    }
}