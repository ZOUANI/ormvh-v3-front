import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CategorieModelLettreReponseVo} from '../model/categorieModelLettreReponse.model';
import {UserVo} from '../model/User.model';

@Injectable({
    providedIn: 'root'
})
export class CategorieModelLettreReponseService {

    constructor(private http: HttpClient) {
    }

    private _categorieModelLettreReponseDetail: CategorieModelLettreReponseVo = new CategorieModelLettreReponseVo();
    private _categorieModelLettreReponseListe: Array<CategorieModelLettreReponseVo> = new Array<CategorieModelLettreReponseVo>();

    private _categorieModelLettreReponseSearch: CategorieModelLettreReponseVo = new CategorieModelLettreReponseVo();
    private _categorieModelLettreReponse: CategorieModelLettreReponseVo = new CategorieModelLettreReponseVo();
    private _searchedCategorieModelLettreReponses: Array<CategorieModelLettreReponseVo> = new Array<CategorieModelLettreReponseVo>();
    private _editableCategorieModelLettreReponses: Array<CategorieModelLettreReponseVo> = new Array<CategorieModelLettreReponseVo>();
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

    get categorieModelLettreReponse(): CategorieModelLettreReponseVo {
        if (this._categorieModelLettreReponse == null) {
            this._categorieModelLettreReponse = new CategorieModelLettreReponseVo();
        }
        return this._categorieModelLettreReponse;
    }

    set categorieModelLettreReponse(value: CategorieModelLettreReponseVo) {
        this._categorieModelLettreReponse = value;
    }

    get categorieModelLettreReponseListe(): Array<CategorieModelLettreReponseVo> {
        return this._categorieModelLettreReponseListe;
    }

    set categorieModelLettreReponseListe(value: Array<CategorieModelLettreReponseVo>) {
        this._categorieModelLettreReponseListe = value;
    }

    get categorieModelLettreReponseDetail(): CategorieModelLettreReponseVo {
        return this._categorieModelLettreReponseDetail;
    }

    set categorieModelLettreReponseDetail(value: CategorieModelLettreReponseVo) {
        this._categorieModelLettreReponseDetail = value;
    }

    get categorieModelLettreReponseSearch(): CategorieModelLettreReponseVo {
        return this._categorieModelLettreReponseSearch;
    }

    set categorieModelLettreReponseSearch(value: CategorieModelLettreReponseVo) {
        this._categorieModelLettreReponseSearch = value;
    }

    get categorieModelLettreReponseShowDetail(): boolean {
        return this._categorieModelLettreReponseShowDetail;
    }

    set categorieModelLettreReponseShowDetail(value: boolean) {
        this._categorieModelLettreReponseShowDetail = value;
    }

    get editableCategorieModelLettreReponses(): Array<CategorieModelLettreReponseVo> {
        return this._editableCategorieModelLettreReponses;
    }

    set editableCategorieModelLettreReponses(value: Array<CategorieModelLettreReponseVo>) {
        this._editableCategorieModelLettreReponses = value;
    }

    public findAll() {
        this.http.get<Array<CategorieModelLettreReponseVo>>('http://localhost:8080/generated/categorieModelLettreReponse/').subscribe(
            value => {
                if (value != null) {
                    this.categorieModelLettreReponseListe = value;
                    this.editableCategorieModelLettreReponses = value;

                }
            }
        );
    }

    public saveCategorieModelLettreReponse() {
        this.http.post<CategorieModelLettreReponseVo>('http://localhost:8080/generated/categorieModelLettreReponse/', this.categorieModelLettreReponse).subscribe(data => {
            this.createHide();
            this.categorieModelLettreReponseListe.push(data);

        });
    }

    public editCategorieModelLettreReponse() {
        this.http.put<CategorieModelLettreReponseVo>('http://localhost:8080/generated/categorieModelLettreReponse/', this.categorieModelLettreReponse).subscribe(data => {
            this.editHide();
        });

    }

    public findCategorieModelLettreReponse(pojo: CategorieModelLettreReponseVo) {
        this.http.post<Array<CategorieModelLettreReponseVo>>('http://localhost:8080/generated/categorieModelLettreReponse/search/', pojo).subscribe(
            value => {
                this.categorieModelLettreReponseListe = value;
            });
    }

    public detailShow(pojo: CategorieModelLettreReponseVo) {
        this.categorieModelLettreReponseDetail = pojo;
        this.categorieModelLettreReponseShowDetail = true;

    }


    delete(pojo: CategorieModelLettreReponseVo) {
        this.http.delete<CategorieModelLettreReponseVo>('http://localhost:8080/generated/categorieModelLettreReponse/id/' + pojo.id).subscribe(
            value => {
                var index = this.categorieModelLettreReponseListe.indexOf(pojo);
                if (index > -1) {
                    this.categorieModelLettreReponseListe.splice(index, 1);
                }
            }
        );


    }


    public findBylibelle(ref: string) {
        this.http.get<CategorieModelLettreReponseVo>('http://localhost:8080/generated/categorieModelLettreReponse/libelle/' + ref).subscribe(
            value => {
                if (value != null) {
                    this.categorieModelLettreReponse = value;
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
    private _categorieModelLettreReponseShowDetail: boolean;

    public detailHide() {

        this.categorieModelLettreReponseShowDetail = false;
        this.categorieModelLettreReponseDetail = null;
    }

    private _categorieModelLettreReponseShowEdit: boolean;

    private _categorieModelLettreReponseShowCreate: boolean;

    get categorieModelLettreReponseShowEdit(): boolean {
        return this._categorieModelLettreReponseShowEdit;
    }

    set categorieModelLettreReponseShowEdit(value: boolean) {
        this._categorieModelLettreReponseShowEdit = value;
    }

    get categorieModelLettreReponseShowCreate(): boolean {
        return this._categorieModelLettreReponseShowCreate;
    }

    set categorieModelLettreReponseShowCreate(value: boolean) {
        this._categorieModelLettreReponseShowCreate = value;
    }

    public editShow(pojo: CategorieModelLettreReponseVo) {

        this.categorieModelLettreReponseShowEdit = true;
        this.categorieModelLettreReponse = pojo;
    }

    public editHide() {

        this.categorieModelLettreReponseShowEdit = false;
        this.categorieModelLettreReponse = new CategorieModelLettreReponseVo();
    }

    public createShow() {

        this.categorieModelLettreReponseShowCreate = true;
        this.categorieModelLettreReponse = new CategorieModelLettreReponseVo();
    }

    public createHide() {

        this.categorieModelLettreReponseShowCreate = false;
        this.categorieModelLettreReponse = new CategorieModelLettreReponseVo();
    }
}