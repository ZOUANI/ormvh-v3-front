import {Component, OnInit} from '@angular/core';
import {ModelLettreReponseVo} from '../../../controller/model/modelLettreReponse.model';
import {ModelLettreReponseService} from '../../../controller/service/ModelLettreReponse.service';
import {UserVo} from '../../../controller/model/User.model';
import {CategorieModelLettreReponseVo} from '../../../controller/model/CategorieModelLettreReponse.model';
import {MessageService} from 'primeng';
import {LettreModel} from '../../../controller/model/lettre-model.model';
import { saveAs } from 'file-saver';
@Component({
    selector: 'app-modelLettreReponse-list',
    templateUrl: './modelLettreReponse-list.component.html',
    styleUrls: ['./modelLettreReponse-list.component.css']
})
export class ModelLettreReponselistComponent implements OnInit {

  constructor(private _modelLettreReponseService: ModelLettreReponseService,
              private messageService: MessageService) {}
  get categorieModelLettreReponses(): Array<CategorieModelLettreReponseVo> {
   return this.modelLettreReponseService.categorieModelLettreReponses;
  }
  get createdBys(): Array<UserVo> {
   return this.modelLettreReponseService.createdBys;
  }
  get updatedBys(): Array<UserVo> {
   return this.modelLettreReponseService.updatedBys;
  }

  get modelLettreReponseService(): ModelLettreReponseService {
    return this._modelLettreReponseService;
  }

  set modelLettreReponseService(value: ModelLettreReponseService) {
    this._modelLettreReponseService = value ;
  }

  get modelLettreReponseListe(): Array<ModelLettreReponseVo> {
    return this.modelLettreReponseService.modelLettreReponseListe;
  }

  set modelLettreReponseListe(value: Array<ModelLettreReponseVo>) {
    this.modelLettreReponseService.modelLettreReponseListe = value ;
  }

  get modelLettreReponseDetail(): ModelLettreReponseVo {
    return this.modelLettreReponseService.modelLettreReponseDetail;
}

  set modelLettreReponseDetail(value: ModelLettreReponseVo) {
  this.modelLettreReponseService.modelLettreReponseDetail = value ;
}

get modelLettreReponseSearch(): ModelLettreReponseVo {
  return this.modelLettreReponseService.modelLettreReponseSearch;
}

set modelLettreReponseSearch(value: ModelLettreReponseVo) {
  this.modelLettreReponseService.modelLettreReponseSearch = value ;
}

    set modelLettreReponseSearch(value: ModelLettreReponseVo) {
        this.modelLettreReponseService.modelLettreReponseSearch = value;
    }

get modelLettreReponseShowDetail(): boolean  {
  return this.modelLettreReponseService.modelLettreReponseShowDetail;
}

set modelLettreReponseShowDetail(value: boolean ) {
  this.modelLettreReponseService.modelLettreReponseShowDetail = value ;
}
    get createModelLettre(): boolean {
        return this.modelLettreReponseService.createModelLettre;
    }
    get letttreModelType(): string {
        return this.modelLettreReponseService.letttreModelType;
    }

    get lettreModel(): LettreModel {
        return this._lettreModel;
    }

    set lettreModel(value: LettreModel) {
        this._lettreModel = value;
    }
/*    this.modelLettreReponseService.downloadFile(modelList.chemin).subscribe(x => {
                const blob = new Blob([x], {type: 'application/pdf'});
                saveAs(blob, this.chihaja + '.pdf');
                var fileURL = URL.createObjectURL(blob);
                window.open(fileURL); // if you want to open it in new tab
        });
            /*console.log('ha x :' + x.data);
            const blob = new Blob([x.data], {type: x.fileType});
            console.log('ha blob' + blob.size);
           // this.lettreModel =  this.modelLettreReponseService.GetFile(modelList.chemin);
            // console.log(this.lettreModel);
           // tslint:disable-next-line:prefer-const
             let myFile = this.blobToFile(blob, x.fileName);
            console.log(myFile.size);
            if(window.navigator && window.navigator.msSaveOrOpenBlob){
                window.navigator.msSaveOrOpenBlob(blob);
                return;
            }
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            document.body.appendChild(a);
            a.setAttribute('style', 'display: none');
            a.href = url;
            a.download = x.fileName;
            a.click();
            a.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view: window}));
            // tslint:disable-next-line:only-arrow-functions
            setTimeout(function() {
            window.URL.revokeObjectURL(url);
            a.remove();
            }, 100);
//            window.open(url);
          /*  var a = document.createElement('a');
            console.log(x);
            var file = new Blob([x.data], {type: x.fileType});
            let myFile = this.blobToFile(file, x.fileName);
            console.log('ha size: ' + myFile.size);
            a.href = URL.createObjectURL(file);
            a.download = x.fileName;
            a.click();
        });*/

    get imageName(): string {
        return this.modelLettreReponseService.imageName;
    }
   chihaja: any;
    value: number = 0;
    show: boolean;
    display: boolean;
   url: string;
    private _lettreModel: LettreModel;
header: string;

  ngOnInit(): void {
      this.show = false;
      this.display = false;
    this.findAll();
    this.findAllcategorieModelLettreReponses();
    this.findAllcreatedBys();
    this.findAllupdatedBys();
    this.header = 'download ...';
    //document.getElementById('header').style.color = 'orange';
    const interval = setInterval(() => {
          this.value = this.value + Math.floor(Math.random() * 10) + 1;
          if (this.value >= 100) {
              this.value = 100;
              this.header = 'download completed';
          //    document.getElementById('header').style.color = 'green';
//              this.messageService.add({severity: 'info', summary: 'Success', detail: 'download Completed'});
              clearInterval(interval);
          }
      }, 1000);
      this.url = 'C:/Users/hp/Desktop/PROJET ZOUANI/ormvh-v3-back/';
  }
   delete( pojo: ModelLettreReponseVo ) {
    this.modelLettreReponseService.delete(pojo);
  }


 detailShow( pojo: ModelLettreReponseVo ) {
      console.log(pojo.lettreModel);
      this.modelLettreReponseService.detailShow( pojo);
}

 findModelLettreReponse(pojo: ModelLettreReponseVo ) {
  this.modelLettreReponseService.findModelLettreReponse( pojo);
}
 findAll() {
  this.modelLettreReponseService.findAll();
}

   findAllcategorieModelLettreReponses() {
     this.modelLettreReponseService.findAllcategorieModelLettreReponses();
   }
   findAllcreatedBys() {
     this.modelLettreReponseService.findAllcreatedBys();
   }
   findAllupdatedBys() {
     this.modelLettreReponseService.findAllupdatedBys();
   }
    public blobToFile = (theBlob: Blob, fileName: string): File => {
        const b: any = theBlob;
        b.lastModifiedDate = new Date();
        b.name = fileName;
        return theBlob as File;
    }
    download(modelList: ModelLettreReponseVo) {
        this.chihaja = modelList.chemin;
        this.show = true;
        this.display = true;
       this.modelLettreReponseService.downloadFile(modelList.chemin);
       // this.modelLettreReponseService.ShowFile();
       // this.modelLettreReponseService.downloadFile(modelList.chemin).subscribe(response => {
            //let blob:any = new Blob([response.blob()], { type: 'text/json; charset=utf-8' });
            //const url= window.URL.createObjectURL(blob);
            //window.open(url);
          //  window.location.href = response.url;
            //fileSaver.saveAs(blob, 'employees.json');
        //}), error => console.log('Error downloading the file'),
          //  () => console.info('File downloaded successfully');
    }
    public createShow() {
this.modelLettreReponseService.create();
    }
}
