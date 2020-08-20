import {UserVo} from './User.model';

export class CourrierObjectVo {
    public createdAt: string;
    public updatedAt: string;
    public titleArab: string;
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