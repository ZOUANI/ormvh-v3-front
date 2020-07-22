import {Component, OnInit} from '@angular/core';
import {StatusService} from '../../../controller/service/Status.service';
import {StatusVo} from '../../../controller/model/status.model';
import {UserVo} from '../../../controller/model/User.model';

@Component({
  selector: 'app-status-create',
  templateUrl: './status-create.component.html',
  styleUrls: ['./status-create.component.css']
})
export class StatusCreateComponent implements OnInit {
  constructor(private statusService: StatusService) { }

   ngOnInit(): void {
      this.findAllcreatedBys();
      this.findAllupdatedBys();
    }

   get status(): StatusVo {
    return this.statusService.status;
  }

  get createdBys(): Array<UserVo> {
   return this.statusService.createdBys;
  }
  get updatedBys(): Array<UserVo> {
   return this.statusService.updatedBys;
  }

   saveStatus() {
    this.statusService.saveStatus();
  }

   findAllcreatedBys() {
     this.statusService.findAllcreatedBys();
   }
   findAllupdatedBys() {
     this.statusService.findAllupdatedBys();
   }

get statusShowCreate (): boolean  {
  return this.statusService.statusShowCreate;
}

set statusShowCreate (value: boolean ) {
  this.statusService.statusShowCreate = value ;
}
public createHide(){
       this.statusService.createHide();
}
}