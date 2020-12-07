import {UserVo} from './User.model';

export class NatureCourrierVo {
    public code: string;
    public createdAt: string;
    public updatedAt: string;
    public delai: string;
    public relance: string;
    public libelleArab: string;
    public id: string;
    public libelle: string;
    public createdAtMax: string;
    public createdAtMin: string;
    public updatedAtMax: string;
    public updatedAtMin: string;
    public delaiMax: string;
    public delaiMin: string;
    public relanceMax: string;
    public relanceMin: string;
    public categorie: string;
    public createdByVo: UserVo = new UserVo();
    public updatedByVo: UserVo = new UserVo();


}