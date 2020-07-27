import {Component, OnInit} from '@angular/core';
import {NatureCourrierService} from '../../../controller/service/NatureCourrier.service';
import {NatureCourrierVo} from '../../../controller/model/natureCourrier.model';
import {UserVo} from '../../../controller/model/User.model';

@Component({
    selector: 'app-natureCourrier-create',
    templateUrl: './natureCourrier-create.component.html',
    styleUrls: ['./natureCourrier-create.component.css']
})
export class NatureCourrierCreateComponent implements OnInit {
    constructor(private natureCourrierService: NatureCourrierService) {
    }

    get natureCourrier(): NatureCourrierVo {
        return this.natureCourrierService.natureCourrier;
    }

    get createdBys(): Array<UserVo> {
        return this.natureCourrierService.createdBys;
    }

    get updatedBys(): Array<UserVo> {
        return this.natureCourrierService.updatedBys;
    }

    ngOnInit(): void {
        this.findAllcreatedBys();
        this.findAllupdatedBys();
    }

    saveNatureCourrier() {
        this.natureCourrierService.saveNatureCourrier();
    }

    findAllcreatedBys() {
        this.natureCourrierService.findAllcreatedBys();
    }

    findAllupdatedBys() {
        this.natureCourrierService.findAllupdatedBys();
    }

}