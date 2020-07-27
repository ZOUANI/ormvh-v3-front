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

    reset() {
        this.ngOnInit();
        /* setTimeout(() => {
             console.log(this.courrierService.arrivedCourriers);
         }, 700);*/

    }

    ngOnInit(): void {
        this.courrierService.countAll();
        this.courrierService.findNumberArrivedCourriers();
        this.courrierService.findNumberDepartCourriers();
        this.courrierService.findNumberEncoursCourriers();
        this.courrierService.findNumberTraitedCourriers();
        this.courrierService.findNumberOpenCourriers();
        this.courrierService.findNumberAccusedCourriers();
        this.courrierService.findNumberResponedCourriers();
        this.setStatusCourrierChart();
        this.setArrivedDepartedChart();
    }

    totalCourriers() {
        return this.courrierService.nbrOfAll;
    }

    totalDepartCourriers() {
        return this.courrierService.nbrOfDeparted;
    }

    totalArrivedCourriers() {
        return this.courrierService.nbrOfArived;
    }

    totalOpenCourriers() {
        return this.courrierService.nbrOfOpen;
    }

    totalEncoursCourriers() {
        return this.courrierService.nbrOfEnCours;
    }

    totalTraitedCourriers() {
        return this.courrierService.nbrOfTraited;
    }

    totalAccusedCourriers() {
        return this.courrierService.nbrOfAccused;
    }

    totalResponseCourriers() {
        return this.courrierService.nbrOfResponed;
    }

    filterCourriers() {
        let date1 = (this.rangeDates[0] as Date);
        let date2 = (this.rangeDates[1] as Date);
        date1.setDate(date1.getDate() + 1);
        //console.log(date1.toISOString().substring(0, 10));
        console.log(date2);
        console.log(date1.toISOString().substring(0, 10));
        if (date2 == null) {
            this.courrierService.countByDate(date1.toISOString().substring(0, 10));
            this.courrierService.countArrivedCourriersByDate(date1.toISOString().substring(0, 10));
            this.courrierService.countDepartCourriersByDate(date1.toISOString().substring(0, 10));
            this.courrierService.countEnCoursCourriersByDate(date1.toISOString().substring(0, 10));
            this.courrierService.countTraitedCourriersByDate(date1.toISOString().substring(0, 10));
            this.courrierService.countOpenCourriersByDate(date1.toISOString().substring(0, 10));
            this.courrierService.countAccusedCourriersByDate(date1.toISOString().substring(0, 10));
            this.courrierService.countResponseCourriersByDate(date1.toISOString().substring(0, 10));
            this.setArrivedDepartedChart();
            this.setStatusCourrierChart();
        } else {
            date2.setDate(date2.getDate() + 1);
            this.courrierService.countByTwoDates(date1.toISOString().substring(0, 10), date2.toISOString().substring(0, 10));
            this.courrierService.countArrivedCourriersByTwoDate(date1.toISOString().substring(0, 10), date2.toISOString().substring(0, 10));
            this.courrierService.countDepartCourriersByTwoDate(date1.toISOString().substring(0, 10), date2.toISOString().substring(0, 10));
            this.courrierService.countEnCoursCourriersByTwoDate(date1.toISOString().substring(0, 10), date2.toISOString().substring(0, 10));
            this.courrierService.countTraitedCourriersByTwoDate(date1.toISOString().substring(0, 10), date2.toISOString().substring(0, 10));
            this.courrierService.countOpenCourriersByTwoDate(date1.toISOString().substring(0, 10), date2.toISOString().substring(0, 10));
            this.courrierService.countAccusedCourriersByTwoDates(date1.toISOString().substring(0, 10), date2.toISOString().substring(0, 10));
            this.courrierService.countResponseCourriersByTwoDates(date1.toISOString().substring(0, 10), date2.toISOString().substring(0, 10));
            this.setArrivedDepartedChart();
            this.setStatusCourrierChart();
        }
    }


}
