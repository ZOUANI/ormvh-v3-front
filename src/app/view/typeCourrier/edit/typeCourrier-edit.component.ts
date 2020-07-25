import {Component, OnInit} from '@angular/core';
import {TypeCourrierService} from '../../../controller/service/TypeCourrier.service';
import {TypeCourrierVo} from '../../../controller/model/typeCourrier.model';

@Component({
    selector: 'app-typeCourrier-edit',
    templateUrl: './typeCourrier-edit.component.html',
    styleUrls: ['./typeCourrier-edit.component.css']
})
export class TypeCourrierEditComponent implements OnInit {
    constructor(private typeCourrierService: TypeCourrierService) {
    }

    get typeCourrier(): TypeCourrierVo {
        return this.typeCourrierService.typeCourrier;
    }

    get editableTypeCourriers(): Array<TypeCourrierVo> {
        return this.typeCourrierService.editableTypeCourriers;
    }

    set editableTypeCourriers(value: Array<TypeCourrierVo>) {
        this.typeCourrierService.editableTypeCourriers = value;
    }

    ngOnInit(): void {
    }

    editTypeCourrier() {
        this.typeCourrierService.editTypeCourrier();
    }

    findBylibelle(ref: string) {
        this.typeCourrierService.findBylibelle(ref);
    }

    editHide() {
        this.typeCourrierService.editHide();
    }


}