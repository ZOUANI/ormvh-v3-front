import {Component, OnInit} from '@angular/core';
import {CourrierService} from '../../../controller/service/Courrier.service';
import {CourrierVo} from '../../../controller/model/courrier.model';
import {TaskVo} from '../../../controller/model/Task.model';
import {CourrierServiceItemVo} from '../../../controller/model/CourrierServiceItem.model';

@Component({
    selector: 'app-courrier-edit',
    templateUrl: './courrier-edit.component.html',
    styleUrls: ['./courrier-edit.component.css']
})
export class CourrierEditComponent implements OnInit {
    constructor(private courrierService: CourrierService) {
    }

    get courrier(): CourrierVo {
        return this.courrierService.courrier;
    }

    get editableCourriers(): Array<CourrierVo> {
        return this.courrierService.editableCourriers;
    }

    set editableCourriers(value: Array<CourrierVo>) {
        this.courrierService.editableCourriers = value;
    }

    get task(): TaskVo {
        return this.courrierService.task;
    }

    get courrierServiceItem(): CourrierServiceItemVo {
        return this.courrierService.courrierServiceItem;
    }

    ngOnInit(): void {

    }

    addTask() {
        return this.courrierService.addTask();
    }

    removeTask(i: number) {
        this.courrierService.removeTask(i);
    }

    addCourrierServiceItem() {
        return this.courrierService.addCourrierServiceItem();
    }

    removeCourrierServiceItem(i: number) {
        this.courrierService.removeCourrierServiceItem(i);
    }

    editCourrier() {
        this.courrierService.editCourrier();
    }


    findByidCourrier(ref: string) {
        this.courrierService.findByidCourrier(ref);
    }


}