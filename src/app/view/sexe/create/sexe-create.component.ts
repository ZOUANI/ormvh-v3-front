import {Component, OnInit} from '@angular/core';
import {SexeService} from '../../../controller/service/Sexe.service';
import {SexeVo} from '../../../controller/model/sexe.model';

@Component({
    selector: 'app-sexe-create',
    templateUrl: './sexe-create.component.html',
    styleUrls: ['./sexe-create.component.css']
})
export class SexeCreateComponent implements OnInit {
    constructor(private sexeService: SexeService) {
    }

    get sexe(): SexeVo {
        return this.sexeService.sexe;
    }

    get sexeShowCreate(): boolean {
        return this.sexeService.sexeShowCreate;
    }

    set sexeShowCreate(value: boolean) {
        this.sexeService.sexeShowCreate = value;
    }

    ngOnInit(): void {
    }

    saveSexe() {
        this.sexeService.saveSexe();
    }

    public createHide() {
        this.sexeService.createHide();
    }
}