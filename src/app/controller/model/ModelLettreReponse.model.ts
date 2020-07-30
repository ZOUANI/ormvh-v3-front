import {UserVo} from './User.model';
import {CategorieModelLettreReponseVo} from './CategorieModelLettreReponse.model';
import {LettreModel} from './lettre-model.model';

export class ModelLettreReponseVo {
  public createdAt: string;
  public updatedAt: string;
  public libelleArab: string;
  public code: string;
  public chemin: string;
  public lettreModel: LettreModel = new LettreModel();
  public id: string;
  public libelle: string;
     public createdAtMax: string ;
     public createdAtMin: string ;
     public updatedAtMax: string ;
     public updatedAtMin: string ;
      public categorieModelLettreReponseVo: CategorieModelLettreReponseVo = new CategorieModelLettreReponseVo();
      public createdByVo: UserVo = new UserVo();
      public updatedByVo: UserVo = new UserVo();


}
