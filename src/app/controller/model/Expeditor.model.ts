import {UserVo} from './User.model';
import {SexeVo} from './Sexe.model';
import {NationalityVo} from './Nationality.model';
import {ExpeditorTypeVo} from './ExpeditorType.model';

export class ExpeditorVo {
    public adress: string;
    public createdAt: string;
    public updatedAt: string;
    public dateNaissance: string;
    public code: string;
    public description: string;
    public expeditorTypeVo: ExpeditorTypeVo = new ExpeditorTypeVo();
    public age: string;
    public id: string;
    public title: string;
    public titleArab: string;
    public createdAtMax: string;
    public createdAtMin: string;
    public updatedAtMax: string;
    public updatedAtMin: string;
    public ageMax: string;
    public ageMin: string;
    public sexeVo: SexeVo = new SexeVo();
    public nationalityVo: NationalityVo = new NationalityVo();
    public createdByVo: UserVo = new UserVo();
    public updatedByVo: UserVo = new UserVo();


}
