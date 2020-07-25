import {Component, OnInit} from '@angular/core';
import {VoieService} from '../../../controller/service/Voie.service';
import {VoieVo} from '../../../controller/model/voie.model';
import {UserVo} from '../../../controller/model/User.model';

@Component({
    selector: 'app-voie-create',
    templateUrl: './voie-create.component.html',
    styleUrls: ['./voie-create.component.css']
})
export class VoieCreateComponent implements OnInit {
    constructor(private voieService: VoieService) {
    }

    get voie(): VoieVo {
        return this.voieService.voie;
    }

    get createdBys(): Array<UserVo> {
        return this.voieService.createdBys;
    }

    get updatedBys(): Array<UserVo> {
        return this.voieService.updatedBys;
    }

    get voieShowCreate(): boolean {
        return this.voieService.voieShowCreate;
    }

    set voieShowCreate(value: boolean) {
        this.voieService.voieShowCreate = value;
    }

    ngOnInit(): void {
        this.findAllcreatedBys();
        this.findAllupdatedBys();
    }

    saveVoie() {
        this.voieService.saveVoie();
    }

    findAllcreatedBys() {
        this.voieService.findAllcreatedBys();
    }

    findAllupdatedBys() {
        this.voieService.findAllupdatedBys();
    }

    public createHide() {
        this.voieService.createHide();
    }
}