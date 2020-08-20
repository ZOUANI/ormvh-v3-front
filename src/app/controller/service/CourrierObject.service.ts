import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CourrierObjectVo} from '../model/courrierObject.model';
import {UserVo} from '../model/User.model';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CourrierObjectService {

    constructor(private http: HttpClient) {
    }

    private _courrierObjectDetail: CourrierObjectVo = new CourrierObjectVo();
    private _courrierObjectListe: Array<CourrierObjectVo> = new Array<CourrierObjectVo>();

    private _courrierObjectSearch: CourrierObjectVo = new CourrierObjectVo();
    private _courrierObject: CourrierObjectVo = new CourrierObjectVo();
    private _searchedCourrierObjects: Array<CourrierObjectVo> = new Array<CourrierObjectVo>();
    private _editableCourrierObjects: Array<CourrierObjectVo> = new Array<CourrierObjectVo>();
    private _createdBys: Array<UserVo> = new Array<UserVo>();
    private _updatedBys: Array<UserVo> = new Array<UserVo>();

    get createdBys(): Array<UserVo> {
        return this._createdBys;
    }

    set createdBys(value: Array<UserVo>) {
        this._createdBys = value;
    }

    get updatedBys(): Array<UserVo> {
        return this._updatedBys;
    }

    set updatedBys(value: Array<UserVo>) {
        this._updatedBys = value;
    }

    get courrierObject(): CourrierObjectVo {
        if (this._courrierObject == null) {
            this._courrierObject = new CourrierObjectVo();
        }
        return this._courrierObject;
    }

    set courrierObject(value: CourrierObjectVo) {
        this._courrierObject = value;
    }

    get courrierObjectListe(): Array<CourrierObjectVo> {
        return this._courrierObjectListe;
    }

    set courrierObjectListe(value: Array<CourrierObjectVo>) {
        this._courrierObjectListe = value;
    }

    get courrierObjectDetail(): CourrierObjectVo {
        return this._courrierObjectDetail;
    }

    set courrierObjectDetail(value: CourrierObjectVo) {
        this._courrierObjectDetail = value;
    }

    get courrierObjectSearch(): CourrierObjectVo {
        return this._courrierObjectSearch;
    }

    set courrierObjectSearch(value: CourrierObjectVo) {
        this._courrierObjectSearch = value;
    }

    get courrierObjectShowDetail(): boolean {
        return this._courrierObjectShowDetail;
    }

    set courrierObjectShowDetail(value: boolean) {
        this._courrierObjectShowDetail = value;
    }

    get editableCourrierObjects(): Array<CourrierObjectVo> {
        return this._editableCourrierObjects;
    }

    set editableCourrierObjects(value: Array<CourrierObjectVo>) {
        this._editableCourrierObjects = value;
    }

    public findAll() {
        this.http.get<Array<CourrierObjectVo>>('http://localhost:8080/generated/courrierObject/').subscribe(
            value => {
                if (value != null) {
                    this.courrierObjectListe = value;
                    this.editableCourrierObjects = value;

                }
            }
        );
    }

    findAllcourrierObjects(): Observable<Array<CourrierObjectVo>> {
        return this.http.get<Array<CourrierObjectVo>>('http://localhost:8080/generated/courrierObject/');
    }

    public saveCourrierObject() {
        this.http.post<CourrierObjectVo>('http://localhost:8080/generated/courrierObject/', this.courrierObject).subscribe(data => {
            this.createHide();
            this.courrierObjectListe.push(data);

        });
    }

    public editCourrierObject() {
        this.http.put<CourrierObjectVo>('http://localhost:8080/generated/courrierObject/', this.courrierObject).subscribe(data => {
            this.editHide();
        });

    }

    public findCourrierObject(pojo: CourrierObjectVo) {
        this.http.post<Array<CourrierObjectVo>>('http://localhost:8080/generated/courrierObject/search/', pojo).subscribe(
            value => {
                this.courrierObjectListe = value;
            });
    }

    public detailShow(pojo: CourrierObjectVo) {
        this.courrierObjectDetail = pojo;
        this.courrierObjectShowDetail = true;

    }


    delete(pojo: CourrierObjectVo) {
        this.http.delete<CourrierObjectVo>('http://localhost:8080/generated/courrierObject/id/' + pojo.id).subscribe(
            value => {
                var index = this.courrierObjectListe.indexOf(pojo);
                if (index > -1) {
                    this.courrierObjectListe.splice(index, 1);
                }
            }
        );


    }


    public findBytitle(ref: string) {
        this.http.get<CourrierObjectVo>('http://localhost:8080/generated/courrierObject/title/' + ref).subscribe(
            value => {
                if (value != null) {
                    this.courrierObject = value;
                }
            }
        );
    }

    public findAllcreatedBys() {
        this.http.get<Array<UserVo>>('http://localhost:8080/generated/user/').subscribe(
            value => {
                if (value != null) {
                    this.createdBys = value;
                }
            }
        );
    }

    public findAllupdatedBys() {
        this.http.get<Array<UserVo>>('http://localhost:8080/generated/user/').subscribe(
            value => {
                if (value != null) {
                    this.updatedBys = value;
                }
            }
        );
    }


    /***********************************************************************************************/
    private _courrierObjectShowDetail: boolean;

    public detailHide() {

        this.courrierObjectShowDetail = false;
        this.courrierObjectDetail = null;
    }

    private _courrierObjectShowEdit: boolean;

    private _courrierObjectShowCreate: boolean;

    get courrierObjectShowEdit(): boolean {
        return this._courrierObjectShowEdit;
    }

    set courrierObjectShowEdit(value: boolean) {
        this._courrierObjectShowEdit = value;
    }

    get courrierObjectShowCreate(): boolean {
        return this._courrierObjectShowCreate;
    }

    set courrierObjectShowCreate(value: boolean) {
        this._courrierObjectShowCreate = value;
    }

    public editShow(pojo: CourrierObjectVo) {

        this.courrierObjectShowEdit = true;
        this.courrierObject = pojo;
    }

    public editHide() {

        this.courrierObjectShowEdit = false;
        this.courrierObject = new CourrierObjectVo();
    }

    public createShow() {

        this.courrierObjectShowCreate = true;
        this.courrierObject = new CourrierObjectVo();
    }

    public createHide() {

        this.courrierObjectShowCreate = false;
        this.courrierObject = new CourrierObjectVo();
    }
}