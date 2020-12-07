import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TypeRequetteVo} from '../model/typeRequette.model';

@Injectable({
    providedIn: 'root'
})
export class TypeRequetteService {

    constructor(private http: HttpClient) {
    }

    private _typeRequetteDetail: TypeRequetteVo = new TypeRequetteVo();
    private _typeRequetteListe: Array<TypeRequetteVo> = new Array<TypeRequetteVo>();

    private _typeRequetteSearch: TypeRequetteVo = new TypeRequetteVo();
    private _typeRequette: TypeRequetteVo = new TypeRequetteVo();
    private _searchedTypeRequettes: Array<TypeRequetteVo> = new Array<TypeRequetteVo>();
    private _editableTypeRequettes: Array<TypeRequetteVo> = new Array<TypeRequetteVo>();

    get typeRequette(): TypeRequetteVo {
        if (this._typeRequette == null) {
            this._typeRequette = new TypeRequetteVo();
        }
        return this._typeRequette;
    }

    set typeRequette(value: TypeRequetteVo) {
        this._typeRequette = value;
    }

    get typeRequetteListe(): Array<TypeRequetteVo> {
        return this._typeRequetteListe;
    }

    set typeRequetteListe(value: Array<TypeRequetteVo>) {
        this._typeRequetteListe = value;
    }

    get typeRequetteDetail(): TypeRequetteVo {
        return this._typeRequetteDetail;
    }

    set typeRequetteDetail(value: TypeRequetteVo) {
        this._typeRequetteDetail = value;
    }

    get typeRequetteSearch(): TypeRequetteVo {
        return this._typeRequetteSearch;
    }

    set typeRequetteSearch(value: TypeRequetteVo) {
        this._typeRequetteSearch = value;
    }

    get typeRequetteShowDetail(): boolean {
        return this._typeRequetteShowDetail;
    }

    set typeRequetteShowDetail(value: boolean) {
        this._typeRequetteShowDetail = value;
    }

    get editableTypeRequettes(): Array<TypeRequetteVo> {
        return this._editableTypeRequettes;
    }

    set editableTypeRequettes(value: Array<TypeRequetteVo>) {
        this._editableTypeRequettes = value;
    }

    public findAll() {
        return this.http.get<Array<TypeRequetteVo>>('http://localhost:8080/generated/typeRequette/');

    }

    public saveTypeRequette() {
        this.http.post<TypeRequetteVo>('http://localhost:8080/generated/typeRequette/', this.typeRequette).subscribe(data => {
            this.createHide();
            this.typeRequetteListe.push(data);

        });
    }

    public editTypeRequette() {
        this.http.put<TypeRequetteVo>('http://localhost:8080/generated/typeRequette/', this.typeRequette).subscribe(data => {
            this.editHide();
        });

    }

    public findTypeRequette(pojo: TypeRequetteVo) {
        this.http.post<Array<TypeRequetteVo>>('http://localhost:8080/generated/typeRequette/search/', pojo).subscribe(
            value => {
                this.typeRequetteListe = value;
            });
    }

    public detailShow(pojo: TypeRequetteVo) {
        this.typeRequetteDetail = pojo;
        this.typeRequetteShowDetail = true;

    }


    delete(pojo: TypeRequetteVo) {
        this.http.delete<TypeRequetteVo>('http://localhost:8080/generated/typeRequette/id/' + pojo.id).subscribe(
            value => {
                var index = this.typeRequetteListe.indexOf(pojo);
                if (index > -1) {
                    this.typeRequetteListe.splice(index, 1);
                }
            }
        );


    }


    public findBylibelle(ref: string) {
        this.http.get<TypeRequetteVo>('http://localhost:8080/generated/typeRequette/libelle/' + ref).subscribe(
            value => {
                if (value != null) {
                    this.typeRequette = value;
                }
            }
        );
    }


    /***********************************************************************************************/
    private _typeRequetteShowDetail: boolean;

    public detailHide() {

        this.typeRequetteShowDetail = false;
        this.typeRequetteDetail = null;
    }

    private _typeRequetteShowEdit: boolean;

    private _typeRequetteShowCreate: boolean;

    get typeRequetteShowEdit(): boolean {
        return this._typeRequetteShowEdit;
    }

    set typeRequetteShowEdit(value: boolean) {
        this._typeRequetteShowEdit = value;
    }

    get typeRequetteShowCreate(): boolean {
        return this._typeRequetteShowCreate;
    }

    set typeRequetteShowCreate(value: boolean) {
        this._typeRequetteShowCreate = value;
    }

    public editShow(pojo: TypeRequetteVo) {

        this.typeRequetteShowEdit = true;
        this.typeRequette = pojo;
    }

    public editHide() {

        this.typeRequetteShowEdit = false;
        this.typeRequette = new TypeRequetteVo();
    }

    public createShow() {

        this.typeRequetteShowCreate = true;
        this.typeRequette = new TypeRequetteVo();
    }

    public createHide() {

        this.typeRequetteShowCreate = false;
        this.typeRequette = new TypeRequetteVo();
    }
}