import {Component, OnInit} from '@angular/core';
import {ModelLettreReponseService} from '../../../controller/service/ModelLettreReponse.service';
import {ModelLettreReponseVo} from '../../../controller/model/modelLettreReponse.model';
import {UserVo} from '../../../controller/model/User.model';
import {CategorieModelLettreReponseVo} from '../../../controller/model/CategorieModelLettreReponse.model';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-modelLettreReponse-create',
    templateUrl: './modelLettreReponse-create.component.html',
    styleUrls: ['./modelLettreReponse-create.component.css']
})
export class ModelLettreReponseCreateComponent implements OnInit {
    constructor(private modelLettreReponseService: ModelLettreReponseService,
                private formBuilder: FormBuilder) {
    }

    get modelLettreReponse(): ModelLettreReponseVo {
        return this.modelLettreReponseService.modelLettreReponse;
    }

    get categorieModelLettreReponses(): Array<CategorieModelLettreReponseVo> {
        return this.modelLettreReponseService.categorieModelLettreReponses;
    }

    get createdBys(): Array<UserVo> {
        return this.modelLettreReponseService.createdBys;
    }

    get updatedBys(): Array<UserVo> {
        return this.modelLettreReponseService.updatedBys;
    }

    selectedFile: File;
    uploadForm: FormGroup;

    ngOnInit(): void {
        this.findAllcategorieModelLettreReponses();
        this.findAllcreatedBys();
        this.findAllupdatedBys();
        this.uploadForm = this.formBuilder.group({
            profile: ['']
        });
    }

    saveModelLettreReponse() {
        this.uploadFile();
        this.modelLettreReponseService.saveModelLettreReponse();
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

    public onFileChanged(event) {
        this.selectedFile = event.target.files[0];
        document.getElementById('lebel1').innerText = this.selectedFile.name;
        this.modelLettreReponse.chemin = this.selectedFile.name.split('.').shift();
        this.uploadForm.get('profile').setValue(this.selectedFile);
    }

    uploadFile() {
        this.uploadForm.get('profile').setValue(this.selectedFile);
        console.log(this.selectedFile);
        const formData = new FormData();
        formData.append('file', this.uploadForm.get('profile').value);
        this.modelLettreReponseService.uploadFile(formData);
    }
}
