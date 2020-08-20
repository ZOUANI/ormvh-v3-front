import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CourrierServiceItemVo} from '../model/courrierServiceItem.model';
import {CourrierVo} from '../model/Courrier.model';
import {LeServiceVo} from '../model/LeService.model';

@Injectable({
    providedIn: 'root'
})
export class CourrierServiceItemService {

    constructor(private http: HttpClient) {
    }

    private _courrierServiceItemDetail: CourrierServiceItemVo = new CourrierServiceItemVo();
    private _courrierServiceItemListe: Array<CourrierServiceItemVo> = new Array<CourrierServiceItemVo>();

    private _courrierServiceItemSearch: CourrierServiceItemVo = new CourrierServiceItemVo();
    private _courrierServiceItem: CourrierServiceItemVo = new CourrierServiceItemVo();
    private _searchedCourrierServiceItems: Array<CourrierServiceItemVo> = new Array<CourrierServiceItemVo>();
    private _editableCourrierServiceItems: Array<CourrierServiceItemVo> = new Array<CourrierServiceItemVo>();
    private _courriers: Array<CourrierVo> = new Array<CourrierVo>();
    private _services: Array<LeServiceVo> = new Array<LeServiceVo>();

    get courriers(): Array<CourrierVo> {
        return this._courriers;
    }

    set courriers(value: Array<CourrierVo>) {
        this._courriers = value;
    }

    get services(): Array<LeServiceVo> {
        return this._services;
    }

    set services(value: Array<LeServiceVo>) {
        this._services = value;
    }

    get courrierServiceItem(): CourrierServiceItemVo {
        if (this._courrierServiceItem == null) {
            this._courrierServiceItem = new CourrierServiceItemVo();
        }
        return this._courrierServiceItem;
    }

    set courrierServiceItem(value: CourrierServiceItemVo) {
        this._courrierServiceItem = value;
    }

    get courrierServiceItemListe(): Array<CourrierServiceItemVo> {
        return this._courrierServiceItemListe;
    }

    set courrierServiceItemListe(value: Array<CourrierServiceItemVo>) {
        this._courrierServiceItemListe = value;
    }

    get courrierServiceItemDetail(): CourrierServiceItemVo {
        return this._courrierServiceItemDetail;
    }

    set courrierServiceItemDetail(value: CourrierServiceItemVo) {
        this._courrierServiceItemDetail = value;
    }

    get courrierServiceItemSearch(): CourrierServiceItemVo {
        return this._courrierServiceItemSearch;
    }

    set courrierServiceItemSearch(value: CourrierServiceItemVo) {
        this._courrierServiceItemSearch = value;
    }

    get courrierServiceItemShowDetail(): boolean {
        return this._courrierServiceItemShowDetail;
    }

    set courrierServiceItemShowDetail(value: boolean) {
        this._courrierServiceItemShowDetail = value;
    }

    get editableCourrierServiceItems(): Array<CourrierServiceItemVo> {
        return this._editableCourrierServiceItems;
    }

    set editableCourrierServiceItems(value: Array<CourrierServiceItemVo>) {
        this._editableCourrierServiceItems = value;
    }

    public findAll() {
        this.http.get<Array<CourrierServiceItemVo>>('http://localhost:8080/generated/courrierServiceItem/').subscribe(
            value => {
                if (value != null) {
                    this.courrierServiceItemListe = value;
                    this.editableCourrierServiceItems = value;

                }
            }
        );
    }

    public saveCourrierServiceItem() {
        this.http.post<CourrierServiceItemVo>('http://localhost:8080/generated/courrierServiceItem/', this.courrierServiceItem).subscribe(data => {
            this.createHide();
            this.courrierServiceItemListe.push(data);

        });
    }

    public editCourrierServiceItem() {
        this.http.put<CourrierServiceItemVo>('http://localhost:8080/generated/courrierServiceItem/', this.courrierServiceItem).subscribe(data => {
            this.editHide();
        });

    }

    public findCourrierServiceItem(pojo: CourrierServiceItemVo) {
        this.http.post<Array<CourrierServiceItemVo>>('http://localhost:8080/generated/courrierServiceItem/search/', pojo).subscribe(
            value => {
                this.courrierServiceItemListe = value;
            });
    }

    public detailShow(pojo: CourrierServiceItemVo) {
        this.courrierServiceItemDetail = pojo;
        this.courrierServiceItemShowDetail = true;

    }


    delete(pojo: CourrierServiceItemVo) {
        this.http.delete<CourrierServiceItemVo>('http://localhost:8080/generated/courrierServiceItem/id/' + pojo.id).subscribe(
            value => {
                var index = this.courrierServiceItemListe.indexOf(pojo);
                if (index > -1) {
                    this.courrierServiceItemListe.splice(index, 1);
                }
            }
        );


    }


    public findByid(identifier: string) {
        this.http.get<CourrierServiceItemVo>('http://localhost:8080/generated/courrierServiceItem/id/' + identifier).subscribe(
            value => {
                if (value != null) {
                    this.courrierServiceItem = value;
                }
            }
        );
    }

    public findAllcourriers() {
        this.http.get<Array<CourrierVo>>('http://localhost:8080/generated/courrier/').subscribe(
            value => {
                if (value != null) {
                    this.courriers = value;
                }
            }
        );
    }

    public findAllservices() {
        this.http.get<Array<LeServiceVo>>('http://localhost:8080/generated/leService/').subscribe(
            value => {
                if (value != null) {
                    this.services = value;
                }
            }
        );
    }


    /***********************************************************************************************/
    private _courrierServiceItemShowDetail: boolean;

    public detailHide() {

        this.courrierServiceItemShowDetail = false;
        this.courrierServiceItemDetail = null;
    }

    private _courrierServiceItemShowEdit: boolean;

    private _courrierServiceItemShowCreate: boolean;

    get courrierServiceItemShowEdit(): boolean {
        return this._courrierServiceItemShowEdit;
    }

    set courrierServiceItemShowEdit(value: boolean) {
        this._courrierServiceItemShowEdit = value;
    }

    get courrierServiceItemShowCreate(): boolean {
        return this._courrierServiceItemShowCreate;
    }

    set courrierServiceItemShowCreate(value: boolean) {
        this._courrierServiceItemShowCreate = value;
    }

    public editShow(pojo: CourrierServiceItemVo) {

        this.courrierServiceItemShowEdit = true;
        this.courrierServiceItem = pojo;
    }

    public editHide() {

        this.courrierServiceItemShowEdit = false;
        this.courrierServiceItem = new CourrierServiceItemVo();
    }

    public createShow() {

        this.courrierServiceItemShowCreate = true;
        this.courrierServiceItem = new CourrierServiceItemVo();
    }

    public createHide() {

        this.courrierServiceItemShowCreate = false;
        this.courrierServiceItem = new CourrierServiceItemVo();
    }
}