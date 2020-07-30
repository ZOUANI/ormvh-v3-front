import {Component, OnInit} from '@angular/core';
import {TaskVo} from '../../../controller/model/task.model';
import {TaskService} from '../../../controller/service/Task.service';
import {UserVo} from '../../../controller/model/User.model';
import {StatusVo} from '../../../controller/model/Status.model';
import {CourrierVo} from '../../../controller/model/Courrier.model';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TasklistComponent implements OnInit {

    constructor(private _taskService: TaskService) {
    }

    get updatedBys(): Array<UserVo> {
        return this.taskService.updatedBys;
    }

    get courriers(): Array<CourrierVo> {
        return this.taskService.courriers;
    }

    get assignes(): Array<UserVo> {
        return this.taskService.assignes;
    }

    get createdBys(): Array<UserVo> {
        return this.taskService.createdBys;
    }

    get statuss(): Array<StatusVo> {
        return this.taskService.statuss;
    }

    get taskService(): TaskService {
        return this._taskService;
    }

    set taskService(value: TaskService) {
        this._taskService = value;
    }

    get taskListe(): Array<TaskVo> {
        return this.taskService.taskListe;
    }

    set taskListe(value: Array<TaskVo>) {
        this.taskService.taskListe = value;
    }

    get taskDetail(): TaskVo {
        return this.taskService.taskDetail;
    }

    set taskDetail(value: TaskVo) {
        this.taskService.taskDetail = value;
    }

    get taskSearch(): TaskVo {
        return this.taskService.taskSearch;
    }

    set taskSearch(value: TaskVo) {
        this.taskService.taskSearch = value;
    }

    get taskShowDetail(): boolean {
        return this.taskService.taskShowDetail;
    }

    set taskShowDetail(value: boolean) {
        this.taskService.taskShowDetail = value;
    }

    ngOnInit(): void {
        this.findAll();
        this.findAllupdatedBys();
        this.findAllcourriers();
        this.findAllassignes();
        this.findAllcreatedBys();
        this.findAllstatuss();
    }

    delete(pojo: TaskVo) {
        this.taskService.delete(pojo);
    }


    detailShow(pojo: TaskVo) {
        this.taskService.detailShow(pojo);

    }

    findTask(pojo: TaskVo) {
        this.taskService.findTask(pojo);

    }

    findAll() {
        this.taskService.findAll();
    }

    findAllupdatedBys() {
        this.taskService.findAllupdatedBys();
    }

    findAllcourriers() {
        this.taskService.findAllcourriers();
    }

    findAllassignes() {
        this.taskService.findAllassignes();
    }

    findAllcreatedBys() {
        this.taskService.findAllcreatedBys();
    }

    findAllstatuss() {
        this.taskService.findAllstatuss();
    }

}
