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
    rangeDates: any;
    tmpData = false;
    tmpData1 = false;

    constructor(private courrierService: CourrierService) {
    }

    setArrivedDepartedChart() {
        setTimeout(() => {
            this.data2 = {
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
            };
            if (this.totalArrivedCourriers().valueOf() == 0 && this.totalDepartCourriers().valueOf() == 0) {
                this.tmpData = true;
            } else {
                this.tmpData = false;
            }
        }, 700);

    }

    setStatusCourrierChart() {
        setTimeout(() => {
            this.data1 = {
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
            };
            if (this.totalOpenCourriers().valueOf() == 0 && this.totalEncoursCourriers().valueOf() == 0 && this.totalTraitedCourriers().valueOf() == 0) {
                this.tmpData1 = true;
            } else {
                this.tmpData1 = false;
            }
        }, 700);
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
        this.setStatusCourrierChart();
        this.setArrivedDepartedChart();
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

    filterCourriers() {
        let date1 = (this.rangeDates[0] as Date);
        let date2 = (this.rangeDates[1] as Date);
        date1.setDate(date1.getDate() + 1);
        //console.log(date1.toISOString().substring(0, 10));
        console.log(date2);
        console.log(date1.toISOString().substring(0, 10));
        if (date2 == null) {
            this.courrierService.findByDate(date1.toISOString().substring(0, 10));
            this.courrierService.findAllArrivedCourriersByDate(date1.toISOString().substring(0, 10));
            this.courrierService.findAllDepartCourriersByDate(date1.toISOString().substring(0, 10));
            this.courrierService.findAllEnCoursCourriersByDate(date1.toISOString().substring(0, 10));
            this.courrierService.findAllTraitedCourriersByDate(date1.toISOString().substring(0, 10));
            this.courrierService.findAllOpenCourriersByDate(date1.toISOString().substring(0, 10));
            this.courrierService.findAllAccusedCourriersByDate(date1.toISOString().substring(0, 10));
            this.courrierService.findAllResponseCourriersByDate(date1.toISOString().substring(0, 10));
            this.setArrivedDepartedChart();
            this.setStatusCourrierChart();
        } else {
            date2.setDate(date2.getDate() + 1);
            this.courrierService.findByTwoDates(date1.toISOString().substring(0, 10), date2.toISOString().substring(0, 10));
            this.courrierService.findAllArrivedCourriersByTwoDate(date1.toISOString().substring(0, 10), date2.toISOString().substring(0, 10));
            this.courrierService.findAllDepartCourriersByTwoDate(date1.toISOString().substring(0, 10), date2.toISOString().substring(0, 10));
            this.courrierService.findAllEnCoursCourriersByTwoDate(date1.toISOString().substring(0, 10), date2.toISOString().substring(0, 10));
            this.courrierService.findAllTraitedCourriersByTwoDate(date1.toISOString().substring(0, 10), date2.toISOString().substring(0, 10));
            this.courrierService.findAllOpenCourriersByTwoDate(date1.toISOString().substring(0, 10), date2.toISOString().substring(0, 10));
            this.courrierService.findAllAccusedCourriersByTwoDates(date1.toISOString().substring(0, 10), date2.toISOString().substring(0, 10));
            this.courrierService.findAllResponseCourriersByTwoDates(date1.toISOString().substring(0, 10), date2.toISOString().substring(0, 10));
            this.setArrivedDepartedChart();
            this.setStatusCourrierChart();
        }
    }


}
