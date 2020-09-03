import {Component, OnInit, ViewEncapsulation, ViewChild} from '@angular/core';
import {CourrierService} from '../../../controller/service/Courrier.service';
import {CourrierVo} from '../../../controller/model/courrier.model';
import {UserVo} from '../../../controller/model/user.model';
import {StatusVo} from '../../../controller/model/Status.model';
import {TaskVo} from '../../../controller/model/Task.model';
import {NatureCourrierVo} from '../../../controller/model/NatureCourrier.model';
import {CourrierServiceItemVo} from '../../../controller/model/CourrierServiceItem.model';
import {TypeCourrierVo} from '../../../controller/model/TypeCourrier.model';
import {VoieVo} from '../../../controller/model/Voie.model';
import {VoieService} from 'src/app/controller/service/Voie.service';
import {CourrierObjectService} from 'src/app/controller/service/CourrierObject.service';
import {ExpeditorService} from 'src/app/controller/service/Expeditor.service';
import {ExpeditorTypeService} from 'src/app/controller/service/ExpeditorType.service';
import {EvaluationService} from 'src/app/controller/service/Evaluation.service';
import {StatusService} from 'src/app/controller/service/Status.service';
import {TypeCourrierService} from 'src/app/controller/service/TypeCourrier.service';
import {LeServiceService} from 'src/app/controller/service/LeService.service';
import {NatureCourrierService} from 'src/app/controller/service/NatureCourrier.service';
import {SubdivisionService} from 'src/app/controller/service/Subdivision.service';
import {SelectItem} from 'primeng/api';
import {UserService} from 'src/app/controller/service/User.service';
import {LeServiceVo} from 'src/app/controller/model/LeService.model';
import * as $ from 'jquery';
import {moment} from "ngx-bootstrap/chronos/test/chain";
import {FormBuilder, FormGroup} from '@angular/forms';
import {CourrierPieceJoint} from '../../../controller/model/courrier-piece-joint.model';

