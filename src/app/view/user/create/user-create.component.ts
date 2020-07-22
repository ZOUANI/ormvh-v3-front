import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../controller/service/User.service';
import {UserVo} from '../../../controller/model/user.model';
import {RoleVo} from '../../../controller/model/Role.model';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  constructor(private userService: UserService) { }

   ngOnInit(): void {
      this.findAllcreatedBys();
      this.findAllupdatedBys();
    }

   get user(): UserVo {
    return this.userService.user;
  }

  get createdBys(): Array<UserVo> {
   return this.userService.createdBys;
  }
  get updatedBys(): Array<UserVo> {
   return this.userService.updatedBys;
  }

  get role(): RoleVo {
    return this.userService.role;
  }

  addRole() {
   return this.userService.addRole();
  }

  removeRole(i: number) {
   this.userService.removeRole(i);
  }
   saveUser() {
    this.userService.saveUser();
  }

   findAllcreatedBys() {
     this.userService.findAllcreatedBys();
   }
   findAllupdatedBys() {
     this.userService.findAllupdatedBys();
   }

}