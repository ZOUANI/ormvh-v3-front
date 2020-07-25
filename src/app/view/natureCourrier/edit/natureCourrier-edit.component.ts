import {Component, OnInit} from '@angular/core';
import {NatureCourrierService} from '../../../controller/service/NatureCourrier.service';
import {NatureCourrierVo} from '../../../controller/model/natureCourrier.model';
import {UserVo} from '../../../controller/model/User.model';

@Component({
    selector: 'app-natureCourrier-edit',
    templateUrl: './natureCourrier-edit.component.html',
    styleUrls: ['./natureCourrier-edit.component.css']
})
export class NatureCourrierEditComponent implements OnInit {
    constructor(private natureCourrierService: NatureCourrierService) {
    }

    get natureCourrier(): NatureCourrierVo {
        return this.natureCourrierService.natureCourrier;
    }

    get editableNatureCourriers(): Array<NatureCourrierVo> {
        return this.natureCourrierService.editableNatureCourriers;
    }

    set editableNatureCourriers(value: Array<NatureCourrierVo>) {
        this.natureCourrierService.editableNatureCourriers = value;
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

    editNatureCourrier() {
        this.natureCourrierService.editNatureCourrier();
    }

    findAllcreatedBys() {
        this.natureCourrierService.findAllcreatedBys();
    }

    findAllupdatedBys() {
        this.natureCourrierService.findAllupdatedBys();
    }

    findBylibelle(ref: string) {
        this.natureCourrierService.findBylibelle(ref);
    }


}