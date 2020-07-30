import {RoleVo} from './Role.model';

export class UserVo {
    public credentialsNonExpired: boolean;
    public enabled: boolean;
    public createdAt: string;
    public updatedAt: string;
    public email: string;
    public accountNonExpired: boolean;
    public accountNonLocked: boolean;
    public id: string;
    public username: string;
    public password: string;
    public passwordChanged: boolean;
    public createdAtMax: string;
    public createdAtMin: string;
    public updatedAtMax: string;
    public updatedAtMin: string;
    private _createdByVo: UserVo;
    private _updatedByVo: UserVo;
    public rolesVo: Array<RoleVo> = new Array<RoleVo>();

    get createdByVo(): UserVo {
        if (this._createdByVo == null) {
            this._createdByVo = new UserVo();
        }
        return this._createdByVo;
    }

    set createdByVo(value: UserVo) {
        this._createdByVo = value;
    }

    get updatedByVo(): UserVo {
        if (this._updatedByVo == null) {
            this._updatedByVo = new UserVo();
        }
        return this._updatedByVo;
    }

    set updatedByVo(value: UserVo) {
        this._updatedByVo = value;
    }

}