import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BordereauVo} from '../model/bordereau.model';
import {UserVo} from '../model/User.model';

@Injectable({
    providedIn: 'root'
})
export class BordereauService {

    constructor(private http: HttpClient) {
    }

    private _bordereauDetail: BordereauVo = new BordereauVo();
    private _bordereauListe: Array<BordereauVo> = new Array<BordereauVo>();

    private _bordereauSearch: BordereauVo = new BordereauVo();
    private _bordereau: BordereauVo = new BordereauVo();
    private _searchedBordereaus: Array<BordereauVo> = new Array<BordereauVo>();
    private _editableBordereaus: Array<BordereauVo> = new Array<BordereauVo>();
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

    get bordereau(): BordereauVo {
        if (this._bordereau == null) {
            this._bordereau = new BordereauVo();
        }
        return this._bordereau;
    }

    set bordereau(value: BordereauVo) {
        this._bordereau = value;
    }

    get bordereauListe(): Array<BordereauVo> {
        return this._bordereauListe;
    }

    set bordereauListe(value: Array<BordereauVo>) {
        this._bordereauListe = value;
    }

    get bordereauDetail(): BordereauVo {
        return this._bordereauDetail;
    }

    set bordereauDetail(value: BordereauVo) {
        this._bordereauDetail = value;
    }

    get bordereauSearch(): BordereauVo {
        return this._bordereauSearch;
    }

    set bordereauSearch(value: BordereauVo) {
        this._bordereauSearch = value;
    }

    get bordereauShowDetail(): boolean {
        return this._bordereauShowDetail;
    }

    set bordereauShowDetail(value: boolean) {
        this._bordereauShowDetail = value;
    }

    get editableBordereaus(): Array<BordereauVo> {
        return this._editableBordereaus;
    }

    set editableBordereaus(value: Array<BordereauVo>) {
        this._editableBordereaus = value;
    }

    public findAll() {
        this.http.get<Array<BordereauVo>>('http://localhost:8080/generated/bordereau/').subscribe(
            value => {
                if (value != null) {
                    this.bordereauListe = value;
                    this.editableBordereaus = value;

                }
            }
        );
    }

    public saveBordereau() {
        this.http.post<BordereauVo>('http://localhost:8080/generated/bordereau/', this.bordereau).subscribe(data => {
            this.createHide();
            this.bordereauListe.push(data);

        });
    }

    public editBordereau() {
        this.http.put<BordereauVo>('http://localhost:8080/generated/bordereau/', this.bordereau).subscribe(data => {
            this.editHide();
        });

    }

    public findBordereau(pojo: BordereauVo) {
        this.http.post<Array<BordereauVo>>('http://localhost:8080/generated/bordereau/search/', pojo).subscribe(
            value => {
                this.bordereauListe = value;
            });
    }

    public detailShow(pojo: BordereauVo) {
        this.bordereauDetail = pojo;
        this.bordereauShowDetail = true;

    }


    delete(pojo: BordereauVo) {
        this.http.delete<BordereauVo>('http://localhost:8080/generated/bordereau/id/' + pojo.id).subscribe(
            value => {
                var index = this.bordereauListe.indexOf(pojo);
                if (index > -1) {
                    this.bordereauListe.splice(index, 1);
                }
            }
        );


    }


    public findBylibelle(ref: string) {
        this.http.get<BordereauVo>('http://localhost:8080/generated/bordereau/libelle/' + ref).subscribe(
            value => {
                if (value != null) {
                    this.bordereau = value;
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
    private _bordereauShowDetail: boolean;

    public detailHide() {

        this.bordereauShowDetail = false;
        this.bordereauDetail = null;
    }

    private _bordereauShowEdit: boolean;

    private _bordereauShowCreate: boolean;

    get bordereauShowEdit(): boolean {
        return this._bordereauShowEdit;
    }

    set bordereauShowEdit(value: boolean) {
        this._bordereauShowEdit = value;
    }

    get bordereauShowCreate(): boolean {
        return this._bordereauShowCreate;
    }

    set bordereauShowCreate(value: boolean) {
        this._bordereauShowCreate = value;
    }

    public editShow(pojo: BordereauVo) {

        this.bordereauShowEdit = true;
        this.bordereau = pojo;
    }

    public editHide() {

        this.bordereauShowEdit = false;
        this.bordereau = new BordereauVo();
    }

    public createShow() {

        this.bordereauShowCreate = true;
        this.bordereau = new BordereauVo();
    }

    public createHide() {

        this.bordereauShowCreate = false;
        this.bordereau = new BordereauVo();
    }
}