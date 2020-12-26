import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EtatCourrierVo} from '../model/etatCourrier.model';
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class EtatCourrierService {

    constructor(private http: HttpClient) {
    }

    private _etatCourrierDetail: EtatCourrierVo = new EtatCourrierVo();
    private _etatCourrierListe: Array<EtatCourrierVo> = new Array<EtatCourrierVo>();

    private _etatCourrierSearch: EtatCourrierVo = new EtatCourrierVo();
    private _etatCourrier: EtatCourrierVo = new EtatCourrierVo();
    private _searchedEtatCourriers: Array<EtatCourrierVo> = new Array<EtatCourrierVo>();
    private _editableEtatCourriers: Array<EtatCourrierVo> = new Array<EtatCourrierVo>();

    get etatCourrier(): EtatCourrierVo {
        if (this._etatCourrier == null) {
            this._etatCourrier = new EtatCourrierVo();
        }
        return this._etatCourrier;
    }

    set etatCourrier(value: EtatCourrierVo) {
        this._etatCourrier = value;
    }

    get etatCourrierListe(): Array<EtatCourrierVo> {
        return this._etatCourrierListe;
    }

    set etatCourrierListe(value: Array<EtatCourrierVo>) {
        this._etatCourrierListe = value;
    }

    get etatCourrierDetail(): EtatCourrierVo {
        return this._etatCourrierDetail;
    }

    set etatCourrierDetail(value: EtatCourrierVo) {
        this._etatCourrierDetail = value;
    }

    get etatCourrierSearch(): EtatCourrierVo {
        return this._etatCourrierSearch;
    }

    set etatCourrierSearch(value: EtatCourrierVo) {
        this._etatCourrierSearch = value;
    }

    get etatCourrierShowDetail(): boolean {
        return this._etatCourrierShowDetail;
    }

    set etatCourrierShowDetail(value: boolean) {
        this._etatCourrierShowDetail = value;
    }

    get editableEtatCourriers(): Array<EtatCourrierVo> {
        return this._editableEtatCourriers;
    }

    set editableEtatCourriers(value: Array<EtatCourrierVo>) {
        this._editableEtatCourriers = value;
    }

    findAlletatCourriers(): Observable<Array<EtatCourrierVo>> {
        return this.http.get<Array<EtatCourrierVo>>('http://localhost:8080/generated/etatCourrier/');
    }

    public findAll() {
        this.http.get<Array<EtatCourrierVo>>('http://localhost:8080/generated/etatCourrier/').subscribe(
            value => {
                if (value != null) {
                    this.etatCourrierListe = value;
                    this.editableEtatCourriers = value;

                }
            }
        );
    }

    public saveEtatCourrier() {
        this.http.post<EtatCourrierVo>('http://localhost:8080/generated/etatCourrier/', this.etatCourrier).subscribe(data => {
            this.createHide();
            this.etatCourrierListe.push(data);

        });
    }

    public editEtatCourrier() {
        this.http.put<EtatCourrierVo>('http://localhost:8080/generated/etatCourrier/', this.etatCourrier).subscribe(data => {
            this.editHide();
        });

    }

    public findEtatCourrier(pojo: EtatCourrierVo) {
        this.http.post<Array<EtatCourrierVo>>('http://localhost:8080/generated/etatCourrier/search/', pojo).subscribe(
            value => {
                this.etatCourrierListe = value;
            });
    }

    public detailShow(pojo: EtatCourrierVo) {
        this.etatCourrierDetail = pojo;
        this.etatCourrierShowDetail = true;

    }


    delete(pojo: EtatCourrierVo) {
        this.http.delete<EtatCourrierVo>('http://localhost:8080/generated/etatCourrier/id/' + pojo.id).subscribe(
            value => {
                var index = this.etatCourrierListe.indexOf(pojo);
                if (index > -1) {
                    this.etatCourrierListe.splice(index, 1);
                }
            }
        );


    }


    public findBylibelle(ref: string) {
        this.http.get<EtatCourrierVo>('http://localhost:8080/generated/etatCourrier/libelle/' + ref).subscribe(
            value => {
                if (value != null) {
                    this.etatCourrier = value;
                }
            }
        );
    }


    /***********************************************************************************************/
    private _etatCourrierShowDetail: boolean;

    public detailHide() {

        this.etatCourrierShowDetail = false;
        this.etatCourrierDetail = null;
    }

    private _etatCourrierShowEdit: boolean;

    private _etatCourrierShowCreate: boolean;

    get etatCourrierShowEdit(): boolean {
        return this._etatCourrierShowEdit;
    }

    set etatCourrierShowEdit(value: boolean) {
        this._etatCourrierShowEdit = value;
    }

    get etatCourrierShowCreate(): boolean {
        return this._etatCourrierShowCreate;
    }

    set etatCourrierShowCreate(value: boolean) {
        this._etatCourrierShowCreate = value;
    }

    public editShow(pojo: EtatCourrierVo) {

        this.etatCourrierShowEdit = true;
        this.etatCourrier = pojo;
    }

    public editHide() {

        this.etatCourrierShowEdit = false;
        this.etatCourrier = new EtatCourrierVo();
    }

    public createShow() {

        this.etatCourrierShowCreate = true;
        this.etatCourrier = new EtatCourrierVo();
    }

    public createHide() {

        this.etatCourrierShowCreate = false;
        this.etatCourrier = new EtatCourrierVo();
    }
}
