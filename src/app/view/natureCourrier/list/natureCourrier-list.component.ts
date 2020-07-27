import {Component, OnInit} from '@angular/core';
import {NatureCourrierVo} from '../../../controller/model/natureCourrier.model';
import {NatureCourrierService} from '../../../controller/service/NatureCourrier.service';
import {UserVo} from '../../../controller/model/User.model';

@Component({
    selector: 'app-natureCourrier-list',
    templateUrl: './natureCourrier-list.component.html',
    styleUrls: ['./natureCourrier-list.component.css']
})
export class NatureCourrierlistComponent implements OnInit {

    constructor(private _natureCourrierService: NatureCourrierService) {
    }

    get createdBys(): Array<UserVo> {
        return this.natureCourrierService.createdBys;
    }

    get updatedBys(): Array<UserVo> {
        return this.natureCourrierService.updatedBys;
    }

    get natureCourrierService(): NatureCourrierService {
        return this._natureCourrierService;
    }

    set natureCourrierService(value: NatureCourrierService) {
        this._natureCourrierService = value;
    }

    get natureCourrierListe(): Array<NatureCourrierVo> {
        return this.natureCourrierService.natureCourrierListe;
    }

    set natureCourrierListe(value: Array<NatureCourrierVo>) {
        this.natureCourrierService.natureCourrierListe = value;
    }

    get natureCourrierDetail(): NatureCourrierVo {
        return this.natureCourrierService.natureCourrierDetail;
    }

    set natureCourrierDetail(value: NatureCourrierVo) {
        this.natureCourrierService.natureCourrierDetail = value;
    }

    get natureCourrierSearch(): NatureCourrierVo {
        return this.natureCourrierService.natureCourrierSearch;
    }

    set natureCourrierSearch(value: NatureCourrierVo) {
        this.natureCourrierService.natureCourrierSearch = value;
    }

    get natureCourrierShowDetail(): boolean {
        return this.natureCourrierService.natureCourrierShowDetail;
    }

    set natureCourrierShowDetail(value: boolean) {
        this.natureCourrierService.natureCourrierShowDetail = value;
    }

    ngOnInit(): void {
        this.findAll();
        this.findAllcreatedBys();
        this.findAllupdatedBys();
    }

    delete(pojo: NatureCourrierVo) {
        this.natureCourrierService.delete(pojo);
    }


    detailShow(pojo: NatureCourrierVo) {
        this.natureCourrierService.detailShow(pojo);

    }

    findNatureCourrier(pojo: NatureCourrierVo) {
        this.natureCourrierService.findNatureCourrier(pojo);

    }

    findAll() {
        this.natureCourrierService.findAll();
    }

    findAllcreatedBys() {
        this.natureCourrierService.findAllcreatedBys();
    }

    findAllupdatedBys() {
        this.natureCourrierService.findAllupdatedBys();
    }

}
