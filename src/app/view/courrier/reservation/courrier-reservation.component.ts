import {Component} from '@angular/core';
import {CourrierService} from "../../../controller/service/Courrier.service";
import {CourrierVo} from "../../../controller/model/Courrier.model";
import {StatusVo} from "../../../controller/model/Status.model";
import {StatusService} from "../../../controller/service/Status.service";
import {TaskVo} from "../../../controller/model/Task.model";

@Component({
    templateUrl: './courrier-reservation.component.html',
    selector: 'app-courrier-reservation'
})
export class CourrierReservationComponent {

    nbr: number
    descriptionCourrier:string;
    statuss: StatusVo[];


    constructor(protected courrierService: CourrierService,private statusService: StatusService) {
    }

    get courrier(): CourrierVo {
        return this.courrierService.courrier;
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
        this.reserveCourier.idCourrier = this.generatedId;
        this.reserveCourier.description=this.descriptionCourrier;
        this.reserveCourier.statusVo=this.courrier.statusVo;
        this.courrierService.reserve(this.reserveCourier.idCourrier, this.nbr,this.reserveCourier.description);
        this.courrierService.reservationShow = false
        this.generatedId = ''


    }
    get task(): TaskVo {
        return this.courrierService.task;
    }
    findAllstatuss() {
        this.statusService.findAllstatuss().subscribe(data => {
            if (data != null) {
                this.statuss = data;
                this.courrier.statusVo = this.statuss[3];
                this.task.statusVo = this.statuss[0];
            }
        }, error => {
            console.log(error);
        });
    }

    ngOnInit(): void {
        this.findAllstatuss();
    }
}
