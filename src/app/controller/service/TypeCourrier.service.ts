import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TypeCourrierVo} from '../model/typeCourrier.model';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TypeCourrierService {


    constructor(private http: HttpClient) {
    }

    private _typeCourrierDetail: TypeCourrierVo = new TypeCourrierVo();
    private _typeCourrierListe: Array<TypeCourrierVo> = new Array<TypeCourrierVo>();

    private _typeCourrierSearch: TypeCourrierVo = new TypeCourrierVo();
    private _typeCourrier: TypeCourrierVo = new TypeCourrierVo();
    private _searchedTypeCourriers: Array<TypeCourrierVo> = new Array<TypeCourrierVo>();
    private _editableTypeCourriers: Array<TypeCourrierVo> = new Array<TypeCourrierVo>();

    get typeCourrier(): TypeCourrierVo {
        if (this._typeCourrier == null) {
            this._typeCourrier = new TypeCourrierVo();
        }
        return this._typeCourrier;
    }

    set typeCourrier(value: TypeCourrierVo) {
        this._typeCourrier = value;
    }

    get typeCourrierListe(): Array<TypeCourrierVo> {
        return this._typeCourrierListe;
    }

    set typeCourrierListe(value: Array<TypeCourrierVo>) {
        this._typeCourrierListe = value;
    }

    get typeCourrierDetail(): TypeCourrierVo {
        return this._typeCourrierDetail;
    }

    set typeCourrierDetail(value: TypeCourrierVo) {
        this._typeCourrierDetail = value;
    }

    get typeCourrierSearch(): TypeCourrierVo {
        return this._typeCourrierSearch;
    }

    set typeCourrierSearch(value: TypeCourrierVo) {
        this._typeCourrierSearch = value;
    }

    get typeCourrierShowDetail(): boolean {
        return this._typeCourrierShowDetail;
    }

    set typeCourrierShowDetail(value: boolean) {
        this._typeCourrierShowDetail = value;
    }

    get editableTypeCourriers(): Array<TypeCourrierVo> {
        return this._editableTypeCourriers;
    }

    set editableTypeCourriers(value: Array<TypeCourrierVo>) {
        this._editableTypeCourriers = value;
    }

    public findAll() {
        this.http.get<Array<TypeCourrierVo>>('http://localhost:8080/generated/typeCourrier/').subscribe(
            value => {
                if (value != null) {
                    this.typeCourrierListe = value;
                    this.editableTypeCourriers = value;

                }
            }
        );
    }

    public findAlltypeCourriers(): Observable<Array<TypeCourrierVo>> {
        return this.http.get<Array<TypeCourrierVo>>('http://localhost:8080/generated/typeCourrier/');
    }

    public saveTypeCourrier() {
        this.http.post<TypeCourrierVo>('http://localhost:8080/generated/typeCourrier/', this.typeCourrier).subscribe(data => {
            this.createHide();
            this.typeCourrierListe.push(data);

        });
    }

    public editTypeCourrier() {
        this.http.put<TypeCourrierVo>('http://localhost:8080/generated/typeCourrier/', this.typeCourrier).subscribe(data => {
            this.editHide();
        });

    }

    public findTypeCourrier(pojo: TypeCourrierVo) {
        this.http.post<Array<TypeCourrierVo>>('http://localhost:8080/generated/typeCourrier/search/', pojo).subscribe(
            value => {
                this.typeCourrierListe = value;
            });
    }

    public detailShow(pojo: TypeCourrierVo) {
        this.typeCourrierDetail = pojo;
        this.typeCourrierShowDetail = true;

    }


    delete(pojo: TypeCourrierVo) {
        this.http.delete<TypeCourrierVo>('http://localhost:8080/generated/typeCourrier/id/' + pojo.id).subscribe(
            value => {
                var index = this.typeCourrierListe.indexOf(pojo);
                if (index > -1) {
                    this.typeCourrierListe.splice(index, 1);
                }
            }
        );


    }


    public findBylibelle(ref: string) {
        this.http.get<TypeCourrierVo>('http://localhost:8080/generated/typeCourrier/libelle/' + ref).subscribe(
            value => {
                if (value != null) {
                    this.typeCourrier = value;
                }
            }
        );
    }


    /***********************************************************************************************/
    private _typeCourrierShowDetail: boolean;

    public detailHide() {

        this.typeCourrierShowDetail = false;
        this.typeCourrierDetail = null;
    }

    private _typeCourrierShowEdit: boolean;

    private _typeCourrierShowCreate: boolean;

    get typeCourrierShowEdit(): boolean {
        return this._typeCourrierShowEdit;
    }

    set typeCourrierShowEdit(value: boolean) {
        this._typeCourrierShowEdit = value;
    }

    get typeCourrierShowCreate(): boolean {
        return this._typeCourrierShowCreate;
    }

    set typeCourrierShowCreate(value: boolean) {
        this._typeCourrierShowCreate = value;
    }

    public editShow(pojo: TypeCourrierVo) {

        this.typeCourrierShowEdit = true;
        this.typeCourrier = pojo;
    }

    public editHide() {

        this.typeCourrierShowEdit = false;
        this.typeCourrier = new TypeCourrierVo();
    }

    public createShow() {

        this.typeCourrierShowCreate = true;
        this.typeCourrier = new TypeCourrierVo();
    }

    public createHide() {

        this.typeCourrierShowCreate = false;
        this.typeCourrier = new TypeCourrierVo();
    }
}