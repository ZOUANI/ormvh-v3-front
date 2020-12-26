import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ExpeditorVo} from '../model/expeditor.model';
import {UserVo} from '../model/User.model';
import {SexeVo} from '../model/Sexe.model';
import {NationalityVo} from '../model/Nationality.model';
import {SelectItem} from "primeng";
import {NatureClientVo} from "../model/NatureClient.model";
import {ExpeditorTypeVo} from "../model/ExpeditorType.model";

@Injectable({
    providedIn: 'root'
})
export class ExpeditorService {


    constructor(private http: HttpClient) {
    }

    private _expeditorDetail: ExpeditorVo = new ExpeditorVo();
    private _expeditorListe: Array<ExpeditorVo> = new Array<ExpeditorVo>();

    private _expeditorSearch: ExpeditorVo = new ExpeditorVo();
    private _expeditor: ExpeditorVo = new ExpeditorVo();
    private _searchedExpeditors: Array<ExpeditorVo> = new Array<ExpeditorVo>();
    private _editableExpeditors: Array<ExpeditorVo> = new Array<ExpeditorVo>();
    private _sexes: Array<SexeVo> = new Array<SexeVo>();
    private _expeditorTypeVos: Array<ExpeditorTypeVo> = new Array<ExpeditorTypeVo>();

    private _nationalitys: Array<NationalityVo> = new Array<NationalityVo>();
    private _createdBys: Array<UserVo> = new Array<UserVo>();
    private _updatedBys: Array<UserVo> = new Array<UserVo>();

    // private _natureClients: Array<NatureClientVo> = new Array<NatureClientVo>();

    private _natureClients: SelectItem[];
    private _expeditors: SelectItem[];

    get sexes(): Array<SexeVo> {
        return this._sexes;
    }

    set sexes(value: Array<SexeVo>) {
        this._sexes = value;
    }


    get expeditorTypeVos(): Array<ExpeditorTypeVo> {
        return this._expeditorTypeVos;
    }

    set expeditorTypeVos(value: Array<ExpeditorTypeVo>) {
        this._expeditorTypeVos = value;
    }

    get natureClients(): SelectItem[] {
        return this._natureClients;
    }

    set natureClients(value: SelectItem[]) {
        this._natureClients = value;
    }

    get nationalitys(): Array<NationalityVo> {
        return this._nationalitys;
    }

    set nationalitys(value: Array<NationalityVo>) {
        this._nationalitys = value;
    }

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

    get expeditor(): ExpeditorVo {
        if (this._expeditor == null) {
            this._expeditor = new ExpeditorVo();
        }
        return this._expeditor;
    }

    set expeditor(value: ExpeditorVo) {
        this._expeditor = value;
    }

    get expeditorListe(): Array<ExpeditorVo> {
        return this._expeditorListe;
    }

    set expeditorListe(value: Array<ExpeditorVo>) {
        this._expeditorListe = value;
    }

    get expeditorDetail(): ExpeditorVo {
        return this._expeditorDetail;
    }

    set expeditorDetail(value: ExpeditorVo) {
        this._expeditorDetail = value;
    }

    get expeditorSearch(): ExpeditorVo {
        return this._expeditorSearch;
    }

    set expeditorSearch(value: ExpeditorVo) {
        this._expeditorSearch = value;
    }

    get expeditorShowDetail(): boolean {
        return this._expeditorShowDetail;
    }

    set expeditorShowDetail(value: boolean) {
        this._expeditorShowDetail = value;
    }

    get editableExpeditors(): Array<ExpeditorVo> {
        return this._editableExpeditors;
    }

    set editableExpeditors(value: Array<ExpeditorVo>) {
        this._editableExpeditors = value;
    }

    public findAll() {
        this.http.get<Array<ExpeditorVo>>('http://localhost:8080/generated/expeditor/').subscribe(
            value => {
                if (value != null) {
                    this.expeditorListe = value;
                    this.editableExpeditors = value;

                }
            }
        );
    }


    findAllexpeditors() {
        this.http.get<Array<ExpeditorVo>>('http://localhost:8080/generated/expeditor/').subscribe(data => {
            this.expeditors = [{label: '----------', value: null}];
            if (data != null) {
                for (const item of data) {
                    this.expeditors.push({label: item.title, value: item});
                }
            }
        }, error => {
            this.expeditors = [{label: 'select expeditor', value: null}];
        });
        ;
    }


    findAllNatureClient() {
        this.http.get<Array<NatureClientVo>>('http://localhost:8080/generated/natureClient/').subscribe(data => {
            if (data != null) {
                for (const item of data) {
                    this.natureClients.push({label: item.libelle, value: item});
                }
            }
        }, error => {
            this.expeditors = [{label: 'select expeditor', value: null}];
        });
        ;
    }


    public saveExpeditor() {
        this.http.post<ExpeditorVo>('http://localhost:8080/generated/expeditor/', this.expeditor).subscribe(data => {
            this.expeditorListe.push(data);
            this.expeditors.push({label: data.title, value: data});
            this.expeditorListe.push(data);

        });
    }

    public editExpeditor() {
        this.http.put<ExpeditorVo>('http://localhost:8080/generated/expeditor/', this.expeditor).subscribe(data => {
        });

    }

    public findExpeditor(pojo: ExpeditorVo) {
        this.http.post<Array<ExpeditorVo>>('http://localhost:8080/generated/expeditor/search/', pojo).subscribe(
            value => {
                this.expeditorListe = value;
            });
    }

    public detailShow(pojo: ExpeditorVo) {
        this.expeditorDetail = pojo;
        this.expeditorShowDetail = true;

    }


    delete(pojo: ExpeditorVo) {
        this.http.delete<ExpeditorVo>('http://localhost:8080/generated/expeditor/id/' + pojo.id).subscribe(
            value => {
                let index = this.expeditorListe.indexOf(pojo);
                if (index > -1) {
                    this.expeditorListe.splice(index, 1);
                }
            }
        );


    }


    public findBytitle(ref: string) {
        this.http.get<ExpeditorVo>('http://localhost:8080/generated/expeditor/title/' + ref).subscribe(
            value => {
                if (value != null) {
                    this.expeditor = value;
                }
            }
        );
    }

    public findAllsexes() {
        this.http.get<Array<SexeVo>>('http://localhost:8080/generated/sexe/').subscribe(
            value => {
                if (value != null) {
                    this.sexes = value;
                }
            }
        );
    }

    public findAllnationalitys() {
        this.http.get<Array<NationalityVo>>('http://localhost:8080/generated/nationality/').subscribe(
            value => {
                if (value != null) {
                    this.nationalitys = value;
                }
            }
        );
    }

    public findAllExpeditorType() {
        this.http.get<Array<ExpeditorTypeVo>>('http://localhost:8080/generated/expeditorType/').subscribe(
            value => {
                if (value != null) {
                    this.expeditorTypeVos = value;
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
    private _expeditorShowDetail: boolean;

    public detailHide() {

        this.expeditorShowDetail = false;
        this.expeditorDetail = null;
    }


    get expeditors(): SelectItem[] {
        return this._expeditors;
    }

    set expeditors(value: SelectItem[]) {
        this._expeditors = value;
    }


}
