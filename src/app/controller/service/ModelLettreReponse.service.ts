import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ModelLettreReponseVo} from '../model/modelLettreReponse.model';
import {UserVo} from '../model/User.model';
import {CategorieModelLettreReponseVo} from '../model/CategorieModelLettreReponse.model';
import {MessageService} from 'primeng';

@Injectable({
    providedIn: 'root'
})
export class ModelLettreReponseService {
    private authKey: string;
    private blob: Blob;
    private requestHeaders: HttpHeaders;

    constructor(private http: HttpClient,
                private messageService: MessageService) {
        this.requestHeaders = new HttpHeaders();
        this.requestHeaders.append('Content-Type', 'application/json');
        this.requestHeaders.append('Accept', 'application/json');
    }

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
        this._modelLettreReponseListe = value;
    }

    get modelLettreReponseDetail(): ModelLettreReponseVo {
        return this._modelLettreReponseDetail;
    }

    set modelLettreReponseDetail(value: ModelLettreReponseVo) {
        this._modelLettreReponseDetail = value;
    }

    get modelLettreReponseSearch(): ModelLettreReponseVo {
        return this._modelLettreReponseSearch;
    }

    set modelLettreReponseSearch(value: ModelLettreReponseVo) {
        this._modelLettreReponseSearch = value;
    }

    get modelLettreReponseShowDetail(): boolean {
        return this._modelLettreReponseShowDetail;
    }

    set modelLettreReponseShowDetail(value: boolean) {
        this._modelLettreReponseShowDetail = value;
    }

    get editableModelLettreReponses(): Array<ModelLettreReponseVo> {
        return this._editableModelLettreReponses;
    }

    set editableModelLettreReponses(value: Array<ModelLettreReponseVo>) {
        this._editableModelLettreReponses = value;
    }

    private _modelLettreReponseDetail: ModelLettreReponseVo = new ModelLettreReponseVo();
    private _modelLettreReponseListe: Array<ModelLettreReponseVo> = new Array<ModelLettreReponseVo>();
    private _modelLettreReponseSearch: ModelLettreReponseVo = new ModelLettreReponseVo();
    private _modelLettreReponse: ModelLettreReponseVo = new ModelLettreReponseVo();
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
                    this.modelLettreReponseListe.forEach(val => {
                        console.log(val.type);
                    });
                    this.editableModelLettreReponses = value;
                }
            });
    }

    public findType(type: string) {
        this.http.get<ModelLettreReponseVo>('http://localhost:8080/generated/modelLettreReponse/getType/' + type).subscribe(
            value => {
                if (value != null) {
                    console.log(value);
                }
            }, eror => {
                console.log('eroro', eror);
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
            if (data != null) {
                this.showInfo();
            }
        });
    }

    public findModelLettreReponse(pojo: ModelLettreReponseVo) {
        this.http.post<Array<ModelLettreReponseVo>>('http://localhost:8080/generated/modelLettreReponse/search/', pojo).subscribe(
            value => {
                this.modelLettreReponseListe = value;
            });
    }

    public detailShow(pojo: ModelLettreReponseVo) {
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
                if (value != null) {
                    this.modelLettreReponse = value;
                }
            }
        );
    }

    public findAllcategorieModelLettreReponses() {
        this.http.get<Array<CategorieModelLettreReponseVo>>('http://localhost:8080/generated/categorieModelLettreReponse/').subscribe(
            value => {
                if (value != null) {
                    this.categorieModelLettreReponses = value;
                }
            });
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

    public detailHide() {

        this.modelLettreReponseShowDetail = false;
        this.modelLettreReponseDetail = null;
    }

    public uploadFile(file: FormData) {
        this.http.post<number>('http://localhost:8080/generated/modelLettreReponse/uploadFile', file).subscribe(
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
        if (disp === false) {
            this.editModelLettreReponse();
        } else {
            this.http.post<number>('http://localhost:8080/generated/modelLettreReponse/uploadFile', file).subscribe(
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
        this.messageService.add({
            severity: 'success',
            summary: 'Success Message',
            detail: 'modelLettreReponse is saved'
        });
    }

    showSuccess1() {
        this.messageService.add({key: 'c', sticky: true, severity: 'info', summary: 'Download completed', detail: ''});
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

    downloadFile(name: string, type: string) {
        /*  this.http.get<ModelLettreReponseVo>('http://localhost:8080/generated/modelLettreReponse/downloadFile/' + name).subscribe(
              data => {
                  if (data != null) {
                      console.log('sucess');
                      this.letttreModelType = data.type;
                      this.showSuccess1();
                  }}, eror => {
                  console.log('eroro', eror);
              });*/
        // if(type === 'application/pdf'){
        this.http.get('http://localhost:8080/generated/modelLettreReponse/downloadFile/' + name, {
            responseType: 'arraybuffer'
        }).subscribe(response => this.downLoad(response, type));
        //  } else if(type === 'application/msword'){
        // this.http.get('http://localhost:8080/generated/modelLettreReponse/downloadFile/' + name, {
        //     responseType : 'arraybuffer'}).subscribe(response => this.downLoad(response, 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'));
        //  }

    }

    getPdf(name: string): any {

        this.authKey = localStorage.getItem('jwt_token');

        const httpOptions = {
            responseType: 'blob' as 'json',
            headers: new HttpHeaders({
                Authorization: this.authKey,
            })
        };

        return this.http.get('http://localhost:8080/generated/modelLettreReponse/downloadFile/' + name, httpOptions);
    }

    downLoad(data: any, type: string) {
        let blob = new Blob([data], {type});
        let url = window.URL.createObjectURL(blob);
        let pwa = window.open(url);
        if (!pwa || pwa.closed || typeof pwa.closed === 'undefined') {
            alert('Please disable your Pop-up blocker and try again.');
        }
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
