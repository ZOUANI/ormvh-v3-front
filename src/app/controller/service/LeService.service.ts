import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LeServiceVo} from '../model/leService.model';
import {UserVo} from '../model/User.model';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LeServiceService {

    constructor(private http: HttpClient) {
    }

    private _leServiceDetail: LeServiceVo = new LeServiceVo();
    private _leServiceListe: Array<LeServiceVo> = new Array<LeServiceVo>();

    private _leServiceSearch: LeServiceVo = new LeServiceVo();
    private _leService: LeServiceVo = new LeServiceVo();
    private _searchedLeServices: Array<LeServiceVo> = new Array<LeServiceVo>();
    private _editableLeServices: Array<LeServiceVo> = new Array<LeServiceVo>();
    private _chefs: Array<UserVo> = new Array<UserVo>();
    private _createdBys: Array<UserVo> = new Array<UserVo>();
    private _updatedBys: Array<UserVo> = new Array<UserVo>();


    get chefs(): Array<UserVo> {
        return this._chefs;
    }

    set chefs(value: Array<UserVo>) {
        this._chefs = value;
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

    get leService(): LeServiceVo {
        if (this._leService == null) {
            this._leService = new LeServiceVo();
        }
        return this._leService;
    }

    set leService(value: LeServiceVo) {
        this._leService = value;
    }

    get leServiceListe(): Array<LeServiceVo> {
        return this._leServiceListe;
    }

    set leServiceListe(value: Array<LeServiceVo>) {
        this._leServiceListe = value;
    }

    get leServiceDetail(): LeServiceVo {
        return this._leServiceDetail;
    }

    set leServiceDetail(value: LeServiceVo) {
        this._leServiceDetail = value;
    }

    get leServiceSearch(): LeServiceVo {
        return this._leServiceSearch;
    }

    set leServiceSearch(value: LeServiceVo) {
        this._leServiceSearch = value;
    }

    get leServiceShowDetail(): boolean {
        return this._leServiceShowDetail;
    }

    set leServiceShowDetail(value: boolean) {
        this._leServiceShowDetail = value;
    }

    get editableLeServices(): Array<LeServiceVo> {
        return this._editableLeServices;
    }

    set editableLeServices(value: Array<LeServiceVo>) {
        this._editableLeServices = value;
    }

    public findAll() {
        this.http.get<Array<LeServiceVo>>('http://localhost:8080/generated/leService/').subscribe(
            value => {
                if (value != null) {
                    this.leServiceListe = value;
                    this.editableLeServices = value;

                }
            }
        );
    }

    findAllServices(): Observable<Array<LeServiceVo>> {
        return this.http.get<Array<LeServiceVo>>('http://localhost:8080/generated/leService/');
    }

    public saveLeService() {
        console.log(this.leService);
        this.http.post<LeServiceVo>('http://localhost:8080/generated/leService/', this.leService).subscribe(data => {
            this.createHide();
            this.leServiceListe.push(data);

        });
    }

    public editLeService() {
        this.http.put<LeServiceVo>('http://localhost:8080/generated/leService/', this.leService).subscribe(data => {
            this.editHide();
        });

    }

    public findLeService(pojo: LeServiceVo) {
        this.http.post<Array<LeServiceVo>>('http://localhost:8080/generated/leService/search/', pojo).subscribe(
            value => {
                this.leServiceListe = value;
            });
    }

    public detailShow(pojo: LeServiceVo) {
        this.leServiceDetail = pojo;
        this.leServiceShowDetail = true;

    }


    delete(pojo: LeServiceVo) {
        this.http.delete<LeServiceVo>('http://localhost:8080/generated/leService/id/' + pojo.id).subscribe(
            value => {
                var index = this.leServiceListe.indexOf(pojo);
                if (index > -1) {
                    this.leServiceListe.splice(index, 1);
                }
            }
        );


    }


    public findBytitle(ref: string) {
        this.http.get<LeServiceVo>('http://localhost:8080/generated/leService/title/' + ref).subscribe(
            value => {
                if (value != null) {
                    this.leService = value;
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
    public findAllChefs() {
        this.http.get<Array<UserVo>>('http://localhost:8080/generated/user/').subscribe(
            value => {
                if (value != null) {
                    this.chefs = value;
                }
            }
        );
    }


    /***********************************************************************************************/
    private _leServiceShowDetail: boolean;

    public detailHide() {

        this.leServiceShowDetail = false;
        this.leServiceDetail = null;
    }

    private _leServiceShowEdit: boolean;

    private _leServiceShowCreate: boolean;

    get leServiceShowEdit(): boolean {
        return this._leServiceShowEdit;
    }

    set leServiceShowEdit(value: boolean) {
        this._leServiceShowEdit = value;
    }

    get leServiceShowCreate(): boolean {
        return this._leServiceShowCreate;
    }

    set leServiceShowCreate(value: boolean) {
        this._leServiceShowCreate = value;
    }

    public editShow(pojo: LeServiceVo) {

        this.leServiceShowEdit = true;
        this.leService = pojo;
    }

    public editHide() {

        this.leServiceShowEdit = false;
        this.leService = new LeServiceVo();
    }

    public createShow() {

        this.leServiceShowCreate = true;
        this.leService = new LeServiceVo();
    }

    public createHide() {

        this.leServiceShowCreate = false;
        this.leService = new LeServiceVo();
    }
}