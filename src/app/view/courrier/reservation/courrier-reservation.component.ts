import {Component} from '@angular/core';
import {CourrierService} from "../../../controller/service/Courrier.service";

@Component({
    templateUrl: './courrier-reservation.component.html',
    selector: 'app-courrier-reservation'
})
export class CourrierReservationComponent {

    nbr: number

    constructor(protected courrierService: CourrierService) {
    }

    get generatedId() {
        return this.courrierService.generatedId2;
    }

    set generatedId(value: string) {
        this.courrierService.generatedId2 = value;
    }

    get reserveCourier() {
        return this.courrierService.reserveCourier;
    }

    get reservationShow(): boolean {
        return this.courrierService.reservationShow;
    }

    set reservationShow(value: boolean) {
        this.courrierService.reservationShow = value;
    }

    public reservationHide() {
        this.courrierService.reservationHide();
    }

    generateId(): void {
        this.courrierService.generateIdReserve();

    }

    reserve(): void {
        this.reserveCourier.idCourrier = this.generatedId
        this.courrierService.reserve(this.reserveCourier.idCourrier, this.nbr)
        this.courrierService.reservationShow = false
        this.generatedId = ''


    }
}
