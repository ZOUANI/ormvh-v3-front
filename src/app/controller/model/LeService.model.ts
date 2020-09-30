import {UserVo} from './User.model';

export class LeServiceVo {
    public description: string;
    public createdAt: string;
    public updatedAt: string;
    public libelleArab: string;
    public code: string;
    public id: string;
    public title: string;
    public createdAtMax: string;
    public createdAtMin: string;
    public updatedAtMax: string;
    public updatedAtMin: string;
    public chefVo: UserVo = new UserVo();
    public createdByVo: UserVo = new UserVo();
    public updatedByVo: UserVo = new UserVo();


}