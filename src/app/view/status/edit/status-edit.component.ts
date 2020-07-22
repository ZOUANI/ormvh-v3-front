import {Component, OnInit} from '@angular/core';
import {StatusService} from '../../../controller/service/Status.service';
import {StatusVo} from '../../../controller/model/status.model';
import {UserVo} from '../../../controller/model/User.model';

@Component({
  selector: 'app-status-edit',
  templateUrl: './status-edit.component.html',
  styleUrls: ['./status-edit.component.css']
})
export class StatusEditComponent implements OnInit {
  constructor(private statusService: StatusService) { }

   ngOnInit(): void {
       this.findAllcreatedBys();
       this.findAllupdatedBys();
    }

   get status(): StatusVo {
    return this.statusService.status;
  }

   get editableStatuss(): Array<StatusVo> {
    return this.statusService.editableStatuss;
   }

   set editableStatuss(value: Array<StatusVo>) {
    this.statusService.editableStatuss = value;
   }

  get createdBys(): Array<UserVo> {
   return this.statusService.createdBys;
  }
  get updatedBys(): Array<UserVo> {
   return this.statusService.updatedBys;
  }

   editStatus() {
    this.statusService.editStatus();
  }
    findAllcreatedBys() {
     this.statusService.findAllcreatedBys();
    }
    findAllupdatedBys() {
     this.statusService.findAllupdatedBys();
    }

     findBylibelle(ref: string) {
      this.statusService.findBylibelle(ref);
     }

    editHide() {
      this.statusService.editHide();
    }
    

}