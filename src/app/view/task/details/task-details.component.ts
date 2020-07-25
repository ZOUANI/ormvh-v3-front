import {Component, OnInit} from '@angular/core';
import {TaskVo} from '../../../controller/model/task.model';
import {TaskService} from '../../../controller/service/Task.service';

@Component({
    selector: 'app-task-details',
    templateUrl: './task-details.component.html',
    styleUrls: ['./task-details.component.css']
})

export class TaskDetailsComponent implements OnInit {

    constructor(private _taskService: TaskService) {
    }


    get taskService(): TaskService {
        return this._taskService;
    }

    set taskService(value: TaskService) {
        this._taskService = value;
    }

    get taskDetail(): TaskVo {
        return this.taskService.taskDetail;
    }

    set taskDetail(value: TaskVo) {
        this.taskService.taskDetail = value;
    }


    get taskShowDetail(): boolean {
        return this.taskService.taskShowDetail;
    }

    set taskShowDetail(value: boolean) {
        this.taskService.taskShowDetail = value;
    }

    ngOnInit(): void {

    }

    public detailHide() {
        this.taskService.detailHide();
    }

}