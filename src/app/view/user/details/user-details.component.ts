import { Component, OnInit } from '@angular/core';
import {UserVo} from '../../../controller/model/user.model';
import {UserService} from '../../../controller/service/User.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {

  constructor(private _userService : UserService) {}


   get userService (): UserService {
    return this._userService;
  }

  set userService (value: UserService) {
    this._userService = value ;
  }

  get userDetail (): UserVo {
    return this.userService.userDetail;
}

  set userDetail (value: UserVo) {
  this.userService.userDetail = value ;
}


get userShowDetail (): boolean  {
  return this.userService.userShowDetail;
}

set userShowDetail (value: boolean ) {
  this.userService.userShowDetail = value ;
}

  ngOnInit(): void {

  }

public detailHide(){
       this.userService.detailHide();
}

}