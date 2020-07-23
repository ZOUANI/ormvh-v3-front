import {Component, OnInit} from '@angular/core';
import {CourrierService} from '../../controller/service/Courrier.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


    data1: any;
    data2: any;

    constructor(private courrierService: CourrierService) {
        setTimeout(() => this.data1 = {
            labels: ['Ouverts ' + this.totalOpenCourriers().valueOf() * 100 / this.totalCourriers() + '%', 'En cours ' + this.totalEncoursCourriers().valueOf() * 100 / this.totalCourriers() + '%', 'Traités ' + this.totalTraitedCourriers().valueOf() * 100 / this.totalCourriers() + '%'],
            datasets: [
                {
                    data: [this.totalOpenCourriers().valueOf(), this.totalEncoursCourriers().valueOf(), this.totalTraitedCourriers().valueOf()],
                    backgroundColor: [
                        '#a81934',
                        '#36A2EB',
                        'rgb(90, 164, 84)'
                    ],
                    hoverBackgroundColor: [
                        '#a81934',
                        '#36A2EB',
                        'rgb(90, 164, 84)'
                    ]
                }]
        }, 500);
        setTimeout(() => this.data2 = {
            labels: ['Arrivée ' + this.totalArrivedCourriers().valueOf() * 100 / this.totalCourriers() + '%', 'Départ ' + this.totalDepartCourriers().valueOf() * 100 / this.totalCourriers() + '%'],
            datasets: [
                {
                    data: [this.totalArrivedCourriers().valueOf(), this.totalDepartCourriers().valueOf()],
                    backgroundColor: [
                        '#a81934',
                        '#36A2EB'
                    ],
                    hoverBackgroundColor: [
                        '#a81934',
                        '#36A2EB'
                    ]
                }]
        }, 500);


    }

    ngOnInit(): void {
        this.courrierService.findAll();
        this.courrierService.findAllArrivedCourriers();
        this.courrierService.findAllDepartCourriers();
        this.courrierService.findAllEnCoursCourriers();
        this.courrierService.findAllTraitedCourriers();
        this.courrierService.findAllOpenCourriers();
        this.courrierService.findAllAccusedCourriers();
        this.courrierService.findAllResponseCourriers();
    }

    totalCourriers() {
        return this.courrierService.courrierListe.length;
    }

    totalDepartCourriers() {
        return this.courrierService.departCourriers.length;
    }

    totalArrivedCourriers() {
        return this.courrierService.arrivedCourriers.length;
    }

    totalOpenCourriers() {
        return this.courrierService.ouvertCourriers.length;
    }

    totalEncoursCourriers() {
        return this.courrierService.enCoursCourriers.length;
    }

    totalTraitedCourriers() {
        return this.courrierService.traitedCourriers.length;
    }

    totalAccusedCourriers() {
        return this.courrierService.accusedCourriers.length;
    }

    totalResponseCourriers() {
        return this.courrierService.responseCourriers.length;
    }


}
