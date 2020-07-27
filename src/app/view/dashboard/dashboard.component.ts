import {Component, OnInit} from '@angular/core';
import {CourrierService} from '../../controller/service/Courrier.service';
import {SelectItem} from 'primeng/api';
import {LeServiceService} from '../../controller/service/LeService.service';

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
    leServices: SelectItem[];
    leServiceTitle: any;

    constructor(private courrierService: CourrierService, private _leServiceService: LeServiceService) {
    }

    setArrivedDepartedChart() {
        setTimeout(() => {
            this.data2 = {
                labels: ['Arrivée ' + Math.round(this.totalArrivedCourriers().valueOf() * 100 / this.totalCourriers()) + '%', 'Départ ' + Math.round(this.totalDepartCourriers().valueOf() * 100 / this.totalCourriers()) + '%'],
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
                labels: ['Ouverts ' + Math.round(this.totalOpenCourriers().valueOf() * 100 / this.totalCourriers()) + '%', 'En cours ' + Math.round(this.totalEncoursCourriers().valueOf() * 100 / this.totalCourriers()) + '%', 'Traités ' + Math.round(this.totalTraitedCourriers().valueOf() * 100 / this.totalCourriers()) + '%'],
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
    }

    ngOnInit(): void {
        this.courrierService.getStatsByDate(null, null, null);
        this.setStatusCourrierChart();
        this.setArrivedDepartedChart();
        this.findAllServices();
    }

    findAllServices() {
        this._leServiceService.findAllServices().subscribe(data => {
            this.leServices = [{label: 'none', value: null}];
            if (data != null) {
                for (const item of data) {
                    this.leServices.push({label: item.title, value: item});
                }
            }
        }, error => {
            this.leServices = [{label: 'none', value: null}];
        });
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
        if (this.rangeDates != undefined) {
            let date1 = (this.rangeDates[0] as Date);
            let date2 = (this.rangeDates[1] as Date);
            date1.setDate(date1.getDate());
            if (this.leServiceTitle == undefined) {
                if (date2 == null) {
                    this.courrierService.getStatsByDate(date1.toISOString().substring(0, 10), null, null);
                    this.setArrivedDepartedChart();
                    this.setStatusCourrierChart();
                } else {
                    date2.setDate(date2.getDate());
                    this.courrierService.getStatsByDate(date1.toISOString().substring(0, 10), date2.toISOString().substring(0, 10), null);
                    this.setArrivedDepartedChart();
                    this.setStatusCourrierChart();
                }
            } else {
                if (date2 == null) {
                    this.courrierService.getStatsByDate(date1.toISOString().substring(0, 10), null, this.leServiceTitle.title);
                    this.setArrivedDepartedChart();
                    this.setStatusCourrierChart();
                } else {
                    date2.setDate(date2.getDate());
                    this.courrierService.getStatsByDate(date1.toISOString().substring(0, 10), date2.toISOString().substring(0, 10), this.leServiceTitle.title);
                    this.setArrivedDepartedChart();
                    this.setStatusCourrierChart();
                }
            }
        } else {
            this.courrierService.getStatsByDate(null, null, this.leServiceTitle.title);
            this.setArrivedDepartedChart();
            this.setStatusCourrierChart();
        }

    }


}
