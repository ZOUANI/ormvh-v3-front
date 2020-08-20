import {UserVo} from './User.model';

export class SubdivisionVo {
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
    public createdByVo: UserVo = new UserVo();
    public updatedByVo: UserVo = new UserVo();


}