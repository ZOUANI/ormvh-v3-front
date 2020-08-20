import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SexeVo} from '../model/sexe.model';

@Injectable({
    providedIn: 'root'
})
export class SexeService {

    constructor(private http: HttpClient) {
    }

    private _sexeDetail: SexeVo = new SexeVo();
    private _sexeListe: Array<SexeVo> = new Array<SexeVo>();

    private _sexeSearch: SexeVo = new SexeVo();
    private _sexe: SexeVo = new SexeVo();
    private _searchedSexes: Array<SexeVo> = new Array<SexeVo>();
    private _editableSexes: Array<SexeVo> = new Array<SexeVo>();

    get sexe(): SexeVo {
        if (this._sexe == null) {
            this._sexe = new SexeVo();
        }
        return this._sexe;
    }

    set sexe(value: SexeVo) {
        this._sexe = value;
    }

    get sexeListe(): Array<SexeVo> {
        return this._sexeListe;
    }

    set sexeListe(value: Array<SexeVo>) {
        this._sexeListe = value;
    }

    get sexeDetail(): SexeVo {
        return this._sexeDetail;
    }

    set sexeDetail(value: SexeVo) {
        this._sexeDetail = value;
    }

    get sexeSearch(): SexeVo {
        return this._sexeSearch;
    }

    set sexeSearch(value: SexeVo) {
        this._sexeSearch = value;
    }

    get sexeShowDetail(): boolean {
        return this._sexeShowDetail;
    }

    set sexeShowDetail(value: boolean) {
        this._sexeShowDetail = value;
    }

    get editableSexes(): Array<SexeVo> {
        return this._editableSexes;
    }

    set editableSexes(value: Array<SexeVo>) {
        this._editableSexes = value;
    }

    public findAll() {
        this.http.get<Array<SexeVo>>('http://localhost:8080/generated/sexe/').subscribe(
            value => {
                if (value != null) {
                    this.sexeListe = value;
                    this.editableSexes = value;

                }
            }
        );
    }

    public saveSexe() {
        this.http.post<SexeVo>('http://localhost:8080/generated/sexe/', this.sexe).subscribe(data => {
            this.createHide();
            this.sexeListe.push(data);

        });
    }

    public editSexe() {
        this.http.put<SexeVo>('http://localhost:8080/generated/sexe/', this.sexe).subscribe(data => {
            this.editHide();
        });

    }

    public findSexe(pojo: SexeVo) {
        this.http.post<Array<SexeVo>>('http://localhost:8080/generated/sexe/search/', pojo).subscribe(
            value => {
                this.sexeListe = value;
            });
    }

    public detailShow(pojo: SexeVo) {
        this.sexeDetail = pojo;
        this.sexeShowDetail = true;

    }


    delete(pojo: SexeVo) {
        this.http.delete<SexeVo>('http://localhost:8080/generated/sexe/id/' + pojo.id).subscribe(
            value => {
                var index = this.sexeListe.indexOf(pojo);
                if (index > -1) {
                    this.sexeListe.splice(index, 1);
                }
            }
        );


    }


    public findBylibelle(ref: string) {
        this.http.get<SexeVo>('http://localhost:8080/generated/sexe/libelle/' + ref).subscribe(
            value => {
                if (value != null) {
                    this.sexe = value;
                }
            }
        );
    }


    /***********************************************************************************************/
    private _sexeShowDetail: boolean;

    public detailHide() {

        this.sexeShowDetail = false;
        this.sexeDetail = null;
    }

    private _sexeShowEdit: boolean;

    private _sexeShowCreate: boolean;

    get sexeShowEdit(): boolean {
        return this._sexeShowEdit;
    }

    set sexeShowEdit(value: boolean) {
        this._sexeShowEdit = value;
    }

    get sexeShowCreate(): boolean {
        return this._sexeShowCreate;
    }

    set sexeShowCreate(value: boolean) {
        this._sexeShowCreate = value;
    }

    public editShow(pojo: SexeVo) {

        this.sexeShowEdit = true;
        this.sexe = pojo;
    }

    public editHide() {

        this.sexeShowEdit = false;
        this.sexe = new SexeVo();
    }

    public createShow() {

        this.sexeShowCreate = true;
        this.sexe = new SexeVo();
    }

    public createHide() {

        this.sexeShowCreate = false;
        this.sexe = new SexeVo();
    }
}