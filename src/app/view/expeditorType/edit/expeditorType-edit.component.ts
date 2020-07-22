import {Component, OnInit} from '@angular/core';
import {ExpeditorTypeService} from '../../../controller/service/ExpeditorType.service';
import {ExpeditorTypeVo} from '../../../controller/model/expeditorType.model';
import {UserVo} from '../../../controller/model/User.model';

@Component({
  selector: 'app-expeditorType-edit',
  templateUrl: './expeditorType-edit.component.html',
  styleUrls: ['./expeditorType-edit.component.css']
})
export class ExpeditorTypeEditComponent implements OnInit {
  constructor(private expeditorTypeService: ExpeditorTypeService) { }

   ngOnInit(): void {
       this.findAllcreatedBys();
       this.findAllupdatedBys();
    }

   get expeditorType(): ExpeditorTypeVo {
    return this.expeditorTypeService.expeditorType;
  }

   get editableExpeditorTypes(): Array<ExpeditorTypeVo> {
    return this.expeditorTypeService.editableExpeditorTypes;
   }

   set editableExpeditorTypes(value: Array<ExpeditorTypeVo>) {
    this.expeditorTypeService.editableExpeditorTypes = value;
   }

  get createdBys(): Array<UserVo> {
   return this.expeditorTypeService.createdBys;
  }
  get updatedBys(): Array<UserVo> {
   return this.expeditorTypeService.updatedBys;
  }

   editExpeditorType() {
    this.expeditorTypeService.editExpeditorType();
  }
    findAllcreatedBys() {
     this.expeditorTypeService.findAllcreatedBys();
    }
    findAllupdatedBys() {
     this.expeditorTypeService.findAllupdatedBys();
    }

     findBytitle(ref: string) {
      this.expeditorTypeService.findBytitle(ref);
     }

    editHide() {
      this.expeditorTypeService.editHide();
    }
    

}