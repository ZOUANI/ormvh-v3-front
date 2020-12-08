import {UserVo} from './User.model';
import {ExpeditorTypeVo} from './ExpeditorType.model';
import {StatusVo} from './Status.model';
import {TaskVo} from './Task.model';
import {NatureCourrierVo} from './NatureCourrier.model';
import {CourrierServiceItemVo} from './CourrierServiceItem.model';
import {EvaluationVo} from './Evaluation.model';
import {CourrierObjectVo} from './CourrierObject.model';
import {SubdivisionVo} from './Subdivision.model';
import {ExpeditorVo} from './Expeditor.model';
import {TypeCourrierVo} from './TypeCourrier.model';
import {VoieVo} from './Voie.model';
import {LeServiceVo} from './LeService.model';
import {CourrierPieceJoint} from './courrier-piece-joint.model';
import {EtatCourrierVo} from './EtatCourrier.model';
import {NatureClientVo} from './NatureClient.model';
import {PhaseAdminVo} from './PhaseAdmin.model';
import {TypeRequetteVo} from './TypeRequette.model';

export class CourrierVo {
    public sujet: string;
    public instruction: string;
    public expediteurDesc: string;
    public sentAt: string;
    public destinataireDesc: string;
    public destinataireVille: string;
    public relance: string;
    public dateRelance: string;
    public accuse: boolean;
    public reponse: boolean;
    public dateAccuse: string;
    public dateReponse: string;
    public receivedAt: string;
    public id: number;
    public idCourrier: string;
    public subject: string;
    public description: string;
    public createdAt: string;
    public updatedAt: string;
    public delai: string;
    public sentAtMax: string;
    public sentAtMin: string;
    public relanceMax: string;
    public relanceMin: string;
    public dateRelanceMax: string;
    public dateRelanceMin: string;
    public dateAccuseMax: string;
    public dateAccuseMin: string;
    public dateReponseMax: string;
    public dateReponseMin: string;
    public receivedAtMax: string;
    public receivedAtMin: string;
    public createdAtMax: string;
    public createdAtMin: string;
    public updatedAtMax: string;
    public updatedAtMin: string;
    public delaiMax: string;
    public delaiMin: string;
    public courrierObjectVo: CourrierObjectVo;
    public etatCourrierVo: EtatCourrierVo;
    public voieVo: VoieVo;
    public natureCourrierVo: NatureCourrierVo;
    public linkedToVo: CourrierVo;
    public expeditorVo: ExpeditorVo;
    public destinatorVo: ExpeditorVo;
    public coordinatorVo: LeServiceVo;
    public emetteurVo: LeServiceVo;
    public evaluationVo: EvaluationVo;
    public subdivisionVo: SubdivisionVo;
    public statusVo: StatusVo;
    public typeCourrierVo: TypeCourrierVo = new TypeCourrierVo();
    public createdByVo: UserVo;
    public updatedByVo: UserVo;
    public tasksVo: Array<TaskVo> = new Array<TaskVo>();
    public courrierServiceItemsVo: Array<CourrierServiceItemVo> = new Array<CourrierServiceItemVo>();
    public courrierPieceJoint: Array<CourrierPieceJoint> = new Array<CourrierPieceJoint>();
    public type: string;

    public natureClientVo: NatureClientVo;
    public phaseAdminVo: PhaseAdminVo;
    public typeRequetteVo: TypeRequetteVo;

}
