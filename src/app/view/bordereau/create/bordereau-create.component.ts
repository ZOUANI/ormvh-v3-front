import {Component, OnInit} from '@angular/core';
import {BordereauService} from '../../../controller/service/Bordereau.service';
import {BordereauVo} from '../../../controller/model/bordereau.model';
import {UserVo} from '../../../controller/model/User.model';

@Component({
    selector: 'app-bordereau-create',
    templateUrl: './bordereau-create.component.html',
    styleUrls: ['./bordereau-create.component.css']
})
export class BordereauCreateComponent implements OnInit {
    constructor(private bordereauService: BordereauService) {
    }

    get bordereau(): BordereauVo {
        return this.bordereauService.bordereau;
    }

    get createdBys(): Array<UserVo> {
        return this.bordereauService.createdBys;
    }

    get updatedBys(): Array<UserVo> {
        return this.bordereauService.updatedBys;
    }

    get bordereauShowCreate(): boolean {
        return this.bordereauService.bordereauShowCreate;
    }

    set bordereauShowCreate(value: boolean) {
        this.bordereauService.bordereauShowCreate = value;
    }

    ngOnInit(): void {
        this.findAllcreatedBys();
        this.findAllupdatedBys();
    }

    saveBordereau() {
        this.bordereauService.saveBordereau();
    }

    findAllcreatedBys() {
        this.bordereauService.findAllcreatedBys();
    }

    findAllupdatedBys() {
        this.bordereauService.findAllupdatedBys();
    }

    public createHide() {
        this.bordereauService.createHide();
    }
}