@Component({
    selector: 'app-courrier-create',
    templateUrl: './courrier-create.component.html',
    styleUrls: ['./courrier-create.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class CourrierCreateComponent implements OnInit {

    uploadForm: FormGroup;
    constructor(private courrierService: CourrierService,
                private voieService: VoieService,
                private formBuilder: FormBuilder,
                private courrierObjectService: CourrierObjectService,
                private expeditorService: ExpeditorService,
                private expidtorTypeSerice: ExpeditorTypeService,
                private evaluationService: EvaluationService,
                private statusService: StatusService,
                private typeCourrierService: TypeCourrierService,
                private leServiceService: LeServiceService,
                private natureCourrierService: NatureCourrierService,
                private subdivisionService: SubdivisionService,
                private userService: UserService) {
    }

    get onEdit(): boolean {
        return this.courrierService.onEdit;
    }

    get onDetail(): boolean {
        return this.courrierService.onDetail;
    }

    set onDetail(value: boolean) {
        this.courrierService.onDetail = value;
    }

    get onCreate(): boolean {
        return this.courrierService.onCreate;
    }

    set onCreate(value: boolean) {
        this.courrierService.onCreate = value;
    }

    get addNewCourrier(): boolean {
        return this.courrierService.addNewCourrier;
    }

    set addNewCourrier(value: boolean) {
        this.courrierService.addNewCourrier = value;
    }


    get courrier(): CourrierVo {
        return this.courrierService.courrier;
    }

    get generatedId(): string {
        return this.courrierService.generatedId;
    }


    set generatedId(value: string) {
        this.courrierService.generatedId = value;
    }


    get task(): TaskVo {
        return this.courrierService.task;
    }

    get courrierServiceItem(): CourrierServiceItemVo {
        return this.courrierService.courrierServiceItem;
    }

    set courrierServiceItem(value: CourrierServiceItemVo) {
        this.courrierService.courrierServiceItem = value;
    }

    get linkedTos(): CourrierVo[] {
        return this.courrierService.courrierListe;
    }

    get message(): string {
        if (this.onDetail)
            return "Detail";
        else if (this.onEdit)
            return "Edit Courrier";
        else if(this.courrier.typeCourrierVo.libelle=="Sortie")
            return "nouveau courrier de sortie ";
        else if(this.courrier.typeCourrierVo.libelle=="Arrivee")
            return "nouveau courrier d'Arrivee"
    }

    get createExpeditorShow(): boolean {
        return this.courrierService.createExpeditorShow;
    }

    set createExpeditorShow(value: boolean) {
        this.courrierService.createExpeditorShow = value;
    }

    get expeditors(): SelectItem[] {
        return this.expeditorService.expeditors;
    }

    set expeditors(value: SelectItem[]) {
        this.expeditorService.expeditors = value;
    }

    get verifyIdCourier(): string {
        return this.courrierService.verifyIdCourier;
    }

    set verifyIdCourier(value: string) {
        this.courrierService.verifyIdCourier = value;
    }


    courrierObjects: SelectItem[];
    voies: VoieVo[];
    natureCourriers: NatureCourrierVo[];
    evaluations: SelectItem[];
    expeditorTypes: SelectItem[];
    subdivisions: SelectItem[];
    leServices: SelectItem[];
    statuss: StatusVo[];
    users: UserVo[];
    changedServices: LeServiceVo[];
    typeCourriers: TypeCourrierVo[];
    showEditTask: boolean = false;
    editableTask: TaskVo;
    onEditTask: boolean = false;
    onSelectTask: boolean = false;
    uploadedFiles: any[] = [];
    courrierPiece: CourrierPieceJoint;

    boolenAccuse(task: TaskVo) {
        if (task.accuse == false) {
            task.accuse = true;
        } else {
            task.accuse = false
        }
        console.log(task.accuse + "hhh");
    }

    boolenReponse(task: TaskVo) {
        if (task.reponse == false) {
            task.reponse = true;
        } else {
            task.reponse = false
        }
        console.log(task.accuse + "hhh");
    }

    DetailInterfacedefaulteValue(naturcorier: NatureCourrierVo) {
        this.courrier.delai = naturcorier.delai;
        this.courrier.relance = naturcorier.relance;
        //this.courrier.dateRelance=new Date();
        let today=new Date();
        let addingDays=parseInt(this.courrier.relance);
        this.courrier.dateRelance = new Date(today.getTime() + (1000 * 60 * 60 * 24*addingDays)).toISOString().substring(0,10);


    }

    ngOnInit(): void {
        this.findAllcourrierObjects();
        this.findAllvoies();
        this.findAllnatureCourriers();
        this.findAllexpeditors();
        this.findAllServices();
        this.findAllChangedServices();
        this.findAllevaluations();
        this.findAllexpeditorTypes();
        this.findAllsubdivisions();
        this.findAllstatuss();
        this.findAlltypeCourriers();
        this.findAllUSer();
        this.uploadForm = this.formBuilder.group({
            profile: ['']
        });
    }

    generateId() {
        this.courrierService.generateId()
        this.courrierService.verifyIdCourier = ''
    }

    addTask() {
        return this.courrierService.addTask();
    }

    selectTask(task: TaskVo) {
        this.editableTask = task;
        this.onSelectTask = true;
        this.onEditTask = false;

    }

    editTask(task: TaskVo) {
        this.editableTask = task;
        this.onSelectTask = false;
        this.onEditTask = true;
    }

    deleteTaskDirct(task: TaskVo) {
        const index = this.courrier.tasksVo.indexOf(task);
        if (index != -1) {
            this.courrier.tasksVo.splice(index, 1);
            if (this.editableTask == task) {
                this.onSelectTask = false;
                this.onEditTask = false;
            }
        }
    }

    editTaskHide() {
        this.showEditTask = false;
        this.editableTask = null;
    }

    deleteTask() {
        let index = this.courrier.tasksVo.indexOf(this.editableTask);
        if (index != -1) {
            this.onSelectTask = false;
            this.onEditTask = false;
            this.courrier.tasksVo.splice(index, 1);

        }
    }

    addCourrierServiceItem() {
        let index = this.courrier.courrierServiceItemsVo.findIndex(item => item.serviceVo.id == this.courrierServiceItem.serviceVo.id);
        if (index == -1 && this.courrierServiceItem.serviceVo)
            this.courrierService.addCourrierServiceItem();
    }

    removeCourrierServiceItem(i: number) {
        this.courrierService.removeCourrierServiceItem(i);
    }

    saveCourrier() {
        if (!this.courrier.idCourrier) {
            this.courrier.idCourrier = this.generatedId
            this.courrierService.saveCourrier();
            this.generatedId = ''
            this.courrierService.verifyIdCourier = '';
        } else {
            this.courrierService.editCourrier();
        }
    }

    findAllcourrierObjects() {
        this.courrierObjectService.findAllcourrierObjects().subscribe(data => {
            this.courrierObjects = [{label: 'none', value: null}];
            if (data != null) {
                for (const item of data) {
                    this.courrierObjects.push({label: item.title, value: item});
                }
            }
        }, error => {
            this.courrierObjects = [{label: 'none', value: null}];
        });
    }

    findAllServices() {
        this.leServiceService.findAllServices().subscribe(data => {
            this.leServices = [{label: 'none', value: null}];
            if (data != null) {
                for (const item of data) {
                    this.leServices.push({label: item.title, value: item});
                }
            }
        }, error => {
            this.leServices = [{label: 'none', value: null}];
        });
    }

    findAllChangedServices() {
        this.leServiceService.findAllServices().subscribe(data => {
            if (data != null) {
                this.changedServices = data;
                this.courrierServiceItem.serviceVo = this.changedServices[0];
            }
        }, error => {
            console.log(error);
        });
    }

    findAllvoies() {
        this.voieService.findAllvoies().subscribe(data => {
            if (data != null) {
                this.voies = data;
                this.courrier.voieVo = this.voies[0];
            }
        }, error => {
            console.log(error);
        });
    }

    findAllnatureCourriers() {
        this.natureCourrierService.findAllnatureCourriers().subscribe(data => {
            if (data != null) {
                this.natureCourriers = data;
                this.courrier.natureCourrierVo = this.natureCourriers[0];
            }
        }, error => {
            console.log(error);
        });
    }

    findAllexpeditors() {
        this.expeditorService.findAllexpeditors();
    }


    findAllevaluations() {
        this.evaluationService.findAllevaluations().subscribe(data => {
            this.evaluations = [{label: 'Select evaluation', value: null}];
            if (data != null) {
                for (const item of data) {
                    this.evaluations.push({label: item.title, value: item});
                }
            }
        }, error => {
            this.evaluations = [{label: 'none', value: null}];
        });
    }

    findAllexpeditorTypes() {
        this.expidtorTypeSerice.findAllexpeditorTypes().subscribe(data => {
            this.expeditorTypes = [{label: 'type expeditor', value: null}];
            if (data != null) {
                for (const item of data) {
                    this.expeditorTypes.push({label: item.title, value: item});
                }
            }
        }, error => {
            this.expeditorTypes = [{label: 'none', value: null}];
        });
    }

    findAllsubdivisions() {
        this.subdivisionService.findAllsubdivisions().subscribe(data => {
            this.subdivisions = [{label: 'select subdivision', value: null}];
            if (data != null) {
                for (const item of data) {
                    this.subdivisions.push({label: item.title, value: item});
                }
            }
        }, error => {
            this.subdivisions = [{label: 'none', value: null}];
        });
    }

    findAllstatuss() {
        this.statusService.findAllstatuss().subscribe(data => {
            if (data != null) {
                this.statuss = data;
                this.courrier.statusVo = this.statuss[0];
                this.task.statusVo = this.statuss[0];
            }
        }, error => {
            console.log(error);
        });
    }

    findAlltypeCourriers() {
        this.typeCourrierService.findAlltypeCourriers().subscribe(data => {

            if (data != null) {
                this.typeCourriers = data;
            }
        }, error => {
            console.log(error);
        });
    }

    findAllUSer() {
        this.userService.findAllUsers().subscribe(data => {
            if (data != null) {
                this.users = data;
            }
        }, error => {
            console.log(error);
        });
    }

    showCreateExpeditor() {
        this.courrierService.showCreateExpeditor();
    }

    verifyId() {
        this.courrierService.verifyId(this.generatedId)
        console.log(this.generatedId);
    }

    showDialog() {
        // Always hide edit-task card
        this.onEditTask = false;
        this.onSelectTask = false;
        // TODO  always open the first tab
        let element: HTMLElement = document.getElementById('courrier-tab') as HTMLElement;
        element.click();
        if (!this.onEdit && !this.onDetail) {
            this.findAllcourrierObjects();
            this.findAllvoies();
            this.findAllnatureCourriers();
            this.findAllexpeditors();
            this.findAllServices();
            this.findAllChangedServices();
            this.findAllevaluations();
            this.findAllexpeditorTypes();
            this.findAllsubdivisions();
            this.findAllstatuss();
            this.findAlltypeCourriers();
            this.findAllUSer();
        }
    }
    onUpload(event) {

        for(const file of event.files) {
            let formData = new FormData();
            this.uploadForm.get('profile').setValue(file);
            formData.append('file', this.uploadForm.get('profile').value);
            this.courrierService.saveCourrierPieceJoint(formData);
            formData = null;
            // this.courrierPiece = new CourrierPieceJoint();
            //console.log(file);
            //this.uploadedFiles.push(file);
            //this.courrierPiece.chemin = file.name;
            //this.courrierPiece.contenu = file.size;
            //console.log(file.size);
            //this.courrier.courrierPieceJoint.push(this.courrierPiece);
            //this.courrierPiece = null;
        }
        for (const file of this.courrier.courrierPieceJoint) {
            console.log(file.contenu);
            console.log(file.chemin);
        }
    }
}