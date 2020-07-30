import {Component, OnInit} from '@angular/core';
import {SubdivisionVo} from '../../../controller/model/subdivision.model';
import {SubdivisionService} from '../../../controller/service/Subdivision.service';

@Component({
    selector: 'app-subdivision-details',
    templateUrl: './subdivision-details.component.html',
    styleUrls: ['./subdivision-details.component.css']
})

export class SubdivisionDetailsComponent implements OnInit {

    constructor(private _subdivisionService: SubdivisionService) {
    }


    get subdivisionService(): SubdivisionService {
        return this._subdivisionService;
    }

    set subdivisionService(value: SubdivisionService) {
        this._subdivisionService = value;
    }

    get subdivisionDetail(): SubdivisionVo {
        return this.subdivisionService.subdivisionDetail;
    }

    set subdivisionDetail(value: SubdivisionVo) {
        this.subdivisionService.subdivisionDetail = value;
    }


    get subdivisionShowDetail(): boolean {
        return this.subdivisionService.subdivisionShowDetail;
    }

    set subdivisionShowDetail(value: boolean) {
        this.subdivisionService.subdivisionShowDetail = value;
    }

    ngOnInit(): void {

    }

    public detailHide() {
        this.subdivisionService.detailHide();
    }

}