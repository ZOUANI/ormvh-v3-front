import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PhaseAdminVo} from '../model/phaseAdmin.model';

@Injectable({
    providedIn: 'root'
})
export class PhaseAdminService {

    constructor(private http: HttpClient) {
    }

    private _phaseAdminDetail: PhaseAdminVo = new PhaseAdminVo();
    private _phaseAdminListe: Array<PhaseAdminVo> = new Array<PhaseAdminVo>();

    private _phaseAdminSearch: PhaseAdminVo = new PhaseAdminVo();
    private _phaseAdmin: PhaseAdminVo = new PhaseAdminVo();
    private _searchedPhaseAdmins: Array<PhaseAdminVo> = new Array<PhaseAdminVo>();
    private _editablePhaseAdmins: Array<PhaseAdminVo> = new Array<PhaseAdminVo>();

    get phaseAdmin(): PhaseAdminVo {
        if (this._phaseAdmin == null) {
            this._phaseAdmin = new PhaseAdminVo();
        }
        return this._phaseAdmin;
    }

    set phaseAdmin(value: PhaseAdminVo) {
        this._phaseAdmin = value;
    }

    get phaseAdminListe(): Array<PhaseAdminVo> {
        return this._phaseAdminListe;
    }

    set phaseAdminListe(value: Array<PhaseAdminVo>) {
        this._phaseAdminListe = value;
    }

    get phaseAdminDetail(): PhaseAdminVo {
        return this._phaseAdminDetail;
    }

    set phaseAdminDetail(value: PhaseAdminVo) {
        this._phaseAdminDetail = value;
    }

    get phaseAdminSearch(): PhaseAdminVo {
        return this._phaseAdminSearch;
    }

    set phaseAdminSearch(value: PhaseAdminVo) {
        this._phaseAdminSearch = value;
    }

    get phaseAdminShowDetail(): boolean {
        return this._phaseAdminShowDetail;
    }

    set phaseAdminShowDetail(value: boolean) {
        this._phaseAdminShowDetail = value;
    }

    get editablePhaseAdmins(): Array<PhaseAdminVo> {
        return this._editablePhaseAdmins;
    }

    set editablePhaseAdmins(value: Array<PhaseAdminVo>) {
        this._editablePhaseAdmins = value;
    }

    public findAll() {
       return  this.http.get<Array<PhaseAdminVo>>('http://localhost:8080/generated/phaseAdmin/');
    }

    public savePhaseAdmin() {
        this.http.post<PhaseAdminVo>('http://localhost:8080/generated/phaseAdmin/', this.phaseAdmin).subscribe(data => {
            this.createHide();
            this.phaseAdminListe.push(data);

        });
    }

    public editPhaseAdmin() {
        this.http.put<PhaseAdminVo>('http://localhost:8080/generated/phaseAdmin/', this.phaseAdmin).subscribe(data => {
            this.editHide();
        });

    }

    public findPhaseAdmin(pojo: PhaseAdminVo) {
        this.http.post<Array<PhaseAdminVo>>('http://localhost:8080/generated/phaseAdmin/search/', pojo).subscribe(
            value => {
                this.phaseAdminListe = value;
            });
    }

    public detailShow(pojo: PhaseAdminVo) {
        this.phaseAdminDetail = pojo;
        this.phaseAdminShowDetail = true;

    }


    delete(pojo: PhaseAdminVo) {
        this.http.delete<PhaseAdminVo>('http://localhost:8080/generated/phaseAdmin/id/' + pojo.id).subscribe(
            value => {
                var index = this.phaseAdminListe.indexOf(pojo);
                if (index > -1) {
                    this.phaseAdminListe.splice(index, 1);
                }
            }
        );


    }


    public findBylibelle(ref: string) {
        this.http.get<PhaseAdminVo>('http://localhost:8080/generated/phaseAdmin/libelle/' + ref).subscribe(
            value => {
                if (value != null) {
                    this.phaseAdmin = value;
                }
            }
        );
    }


    /***********************************************************************************************/
    private _phaseAdminShowDetail: boolean;

    public detailHide() {

        this.phaseAdminShowDetail = false;
        this.phaseAdminDetail = null;
    }

    private _phaseAdminShowEdit: boolean;

    private _phaseAdminShowCreate: boolean;

    get phaseAdminShowEdit(): boolean {
        return this._phaseAdminShowEdit;
    }

    set phaseAdminShowEdit(value: boolean) {
        this._phaseAdminShowEdit = value;
    }

    get phaseAdminShowCreate(): boolean {
        return this._phaseAdminShowCreate;
    }

    set phaseAdminShowCreate(value: boolean) {
        this._phaseAdminShowCreate = value;
    }

    public editShow(pojo: PhaseAdminVo) {

        this.phaseAdminShowEdit = true;
        this.phaseAdmin = pojo;
    }

    public editHide() {

        this.phaseAdminShowEdit = false;
        this.phaseAdmin = new PhaseAdminVo();
    }

    public createShow() {

        this.phaseAdminShowCreate = true;
        this.phaseAdmin = new PhaseAdminVo();
    }

    public createHide() {

        this.phaseAdminShowCreate = false;
        this.phaseAdmin = new PhaseAdminVo();
    }
}