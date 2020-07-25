import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CourrierVo} from '../../../controller/model/courrier.model';
import {CourrierService} from '../../../controller/service/Courrier.service';

@Component({
    selector: 'app-courrier-list',
    templateUrl: './courrier-list.component.html',
    styleUrls: ['./courrier-list.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class CourrierlistComponent implements OnInit {

    constructor(private _courrierService: CourrierService) {
    }

    get addNewCourrier(): boolean {
        return this.courrierService.addNewCourrier;
    }

    set addNewCourrier(value: boolean) {
        this.courrierService.addNewCourrier = value;
    }

    get courrierService(): CourrierService {
        return this._courrierService;
    }

    set courrierService(value: CourrierService) {
        this._courrierService = value;
    }

    get courrierListe(): Array<CourrierVo> {
        return this.courrierService.courrierListe;
    }

    set courrierListe(value: Array<CourrierVo>) {
        this.courrierService.courrierListe = value;
    }

    get courrierDetail(): CourrierVo {
        return this.courrierService.courrierDetail;
    }

    set courrierDetail(value: CourrierVo) {
        this.courrierService.courrierDetail = value;
    }

    get courrierSearch(): CourrierVo {
        return this.courrierService.courrierSearch;
    }

    set courrierSearch(value: CourrierVo) {
        this.courrierService.courrierSearch = value;
    }

    get courrierShowDetail(): boolean {
        return this.courrierService.courrierShowDetail;
    }

    set courrierShowDetail(value: boolean) {
        this.courrierService.courrierShowDetail = value;
    }

    get reservationShow(): boolean {
        return this.courrierService.reservationShow;
    }

    set reservationShow(value: boolean) {
        this.courrierService.reservationShow = value;
    }

    ngOnInit(): void {

    }

    showNewCorrierDialog() {
        this.courrierService.addNewCourrier = true;

    }

    delete(pojo: CourrierVo) {
        this.courrierService.delete(pojo);
    }

    detailShow(pojo: CourrierVo) {
        this.courrierService.detailShow(pojo);

    }

    findCourrier(pojo: CourrierVo) {
        this.courrierService.findCourrier(pojo);

    }

    showReservation() {
        this.courrierService.showReservation();
    }

}
