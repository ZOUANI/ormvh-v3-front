import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NatureClientVo} from '../model/natureClient.model';

@Injectable({
    providedIn: 'root'
})
export class NatureClientService {

    constructor(private http: HttpClient) {
    }

    private _natureClientDetail: NatureClientVo = new NatureClientVo();
    private _natureClientListe: Array<NatureClientVo> = new Array<NatureClientVo>();

    private _natureClientSearch: NatureClientVo = new NatureClientVo();
    private _natureClient: NatureClientVo = new NatureClientVo();
    private _searchedNatureClients: Array<NatureClientVo> = new Array<NatureClientVo>();
    private _editableNatureClients: Array<NatureClientVo> = new Array<NatureClientVo>();

    get natureClient(): NatureClientVo {
        if (this._natureClient == null) {
            this._natureClient = new NatureClientVo();
        }
        return this._natureClient;
    }

    set natureClient(value: NatureClientVo) {
        this._natureClient = value;
    }

    get natureClientListe(): Array<NatureClientVo> {
        return this._natureClientListe;
    }

    set natureClientListe(value: Array<NatureClientVo>) {
        this._natureClientListe = value;
    }

    get natureClientDetail(): NatureClientVo {
        return this._natureClientDetail;
    }

    set natureClientDetail(value: NatureClientVo) {
        this._natureClientDetail = value;
    }

    get natureClientSearch(): NatureClientVo {
        return this._natureClientSearch;
    }

    set natureClientSearch(value: NatureClientVo) {
        this._natureClientSearch = value;
    }

    get natureClientShowDetail(): boolean {
        return this._natureClientShowDetail;
    }

    set natureClientShowDetail(value: boolean) {
        this._natureClientShowDetail = value;
    }

    get editableNatureClients(): Array<NatureClientVo> {
        return this._editableNatureClients;
    }

    set editableNatureClients(value: Array<NatureClientVo>) {
        this._editableNatureClients = value;
    }

    public findAll() {
        return this.http.get<Array<NatureClientVo>>('http://localhost:8080/generated/natureClient/');

    }

    public saveNatureClient() {
        this.http.post<NatureClientVo>('http://localhost:8080/generated/natureClient/', this.natureClient).subscribe(data => {
            this.createHide();
            this.natureClientListe.push(data);

        });
    }

    public editNatureClient() {
        this.http.put<NatureClientVo>('http://localhost:8080/generated/natureClient/', this.natureClient).subscribe(data => {
            this.editHide();
        });

    }

    public findNatureClient(pojo: NatureClientVo) {
        this.http.post<Array<NatureClientVo>>('http://localhost:8080/generated/natureClient/search/', pojo).subscribe(
            value => {
                this.natureClientListe = value;
            });
    }

    public detailShow(pojo: NatureClientVo) {
        this.natureClientDetail = pojo;
        this.natureClientShowDetail = true;

    }


    delete(pojo: NatureClientVo) {
        this.http.delete<NatureClientVo>('http://localhost:8080/generated/natureClient/id/' + pojo.id).subscribe(
            value => {
                var index = this.natureClientListe.indexOf(pojo);
                if (index > -1) {
                    this.natureClientListe.splice(index, 1);
                }
            }
        );


    }


    public findBylibelle(ref: string) {
        this.http.get<NatureClientVo>('http://localhost:8080/generated/natureClient/libelle/' + ref).subscribe(
            value => {
                if (value != null) {
                    this.natureClient = value;
                }
            }
        );
    }


    /***********************************************************************************************/
    private _natureClientShowDetail: boolean;

    public detailHide() {

        this.natureClientShowDetail = false;
        this.natureClientDetail = null;
    }

    private _natureClientShowEdit: boolean;

    private _natureClientShowCreate: boolean;

    get natureClientShowEdit(): boolean {
        return this._natureClientShowEdit;
    }

    set natureClientShowEdit(value: boolean) {
        this._natureClientShowEdit = value;
    }

    get natureClientShowCreate(): boolean {
        return this._natureClientShowCreate;
    }

    set natureClientShowCreate(value: boolean) {
        this._natureClientShowCreate = value;
    }

    public editShow(pojo: NatureClientVo) {

        this.natureClientShowEdit = true;
        this.natureClient = pojo;
    }

    public editHide() {

        this.natureClientShowEdit = false;
        this.natureClient = new NatureClientVo();
    }

    public createShow() {

        this.natureClientShowCreate = true;
        this.natureClient = new NatureClientVo();
    }

    public createHide() {

        this.natureClientShowCreate = false;
        this.natureClient = new NatureClientVo();
    }
}
