import {Component, OnInit} from '@angular/core';
import {SubdivisionService} from '../../../controller/service/Subdivision.service';
import {SubdivisionVo} from '../../../controller/model/subdivision.model';
import {UserVo} from '../../../controller/model/User.model';

@Component({
    selector: 'app-subdivision-edit',
    templateUrl: './subdivision-edit.component.html',
    styleUrls: ['./subdivision-edit.component.css']
})
export class SubdivisionEditComponent implements OnInit {
    constructor(private subdivisionService: SubdivisionService) {
    }

    get subdivision(): SubdivisionVo {
        return this.subdivisionService.subdivision;
    }

    get editableSubdivisions(): Array<SubdivisionVo> {
        return this.subdivisionService.editableSubdivisions;
    }

    set editableSubdivisions(value: Array<SubdivisionVo>) {
        this.subdivisionService.editableSubdivisions = value;
    }

    get createdBys(): Array<UserVo> {
        return this.subdivisionService.createdBys;
    }

    get updatedBys(): Array<UserVo> {
        return this.subdivisionService.updatedBys;
    }

    ngOnInit(): void {
        this.findAllcreatedBys();
        this.findAllupdatedBys();
    }

    editSubdivision() {
        this.subdivisionService.editSubdivision();
    }

    findAllcreatedBys() {
        this.subdivisionService.findAllcreatedBys();
    }

    findAllupdatedBys() {
        this.subdivisionService.findAllupdatedBys();
    }

    findBytitle(ref: string) {
        this.subdivisionService.findBytitle(ref);
    }

    editHide() {
        this.subdivisionService.editHide();
    }


}