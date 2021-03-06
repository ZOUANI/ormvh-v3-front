import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DatePipe} from '@angular/common'

import {CourrierVo} from 'src/app/controller/model/Courrier.model';
import {TypeCourrierService} from 'src/app/controller/service/TypeCourrier.service';
import {CourrierService} from 'src/app/controller/service/Courrier.service';
import {TypeCourrierVo} from 'src/app/controller/model/TypeCourrier.model';

@Component({
    selector: 'app-courrier-redirection',
    templateUrl: './courrier-redirection.component.html',
    styleUrls: ['./courrier-redirection.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class CourrierRedirectionComponent implements OnInit {


    constructor(private courrierService: CourrierService, private typeCourrierService: TypeCourrierService, private datepipe: DatePipe) {

    }

    courrierCriteria: CourrierVo = new CourrierVo();
    typeCourrierOption: TypeCourrierVo[];
    courrierSelected: CourrierVo[] = [];
    currentDate: Date = new Date();
    date: Date = new Date();
    subject: string;
    email: string;
    showEmailDialog: boolean = false;
    selectAllBolean: boolean = false;

    ngOnInit(): void {

        this.courriersService = new Map<string, Array<CourrierVo>>();

        //     let courrierrs:CourrierVo[] = new Array<CourrierVo>();

        //           let courrier = new CourrierVo();
        //     courrier.subject = "lorem 1 lorem lorema ldjsnnzc ajda da";
        //     courrier.id = '1';
        //     courrier.idCourrier ="0001-2020";
        //     courrier.dateRelance = "27/07/2020";
        //     courrier.statusVo = new StatusVo();
        //     courrier.statusVo.libelle = "Ouvert";
        //     courrierrs.push(courrier);
        //     courrier = new CourrierVo();
        //     courrier.subject = "lorem 2 lorem lorema ldjsnnzc ajda da";
        //     courrier.id = '2';
        //     courrier.idCourrier ="0002-2020";
        //     courrier.dateRelance = "27/07/2020";
        //     courrier.statusVo = new StatusVo();
        //     courrier.statusVo.libelle = "Ouvert";
        //     courrierrs.push(courrier);
        //     courrier = new CourrierVo();
        //     courrier.subject = "lorem 3 lorem lorema ldjsnnzc ajda da";
        //     courrier.id = '3';
        //     courrier.idCourrier ="0003-2020";
        //     courrier.dateRelance = "27/07/2020";
        //     courrier.statusVo = new StatusVo();
        //     courrier.statusVo.libelle = "Ouvert";
        //     courrierrs.push(courrier);
        //     courrier = new CourrierVo();

        //     let service = new LeServiceVo();
        //     service.title = "service 1"
        //    this.courriersService.set(service,courrierrs);

        //    courrierrs = new Array<CourrierVo>();

        //    courrier.subject = "lorem 4 lorem lorema ldjsnnzc ajda da";
        //    courrier.id = '4';
        //    courrier.idCourrier ="0004-2020";
        //    courrier.dateRelance = "27/07/2020";
        //    courrier.statusVo = new StatusVo();
        //    courrier.statusVo.libelle = "Ouvert";
        //    courrierrs.push(courrier);
        //    courrier = new CourrierVo();
        //    courrier.subject = "lorem 5 lorem lorema ldjsnnzc ajda da";
        //    courrier.id = '5';
        //    courrier.idCourrier ="0005-2020";
        //    courrier.dateRelance = "27/07/2020";
        //    courrier.statusVo = new StatusVo();
        //    courrier.statusVo.libelle = "Ouvert";
        //    courrierrs.push(courrier);
        //    courrier = new CourrierVo();
        //    courrier.subject = "lorem 6 lorem lorema ldjsnnzc ajda da";
        //    courrier.id = '6';
        //    courrier.idCourrier ="0006-2020";
        //    courrier.dateRelance = "27/07/2020";
        //    courrier.statusVo = new StatusVo();
        //    courrier.statusVo.libelle = "Ouvert";
        //    courrierrs.push(courrier);
        //     service = new LeServiceVo();
        //     service.title = "service 2"
        //    this.courriersService.set(service,courrierrs);

        this.findTypeCourrier();

    }

    selectAll() {
        for (let courriers of this.courriersService.values()) {
            for (let courrier of courriers) {
                if (!this.courrierSelected.includes(courrier)) {
                    this.courrierSelected.push(courrier);
                }
            }
        }
    }

    selectOrDeslect(courrier: CourrierVo) {
        let index = this.courrierSelected.indexOf(courrier);
        if (index < 0) {
            this.courrierSelected.push(courrier);
        } else {
            this.courrierSelected.splice(index, 1);
        }

    }

    exist(courrier: CourrierVo): boolean {
        for (let item of this.courrierSelected) {
            if (item.idCourrier == courrier.idCourrier) {
                return true;
            }
        }
        return false;
    }

    selectAllService(service: string) {

        if (!this.isAllServiceSelected(service)) {
            for (const courrier of this.courriersService.get(service)) {
                if (!this.exist(courrier))
                    this.courrierSelected.push(courrier);
            }
        }
    }

    isAllServiceSelected(service: string): boolean {
        for (const courrier of this.courriersService.get(service)) {
            if (!this.exist(courrier))
                return false;
        }
        return true;
    }

    deselectAllService(service: string) {
        for (const courrier of this.courriersService.get(service)) {
            let index = this.courrierSelected.indexOf(courrier);
            this.courrierSelected.splice(index, 1);
        }
    }

    allSelected(): boolean {
        if (!this.courriersService || this.courriersService.size == 0)
            return false;
        for (let courriers of this.courriersService.values()) {
            for (let courrier of courriers) {
                if (!this.courrierSelected.includes(courrier)) {
                    return false;
                }
            }
        }
        return true;
    }

    selectOrDeselectAll() {
        if (!this.allSelected())
            this.selectAll();
        else {
            this.courrierSelected = new Array<CourrierVo>();
        }


        //  if(this.selectAllBolean){
        //         this.courrierSelected = new Array<CourrierVo>();
        //         this.selectAllBolean = false;
        //  }else{
        //     console.log(this.selectAllBolean);

        //      this.selectAll();
        //      this.selectAllBolean = true;
        //  }
    }

    get courriersService(): Map<string, Array<CourrierVo>> {
        return this.courrierService.courriersService;
    }

    set courriersService(value: Map<string, Array<CourrierVo>>) {
        this.courrierService.courriersService = value;
    }


    sendEmail() {
        console.log(this.courrierSelected);
        this.courrierService.sendListCourriers(this.courrierSelected);
    }

    findTypeCourrier() {
        this.typeCourrierService.findAlltypeCourriers().subscribe(data => {
            this.typeCourrierOption = data;
            this.courrierCriteria.typeCourrierVo = this.typeCourrierOption[0];
            //    this.courrierCriteria.dateRelance = this.datepipe.transform(this.date, 'yyyy-MM-dd');
            this.courrierService.findCourrierByRelance(this.courrierCriteria);
        });
    }

    findCourriers() {
        // this.courrierCriteria.dateRelance = this.datepipe.transform(this.date, 'yyyy-MM-dd');
        this.courrierService.findCourrierByRelance(this.courrierCriteria)
    }
}
