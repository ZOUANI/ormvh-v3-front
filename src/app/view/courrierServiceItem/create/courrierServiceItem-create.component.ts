import {Component, OnInit} from '@angular/core';
import {CourrierServiceItemService} from '../../../controller/service/CourrierServiceItem.service';
import {CourrierServiceItemVo} from '../../../controller/model/courrierServiceItem.model';
import {CourrierVo} from '../../../controller/model/Courrier.model';
import {LeServiceVo} from '../../../controller/model/LeService.model';

@Component({
  selector: 'app-courrierServiceItem-create',
  templateUrl: './courrierServiceItem-create.component.html',
  styleUrls: ['./courrierServiceItem-create.component.css']
})
export class CourrierServiceItemCreateComponent implements OnInit {
  constructor(private courrierServiceItemService: CourrierServiceItemService) { }

   ngOnInit(): void {
      this.findAllcourriers();
      this.findAllservices();
    }

   get courrierServiceItem(): CourrierServiceItemVo {
    return this.courrierServiceItemService.courrierServiceItem;
  }

  get courriers(): Array<CourrierVo> {
   return this.courrierServiceItemService.courriers;
  }
  get services(): Array<LeServiceVo> {
   return this.courrierServiceItemService.services;
  }

   saveCourrierServiceItem() {
    this.courrierServiceItemService.saveCourrierServiceItem();
  }

   findAllcourriers() {
     this.courrierServiceItemService.findAllcourriers();
   }
   findAllservices() {
     this.courrierServiceItemService.findAllservices();
   }

get courrierServiceItemShowCreate (): boolean  {
  return this.courrierServiceItemService.courrierServiceItemShowCreate;
}

set courrierServiceItemShowCreate (value: boolean ) {
  this.courrierServiceItemService.courrierServiceItemShowCreate = value ;
}
public createHide(){
       this.courrierServiceItemService.createHide();
}
}