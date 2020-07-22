import {UserVo} from './User.model';

export class EmployeeVo {
  public updatedAt: string;
  public createdAt: string;
  public title: string;
  public id: string;
     public updatedAtMax: string ;
     public updatedAtMin: string ;
     public createdAtMax: string ;
     public createdAtMin: string ;
      public updatedByVo: UserVo = new UserVo();
      public createdByVo: UserVo = new UserVo();
      public userVo: UserVo = new UserVo();


}