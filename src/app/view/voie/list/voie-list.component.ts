import {Component, OnInit} from '@angular/core';
import {VoieVo} from '../../../controller/model/voie.model';
import {VoieService} from '../../../controller/service/Voie.service';
import {UserVo} from '../../../controller/model/User.model';

@Component({
    selector: 'app-voie-list',
    templateUrl: './voie-list.component.html',
    styleUrls: ['./voie-list.component.css']
})
export class VoielistComponent implements OnInit {

    constructor(private _voieService: VoieService) {
    }

    get createdBys(): Array<UserVo> {
        return this.voieService.createdBys;
    }

    get updatedBys(): Array<UserVo> {
        return this.voieService.updatedBys;
    }

    get voieService(): VoieService {
        return this._voieService;
    }

    set voieService(value: VoieService) {
        this._voieService = value;
    }

    get voieListe(): Array<VoieVo> {
        return this.voieService.voieListe;
    }

    set voieListe(value: Array<VoieVo>) {
        this.voieService.voieListe = value;
    }

    get voieDetail(): VoieVo {
        return this.voieService.voieDetail;
    }

    set voieDetail(value: VoieVo) {
        this.voieService.voieDetail = value;
    }

    get voieSearch(): VoieVo {
        return this.voieService.voieSearch;
    }

    set voieSearch(value: VoieVo) {
        this.voieService.voieSearch = value;
    }

    get voieShowDetail(): boolean {
        return this.voieService.voieShowDetail;
    }

    set voieShowDetail(value: boolean) {
        this.voieService.voieShowDetail = value;
    }

    get voieShowCreate(): boolean {
        return this.voieService.voieShowCreate;
    }

    set voieShowCreate(value: boolean) {
        this.voieService.voieShowCreate = value;
    }

    get voieShowEdit(): boolean {
        return this.voieService.voieShowEdit;
    }

    set voieShowEdit(value: boolean) {
        this.voieService.voieShowEdit = value;
    }

    ngOnInit(): void {
        this.findAll();
        this.findAllcreatedBys();
        this.findAllupdatedBys();
    }

    editShow(pojo: VoieVo) {
        this.voieService.editShow(pojo);

    }

    createShow() {
        this.voieService.createShow();

    }

    delete(pojo: VoieVo) {
        this.voieService.delete(pojo);
    }


    detailShow(pojo: VoieVo) {
        this.voieService.detailShow(pojo);

    }

    findVoie(pojo: VoieVo) {
        this.voieService.findVoie(pojo);

    }

    findAll() {
        this.voieService.findAll();
    }

    findAllcreatedBys() {
        this.voieService.findAllcreatedBys();
    }

    findAllupdatedBys() {
        this.voieService.findAllupdatedBys();
    }

}
