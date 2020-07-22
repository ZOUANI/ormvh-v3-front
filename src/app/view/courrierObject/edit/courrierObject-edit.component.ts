import {Component, OnInit} from '@angular/core';
import {CourrierObjectService} from '../../../controller/service/CourrierObject.service';
import {CourrierObjectVo} from '../../../controller/model/courrierObject.model';
import {UserVo} from '../../../controller/model/User.model';

@Component({
  selector: 'app-courrierObject-edit',
  templateUrl: './courrierObject-edit.component.html',
  styleUrls: ['./courrierObject-edit.component.css']
})
export class CourrierObjectEditComponent implements OnInit {
  constructor(private courrierObjectService: CourrierObjectService) { }

   ngOnInit(): void {
       this.findAllcreatedBys();
       this.findAllupdatedBys();
    }

   get courrierObject(): CourrierObjectVo {
    return this.courrierObjectService.courrierObject;
  }

   get editableCourrierObjects(): Array<CourrierObjectVo> {
    return this.courrierObjectService.editableCourrierObjects;
   }

   set editableCourrierObjects(value: Array<CourrierObjectVo>) {
    this.courrierObjectService.editableCourrierObjects = value;
   }

  get createdBys(): Array<UserVo> {
   return this.courrierObjectService.createdBys;
  }
  get updatedBys(): Array<UserVo> {
   return this.courrierObjectService.updatedBys;
  }

   editCourrierObject() {
    this.courrierObjectService.editCourrierObject();
  }
    findAllcreatedBys() {
     this.courrierObjectService.findAllcreatedBys();
    }
    findAllupdatedBys() {
     this.courrierObjectService.findAllupdatedBys();
    }

     findBytitle(ref: string) {
      this.courrierObjectService.findBytitle(ref);
     }

    editHide() {
      this.courrierObjectService.editHide();
    }
    

}