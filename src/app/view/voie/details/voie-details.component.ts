import {Component, OnInit} from '@angular/core';
import {VoieVo} from '../../../controller/model/voie.model';
import {VoieService} from '../../../controller/service/Voie.service';

@Component({
    selector: 'app-voie-details',
    templateUrl: './voie-details.component.html',
    styleUrls: ['./voie-details.component.css']
})

export class VoieDetailsComponent implements OnInit {

    constructor(private _voieService: VoieService) {
    }


    get voieService(): VoieService {
        return this._voieService;
    }

    set voieService(value: VoieService) {
        this._voieService = value;
    }

    get voieDetail(): VoieVo {
        return this.voieService.voieDetail;
    }

    set voieDetail(value: VoieVo) {
        this.voieService.voieDetail = value;
    }


    get voieShowDetail(): boolean {
        return this.voieService.voieShowDetail;
    }

    set voieShowDetail(value: boolean) {
        this.voieService.voieShowDetail = value;
    }

    ngOnInit(): void {

    }

    public detailHide() {
        this.voieService.detailHide();
    }

}