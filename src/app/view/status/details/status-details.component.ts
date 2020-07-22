import { Component, OnInit } from '@angular/core';
import {StatusVo} from '../../../controller/model/status.model';
import {StatusService} from '../../../controller/service/Status.service';

@Component({
  selector: 'app-status-details',
  templateUrl: './status-details.component.html',
  styleUrls: ['./status-details.component.css']
})

export class StatusDetailsComponent implements OnInit {

  constructor(private _statusService : StatusService) {}


   get statusService (): StatusService {
    return this._statusService;
  }

  set statusService (value: StatusService) {
    this._statusService = value ;
  }

  get statusDetail (): StatusVo {
    return this.statusService.statusDetail;
}

  set statusDetail (value: StatusVo) {
  this.statusService.statusDetail = value ;
}


get statusShowDetail (): boolean  {
  return this.statusService.statusShowDetail;
}

set statusShowDetail (value: boolean ) {
  this.statusService.statusShowDetail = value ;
}

  ngOnInit(): void {

  }

public detailHide(){
       this.statusService.detailHide();
}

}