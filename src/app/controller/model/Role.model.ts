import {UserVo} from './User.model';

export class RoleVo {
    public updatedAt: string;
    public authority: string;
    public createdAt: string;
    public id: string;
    public updatedAtMax: string;
    public updatedAtMin: string;
    public createdAtMax: string;
    public createdAtMin: string;
    public updatedByVo: UserVo = new UserVo();
    public createdByVo: UserVo = new UserVo();


}