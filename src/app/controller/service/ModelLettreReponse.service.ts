import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {ModelLettreReponseVo} from '../model/modelLettreReponse.model';
import {UserVo} from '../model/User.model';
import {CategorieModelLettreReponseVo} from '../model/CategorieModelLettreReponse.model';
import {LettreModel} from '../model/lettre-model.model';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ModelLettreReponseService {

    constructor(private http: HttpClient,
                private messageService: MessageService) { }
    get categorieModelLettreReponses(): Array<CategorieModelLettreReponseVo> {
        return this._categorieModelLettreReponses;
    }

    set categorieModelLettreReponses(value: Array<CategorieModelLettreReponseVo>) {
        this._categorieModelLettreReponses = value;
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

    get modelLettreReponse(): ModelLettreReponseVo {
        if (this._modelLettreReponse == null) {
            this._modelLettreReponse = new ModelLettreReponseVo();
        }
        return this._modelLettreReponse;
    }

    set modelLettreReponse(value: ModelLettreReponseVo) {
        this._modelLettreReponse = value;
    }

    get modelLettreReponseListe(): Array<ModelLettreReponseVo> {
        /*if (this._modelLettreReponseListe === null) {
            this._modelLettreReponseListe = new Array<ModelLettreReponseVo>();
        }
        this._modelLettreReponseListe.forEach(mod => {
            mod = new ModelLettreReponseVo();
            mod.lettreModel = new LettreModel();
            mod.categorieModelLettreReponseVo = new CategorieModelLettreReponseVo();
        });*/
        return this._modelLettreReponseListe;
    }

    set modelLettreReponseListe(value: Array<ModelLettreReponseVo>) {
        this._modelLettreReponseListe = value ;
    }

    get modelLettreReponseDetail(): ModelLettreReponseVo {
        return this._modelLettreReponseDetail;
    }

    set modelLettreReponseDetail(value: ModelLettreReponseVo) {
        this._modelLettreReponseDetail = value ;
    }

    get modelLettreReponseSearch(): ModelLettreReponseVo {
        return this._modelLettreReponseSearch;
    }

    set modelLettreReponseSearch(value: ModelLettreReponseVo) {
        this._modelLettreReponseSearch = value ;
    }

    get modelLettreReponseShowDetail(): boolean  {
        return this._modelLettreReponseShowDetail;
    }

    set modelLettreReponseShowDetail(value: boolean ) {
        this._modelLettreReponseShowDetail = value ;
    }

    get editableModelLettreReponses(): Array<ModelLettreReponseVo> {
        return this._editableModelLettreReponses;
    }

    set editableModelLettreReponses(value: Array<ModelLettreReponseVo>) {
        this._editableModelLettreReponses = value;
    }
    private _modelLettreReponseDetail: ModelLettreReponseVo =  new ModelLettreReponseVo() ;
    private _modelLettreReponseListe: Array<ModelLettreReponseVo> = new Array<ModelLettreReponseVo>();
    private _modelLettreReponseSearch: ModelLettreReponseVo = new ModelLettreReponseVo();
    private _modelLettreReponse: ModelLettreReponseVo =  new ModelLettreReponseVo();
    private _searchedModelLettreReponses: Array<ModelLettreReponseVo> = new Array<ModelLettreReponseVo>();
    private _editableModelLettreReponses: Array<ModelLettreReponseVo> = new Array<ModelLettreReponseVo>();
    private _categorieModelLettreReponses: Array<CategorieModelLettreReponseVo> = new Array<CategorieModelLettreReponseVo>();
    private _createdBys: Array<UserVo> = new Array<UserVo>();
    private _updatedBys: Array<UserVo> = new Array<UserVo>();
    private _createModelLettre: boolean;


    /***********************************************************************************************/
    private _modelLettreReponseShowDetail: boolean;

    public findAll() {
        this.http.get<Array<ModelLettreReponseVo>>('http://localhost:8080/generated/modelLettreReponse/').subscribe(
            value => {
                if (value != null) {
                    this.modelLettreReponseListe = value;
                    this.editableModelLettreReponses = value;
                }
            });
    }

    public saveModelLettreReponse() {
        this.http.post<ModelLettreReponseVo>('http://localhost:8080/generated/modelLettreReponse/', this.modelLettreReponse).subscribe(data => {
            if (data != null) {
                this.modelLettreReponseListe.push(data);
                this.showSuccess();
            }

        });
    }

    public editModelLettreReponse() {
        this.http.post<ModelLettreReponseVo>('http://localhost:8080/generated/modelLettreReponse/edit', this.modelLettreReponse).subscribe(data => {
            if(data != null){
                this.showInfo();
            }
        });
    }

    public findModelLettreReponse( pojo: ModelLettreReponseVo ) {
        this.http.post<Array<ModelLettreReponseVo>>('http://localhost:8080/generated/modelLettreReponse/search/', pojo).subscribe(
            value => {
                this.modelLettreReponseListe = value;
            } );
    }

    public detailShow( pojo: ModelLettreReponseVo ) {
        this.modelLettreReponseDetail = pojo;
        this.modelLettreReponseShowDetail = true;

    }



    delete(pojo: ModelLettreReponseVo) {
        this.http.delete<ModelLettreReponseVo>('http://localhost:8080/generated/modelLettreReponse/id/' + pojo.id).subscribe(
            value => {
                let index = this.modelLettreReponseListe.indexOf(pojo);
                if (index > -1) {
                    this.modelLettreReponseListe.splice(index, 1);
                }
            }
        );


    }


    public findBylibelle(ref: string) {
        this.http.get<ModelLettreReponseVo>('http://localhost:8080/generated/modelLettreReponse/libelle/' + ref).subscribe(
            value => {
                if (value != null) { this.modelLettreReponse = value; }
            }
        );
    }

    public findAllcategorieModelLettreReponses() {
        this.http.get<Array<CategorieModelLettreReponseVo>>('http://localhost:8080/generated/categorieModelLettreReponse/').subscribe(
            value => {
                if (value != null) { this.categorieModelLettreReponses = value; }
            });
    }
    public findAllcreatedBys() {
        this.http.get<Array<UserVo>>('http://localhost:8080/generated/user/').subscribe(
            value => {
                if (value != null) { this.createdBys = value; }
            }
        );
    }
    public findAllupdatedBys() {
        this.http.get<Array<UserVo>>('http://localhost:8080/generated/user/').subscribe(
            value => {
                if (value != null) { this.updatedBys = value; }
            }
        );
    }
    public detailHide() {

        this.modelLettreReponseShowDetail = false;
        this.modelLettreReponseDetail = null;
    }
    public uploadFile(file: FormData) {
        this.http.post<number>('http://localhost:8080/generated/modelLettreReponse/uploadFile' , file).subscribe(
            data => {
                if (data === 1) {
                    document.getElementById('fa').style.display = ' inline';
                    document.getElementById('label2').innerText = 'sucess';
                    document.getElementById('label2').style.color = 'green';
                    this.saveModelLettreReponse();
                }
                console.log('sucess');
            }, eror => {
                console.log('eroro', eror);
            });
    }
    public uploadFileEdit(file: FormData, disp: boolean) {
        console.log(file);
        if(disp === false){
            this.editModelLettreReponse();
        } else{
            this.http.post<number>('http://localhost:8080/generated/modelLettreReponse/uploadFile' , file).subscribe(
                data => {
                    if (data === 1) {
                        this.editModelLettreReponse();
                        document.getElementById('fa').style.display = ' inline';
                        document.getElementById('label2').innerText = 'sucess';
                        document.getElementById('label2').style.color = 'green';
                    }
                    console.log('sucess');
                }, eror => {
                    console.log('eroro', eror);
                });
        }
    }
    showSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'modelLettreReponse is saved'});
    }
    showSuccess1() {
        this.messageService.add({key: 'c', sticky: true,  severity: 'info', summary: 'Download completed', detail: ''});
    }
    showInfo() {
        this.messageService.add({severity: 'info', summary: 'Info Message', detail: 'modelLettreReponse is edited'});
    }
    private _letttreModelType: string;

    get letttreModelType(): string {
        return this._letttreModelType;
    }

    set letttreModelType(value: string) {
        this._letttreModelType = value;
    }
    private _imageName: string;

    get imageName(): string {
        return this._imageName;
    }

    set imageName(value: string) {
        this._imageName = value;
    }

    downloadFile(name: string){
        this.http.get<ModelLettreReponseVo>('http://localhost:8080/generated/modelLettreReponse/downloadFile/' + name).subscribe(
            data => {
                if (data != null) {
                    console.log('sucess');
                    this.letttreModelType = data.type;
                    console.log(this.letttreModelType);
                    if (this.letttreModelType === 'application/pdf'){
                        this.imageName = 'raw.jpg';
                    } else {
                        this.imageName = 'microsoft-office-word.png';
                    }
                    this.showSuccess1();
                }}, eror => {
                console.log('eroro', eror);
            });
    }
    /*    ShowFile(): void {
            this.http.get('http://localhost:8080/generated/modelLettreReponse/show').subscribe(
                data => {
                        this.showSuccess();
                        console.log('sucess' + data);
                }, eror => {
                    console.log('eroro', eror);
                });
        }*/
    // tslint:disable-next-line:ban-types
    //private ResponseContentType: any;
    /* public downloadFile(docFile: string): void {
 this.showSuccess();
 this.http.get<void>('http://localhost:8080/generated/modelLettreReponse/downloadFile/' + docFile);
         }*/
// return this.http.get('http://localhost:8080/generated/modelLettreReponse/downloadFile/' + docFile);

    public GetFile(docFile: string): any {
        return this.http.get('http://localhost:8080/generated/modelLettreReponse/getPDF/' + docFile);
    }
    get createModelLettre(): boolean {
        return this._createModelLettre;
    }

    set createModelLettre(value: boolean) {
        this._createModelLettre = value;
    }

    public create() {
        this.createModelLettre = true;
    }
}
