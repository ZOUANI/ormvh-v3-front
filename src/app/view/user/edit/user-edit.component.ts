import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../controller/service/User.service';
import {UserVo} from '../../../controller/model/user.model';
import {RoleVo} from '../../../controller/model/Role.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  constructor(private userService: UserService) { }

   ngOnInit(): void {
       this.findAllcreatedBys();
       this.findAllupdatedBys();
    }

   get user(): UserVo {
    return this.userService.user;
  }

   get editableUsers(): Array<UserVo> {
    return this.userService.editableUsers;
   }

   set editableUsers(value: Array<UserVo>) {
    this.userService.editableUsers = value;
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
   editUser() {
    this.userService.editUser();
  }
    findAllcreatedBys() {
     this.userService.findAllcreatedBys();
    }
    findAllupdatedBys() {
     this.userService.findAllupdatedBys();
    }

     findByusername(ref: string) {
      this.userService.findByusername(ref);
     }


}