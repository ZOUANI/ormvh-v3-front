import {Component, OnInit} from '@angular/core';
import {CourrierServiceItemService} from '../../../controller/service/CourrierServiceItem.service';
import {CourrierServiceItemVo} from '../../../controller/model/courrierServiceItem.model';
import {CourrierVo} from '../../../controller/model/Courrier.model';
import {LeServiceVo} from '../../../controller/model/LeService.model';

@Component({
  selector: 'app-courrierServiceItem-edit',
  templateUrl: './courrierServiceItem-edit.component.html',
  styleUrls: ['./courrierServiceItem-edit.component.css']
})
export class CourrierServiceItemEditComponent implements OnInit {
  constructor(private courrierServiceItemService: CourrierServiceItemService) { }

   ngOnInit(): void {
       this.findAllcourriers();
       this.findAllservices();
    }

   get courrierServiceItem(): CourrierServiceItemVo {
    return this.courrierServiceItemService.courrierServiceItem;
  }

   get editableCourrierServiceItems(): Array<CourrierServiceItemVo> {
    return this.courrierServiceItemService.editableCourrierServiceItems;
   }

   set editableCourrierServiceItems(value: Array<CourrierServiceItemVo>) {
    this.courrierServiceItemService.editableCourrierServiceItems = value;
   }

  get courriers(): Array<CourrierVo> {
   return this.courrierServiceItemService.courriers;
  }
  get services(): Array<LeServiceVo> {
   return this.courrierServiceItemService.services;
  }

   editCourrierServiceItem() {
    this.courrierServiceItemService.editCourrierServiceItem();
  }
    findAllcourriers() {
     this.courrierServiceItemService.findAllcourriers();
    }
    findAllservices() {
     this.courrierServiceItemService.findAllservices();
    }

      findByid(identifier: string) {
       this.courrierServiceItemService.findByid(identifier);
      }

    editHide() {
      this.courrierServiceItemService.editHide();
    }
    

}