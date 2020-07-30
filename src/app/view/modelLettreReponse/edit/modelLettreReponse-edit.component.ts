import {Component, OnInit} from '@angular/core';
import {ModelLettreReponseService} from '../../../controller/service/ModelLettreReponse.service';
import {ModelLettreReponseVo} from '../../../controller/model/modelLettreReponse.model';
import {UserVo} from '../../../controller/model/User.model';
import {CategorieModelLettreReponseVo} from '../../../controller/model/CategorieModelLettreReponse.model';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-modelLettreReponse-edit',
    templateUrl: './modelLettreReponse-edit.component.html',
    styleUrls: ['./modelLettreReponse-edit.component.css']
})
export class ModelLettreReponseEditComponent implements OnInit {
  constructor(private modelLettreReponseService: ModelLettreReponseService,
              private formBuilder: FormBuilder) { }
    selectedFile: File;
    uploadForm: FormGroup;
   ngOnInit(): void {
       this.uploadForm = this.formBuilder.group({
           profile: ['']
       });
       this.findAllcategorieModelLettreReponses();
       this.findAllcreatedBys();
       this.findAllupdatedBys();
       this.findAll();
    }
    findAll() {
        this.modelLettreReponseService.findAll();
    }
   get modelLettreReponse(): ModelLettreReponseVo {
    return this.modelLettreReponseService.modelLettreReponse;
  }

    set editableModelLettreReponses(value: Array<ModelLettreReponseVo>) {
        this.modelLettreReponseService.editableModelLettreReponses = value;
    }

    get categorieModelLettreReponses(): Array<CategorieModelLettreReponseVo> {
        return this.modelLettreReponseService.categorieModelLettreReponses;
    }

    get createdBys(): Array<UserVo> {
        return this.modelLettreReponseService.createdBys;
    }

   editModelLettreReponse() {
       this.uploadFile();
   // this.modelLettreReponseService.editModelLettreReponse();
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

     findBylibelle(ref: string) {
      this.modelLettreReponseService.findBylibelle(ref);
     }
    public onFileChanged(event) {
        this.selectedFile = event.target.files[0];
        document.getElementById('lebel1').innerText = this.selectedFile.name;
        this.modelLettreReponse.chemin =  this.selectedFile.name;
        this.uploadForm.get('profile').setValue(this.selectedFile);
        console.log(this.selectedFile);
    }
    dispnible: boolean;
    uploadFile() {
       if(this.selectedFile === undefined){
           this.dispnible = false;
       } else {
           this.dispnible = true;
       }
           console.log(this.selectedFile);
           this.uploadForm.get('profile').setValue(this.selectedFile);
           console.log(this.selectedFile);
           const formData = new FormData();
           formData.append('file', this.uploadForm.get('profile').value);
           this.modelLettreReponseService.uploadFileEdit(formData, this.dispnible);
    }

}
