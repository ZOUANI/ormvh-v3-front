import {Component, OnInit} from '@angular/core';
import {ExpeditorTypeService} from '../../../controller/service/ExpeditorType.service';
import {ExpeditorTypeVo} from '../../../controller/model/expeditorType.model';
import {UserVo} from '../../../controller/model/User.model';

@Component({
  selector: 'app-expeditorType-create',
  templateUrl: './expeditorType-create.component.html',
  styleUrls: ['./expeditorType-create.component.css']
})
export class ExpeditorTypeCreateComponent implements OnInit {
  constructor(private expeditorTypeService: ExpeditorTypeService) { }

   ngOnInit(): void {
      this.findAllcreatedBys();
      this.findAllupdatedBys();
    }

   get expeditorType(): ExpeditorTypeVo {
    return this.expeditorTypeService.expeditorType;
  }

  get createdBys(): Array<UserVo> {
   return this.expeditorTypeService.createdBys;
  }
  get updatedBys(): Array<UserVo> {
   return this.expeditorTypeService.updatedBys;
  }

   saveExpeditorType() {
    this.expeditorTypeService.saveExpeditorType();
  }

   findAllcreatedBys() {
     this.expeditorTypeService.findAllcreatedBys();
   }
   findAllupdatedBys() {
     this.expeditorTypeService.findAllupdatedBys();
   }

get expeditorTypeShowCreate (): boolean  {
  return this.expeditorTypeService.expeditorTypeShowCreate;
}

set expeditorTypeShowCreate (value: boolean ) {
  this.expeditorTypeService.expeditorTypeShowCreate = value ;
}
public createHide(){
       this.expeditorTypeService.createHide();
}
}