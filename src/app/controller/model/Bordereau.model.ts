import {UserVo} from './User.model';

export class BordereauVo {
    public dateBordereaux: string;
    public createdAt: string;
    public updatedAt: string;
    public description: string;
    public nombrePieceJointe: string;
    public id: string;
    public libelle: string;
    public dateBordereauxMax: string;
    public dateBordereauxMin: string;
    public createdAtMax: string;
    public createdAtMin: string;
    public updatedAtMax: string;
    public updatedAtMin: string;
    public nombrePieceJointeMax: string;
    public nombrePieceJointeMin: string;
    public createdByVo: UserVo = new UserVo();
    public updatedByVo: UserVo = new UserVo();


}