import {UserVo} from './User.model';

export class StatusVo {
    public createdAt: string;
    public updatedAt: string;
    public libelleArab: string;
    public code: string;
    public color: string;

    public id: string;
    public libelle: string;
    public createdAtMax: string;
    public createdAtMin: string;
    public updatedAtMax: string;
    public updatedAtMin: string;
    public createdByVo: UserVo = new UserVo();
    public updatedByVo: UserVo = new UserVo();


}