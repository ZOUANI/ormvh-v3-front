import {UserVo} from './User.model';
import {StatusVo} from './Status.model';
import {CourrierVo} from './Courrier.model';

export class TaskVo {
  public createdAt: string;
  public updatedAt: string;
  public assignedAt: string;
  public dateAccuse: string;
  public dateReponse: string;
  public processedAt: string;
  public delai: string;
  public relance: string;
  public accuse: boolean;
  public reponse: boolean;
  public id: string;
  public title: string;
  public description: string;
  public observation: string;
     public createdAtMax: string ;
     public createdAtMin: string ;
     public updatedAtMax: string ;
     public updatedAtMin: string ;
     public assignedAtMax: string ;
     public assignedAtMin: string ;
     public dateAccuseMax: string ;
     public dateAccuseMin: string ;
     public dateReponseMax: string ;
     public dateReponseMin: string ;
     public processedAtMax: string ;
     public processedAtMin: string ;
     public delaiMax: string ;
     public delaiMin: string ;
     public relanceMax: string ;
     public relanceMin: string ;
      public updatedByVo: UserVo ;
      public courrierVo: CourrierVo ;
      public assigneVo: UserVo ;
      public createdByVo: UserVo ;
      public statusVo: StatusVo ;


}