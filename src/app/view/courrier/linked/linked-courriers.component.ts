import { Component, OnInit ,ViewEncapsulation} from '@angular/core';

import { CourrierService } from 'src/app/controller/service/Courrier.service';
import { CourrierVo } from 'src/app/controller/model/Courrier.model';

@Component({
  selector: 'app-courrier-linked',
  templateUrl: './linked-courriers.component.html',
  styleUrls: ['./linked-courriers.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class LinkedCourriersComponent implements OnInit {
 
  constructor(protected courrierService: CourrierService) {}

  ngOnInit(): void {
  
  }
  detail(courrier:CourrierVo){
   this.courrierService.detail(courrier);
  }
  get showLinkedCourrier():boolean{
    return this.courrierService.showLinkedCourrier;
  }
  set showLinkedCourrier(value:boolean){
    this.courrierService.showLinkedCourrier = value;
  }
  get courrier() :CourrierVo{
    return this.courrierService.linkedToThisCourrier;
  } 

  get courriers() :CourrierVo[]{
    return this.courrierService.linkedCourrier;
  }
  
 
}
