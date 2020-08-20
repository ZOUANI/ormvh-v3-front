import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NationalityVo} from '../model/nationality.model';
import {UserVo} from '../model/User.model';

@Injectable({
    providedIn: 'root'
})
export class NationalityService {

    constructor(private http: HttpClient) {
    }

    private _nationalityDetail: NationalityVo = new NationalityVo();
    private _nationalityListe: Array<NationalityVo> = new Array<NationalityVo>();

    private _nationalitySearch: NationalityVo = new NationalityVo();
    private _nationality: NationalityVo = new NationalityVo();
    private _searchedNationalitys: Array<NationalityVo> = new Array<NationalityVo>();
    private _editableNationalitys: Array<NationalityVo> = new Array<NationalityVo>();
    private _updatedBys: Array<UserVo> = new Array<UserVo>();
    private _createdBys: Array<UserVo> = new Array<UserVo>();

    get updatedBys(): Array<UserVo> {
        return this._updatedBys;
    }

    set updatedBys(value: Array<UserVo>) {
        this._updatedBys = value;
    }

    get createdBys(): Array<UserVo> {
        return this._createdBys;
    }

    set createdBys(value: Array<UserVo>) {
        this._createdBys = value;
    }

    get nationality(): NationalityVo {
        if (this._nationality == null) {
            this._nationality = new NationalityVo();
        }
        return this._nationality;
    }

    set nationality(value: NationalityVo) {
        this._nationality = value;
    }

    get nationalityListe(): Array<NationalityVo> {
        return this._nationalityListe;
    }

    set nationalityListe(value: Array<NationalityVo>) {
        this._nationalityListe = value;
    }

    get nationalityDetail(): NationalityVo {
        return this._nationalityDetail;
    }

    set nationalityDetail(value: NationalityVo) {
        this._nationalityDetail = value;
    }

    get nationalitySearch(): NationalityVo {
        return this._nationalitySearch;
    }

    set nationalitySearch(value: NationalityVo) {
        this._nationalitySearch = value;
    }

    get nationalityShowDetail(): boolean {
        return this._nationalityShowDetail;
    }

    set nationalityShowDetail(value: boolean) {
        this._nationalityShowDetail = value;
    }

    get editableNationalitys(): Array<NationalityVo> {
        return this._editableNationalitys;
    }

    set editableNationalitys(value: Array<NationalityVo>) {
        this._editableNationalitys = value;
    }

    public findAll() {
        this.http.get<Array<NationalityVo>>('http://localhost:8080/generated/nationality/').subscribe(
            value => {
                if (value != null) {
                    this.nationalityListe = value;
                    this.editableNationalitys = value;

                }
            }
        );
    }

    public saveNationality() {
        this.http.post<NationalityVo>('http://localhost:8080/generated/nationality/', this.nationality).subscribe(data => {
            this.createHide();
            this.nationalityListe.push(data);

        });
    }

    public editNationality() {
        this.http.put<NationalityVo>('http://localhost:8080/generated/nationality/', this.nationality).subscribe(data => {
            this.editHide();
        });

    }

    public findNationality(pojo: NationalityVo) {
        this.http.post<Array<NationalityVo>>('http://localhost:8080/generated/nationality/search/', pojo).subscribe(
            value => {
                this.nationalityListe = value;
            });
    }

    public detailShow(pojo: NationalityVo) {
        this.nationalityDetail = pojo;
        this.nationalityShowDetail = true;

    }


    delete(pojo: NationalityVo) {
        this.http.delete<NationalityVo>('http://localhost:8080/generated/nationality/id/' + pojo.id).subscribe(
            value => {
                var index = this.nationalityListe.indexOf(pojo);
                if (index > -1) {
                    this.nationalityListe.splice(index, 1);
                }
            }
        );


    }


    public findBylibelle(ref: string) {
        this.http.get<NationalityVo>('http://localhost:8080/generated/nationality/libelle/' + ref).subscribe(
            value => {
                if (value != null) {
                    this.nationality = value;
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

    public findAllcreatedBys() {
        this.http.get<Array<UserVo>>('http://localhost:8080/generated/user/').subscribe(
            value => {
                if (value != null) {
                    this.createdBys = value;
                }
            }
        );
    }


    /***********************************************************************************************/
    private _nationalityShowDetail: boolean;

    public detailHide() {

        this.nationalityShowDetail = false;
        this.nationalityDetail = null;
    }

    private _nationalityShowEdit: boolean;

    private _nationalityShowCreate: boolean;

    get nationalityShowEdit(): boolean {
        return this._nationalityShowEdit;
    }

    set nationalityShowEdit(value: boolean) {
        this._nationalityShowEdit = value;
    }

    get nationalityShowCreate(): boolean {
        return this._nationalityShowCreate;
    }

    set nationalityShowCreate(value: boolean) {
        this._nationalityShowCreate = value;
    }

    public editShow(pojo: NationalityVo) {

        this.nationalityShowEdit = true;
        this.nationality = pojo;
    }

    public editHide() {

        this.nationalityShowEdit = false;
        this.nationality = new NationalityVo();
    }

    public createShow() {

        this.nationalityShowCreate = true;
        this.nationality = new NationalityVo();
    }

    public createHide() {

        this.nationalityShowCreate = false;
        this.nationality = new NationalityVo();
    }
}