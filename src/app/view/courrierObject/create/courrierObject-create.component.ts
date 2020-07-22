import {Component, OnInit} from '@angular/core';
import {CourrierObjectService} from '../../../controller/service/CourrierObject.service';
import {CourrierObjectVo} from '../../../controller/model/courrierObject.model';
import {UserVo} from '../../../controller/model/User.model';

@Component({
  selector: 'app-courrierObject-create',
  templateUrl: './courrierObject-create.component.html',
  styleUrls: ['./courrierObject-create.component.css']
})
export class CourrierObjectCreateComponent implements OnInit {
  constructor(private courrierObjectService: CourrierObjectService) { }

   ngOnInit(): void {
      this.findAllcreatedBys();
      this.findAllupdatedBys();
    }

   get courrierObject(): CourrierObjectVo {
    return this.courrierObjectService.courrierObject;
  }

  get createdBys(): Array<UserVo> {
   return this.courrierObjectService.createdBys;
  }
  get updatedBys(): Array<UserVo> {
   return this.courrierObjectService.updatedBys;
  }

   saveCourrierObject() {
    this.courrierObjectService.saveCourrierObject();
  }

   findAllcreatedBys() {
     this.courrierObjectService.findAllcreatedBys();
   }
   findAllupdatedBys() {
     this.courrierObjectService.findAllupdatedBys();
   }

get courrierObjectShowCreate (): boolean  {
  return this.courrierObjectService.courrierObjectShowCreate;
}

set courrierObjectShowCreate (value: boolean ) {
  this.courrierObjectService.courrierObjectShowCreate = value ;
}
public createHide(){
       this.courrierObjectService.createHide();
}
}