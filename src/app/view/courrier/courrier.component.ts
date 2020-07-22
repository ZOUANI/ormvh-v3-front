import { Component, OnInit } from '@angular/core';
import { CourrierService } from 'src/app/controller/service/Courrier.service';

@Component({
    selector: 'app-courrier',
    templateUrl: './courrier.component.html',
    styleUrls: ['./courrier.component.css']
})
export class CourrierComponent implements OnInit {

    constructor(private courrierService: CourrierService) {
     }

    ngOnInit(): void {
        this.courrierService.findAll();

    }

}