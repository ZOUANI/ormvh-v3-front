import {Component, OnInit} from '@angular/core';
import {LeServiceService} from '../../../controller/service/LeService.service';
import {LeServiceVo} from '../../../controller/model/leService.model';
import {UserVo} from '../../../controller/model/User.model';

@Component({
  selector: 'app-leService-edit',
  templateUrl: './leService-edit.component.html',
  styleUrls: ['./leService-edit.component.css']
})
export class LeServiceEditComponent implements OnInit {
  constructor(private leServiceService: LeServiceService) { }

   ngOnInit(): void {
       this.findAllcreatedBys();
       this.findAllupdatedBys();
    }

   get leService(): LeServiceVo {
    return this.leServiceService.leService;
  }

   get editableLeServices(): Array<LeServiceVo> {
    return this.leServiceService.editableLeServices;
   }

   set editableLeServices(value: Array<LeServiceVo>) {
    this.leServiceService.editableLeServices = value;
   }

  get createdBys(): Array<UserVo> {
   return this.leServiceService.createdBys;
  }
  get updatedBys(): Array<UserVo> {
   return this.leServiceService.updatedBys;
  }

   editLeService() {
    this.leServiceService.editLeService();
  }
    findAllcreatedBys() {
     this.leServiceService.findAllcreatedBys();
    }
    findAllupdatedBys() {
     this.leServiceService.findAllupdatedBys();
    }

     findBytitle(ref: string) {
      this.leServiceService.findBytitle(ref);
     }

    editHide() {
      this.leServiceService.editHide();
    }
    

}