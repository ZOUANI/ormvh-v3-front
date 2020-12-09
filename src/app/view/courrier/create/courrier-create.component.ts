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
import {moment} from 'ngx-bootstrap/chronos/test/chain';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CourrierPieceJoint} from '../../../controller/model/courrier-piece-joint.model';
import {ExpeditorVo} from '../../../controller/model/Expeditor.model';
import {SexeVo} from '../../../controller/model/Sexe.model';
import {NationalityVo} from '../../../controller/model/Nationality.model';
import {EtatCourrierVo} from '../../../controller/model/EtatCourrier.model';
import {EtatCourrierService} from '../../../controller/service/EtatCourrier.service';
import {PhaseAdminVo} from '../../../controller/model/PhaseAdmin.model';
import {NatureClientVo} from '../../../controller/model/NatureClient.model';
import {PhaseAdminService} from '../../../controller/service/PhaseAdmin.service';
import {NatureClientService} from '../../../controller/service/NatureClient.service';
import {CourrierObjectVo} from '../../../controller/model/CourrierObject.model';
import {TypeRequetteService} from '../../../controller/service/TypeRequette.service';
import {TypeRequetteVo} from '../../../controller/model/TypeRequette.model';
import {AuthenticationService} from '../../../controller/service/auth/authentication.service';

@Component({
    selector: 'app-courrier-create',
    templateUrl: './courrier-create.component.html',
    styleUrls: ['./courrier-create.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class CourrierCreateComponent implements OnInit {

    uploadForm: FormGroup;


    voies: VoieVo[];
    natureCourriersSortie: NatureCourrierVo[];
    natureCourriersArrivee: NatureCourrierVo[];
    natureCourriers: NatureCourrierVo[];
    evaluations: SelectItem[];
    expeditorTypes: SelectItem[];
    subdivisions: SelectItem[];
    leServices: SelectItem[];
    courrierObjects: CourrierObjectVo[];

    typeRequettes: TypeRequetteVo[];
    phaseAdmins: PhaseAdminVo[];
    natureClients: NatureClientVo[];

    statuss: StatusVo[];
    users: UserVo[];
    usersInService: UserVo[];
    changedServices: LeServiceVo[];
    typeCourriers: TypeCourrierVo[];
    etatCourriers: EtatCourrierVo[];
    showEditTask = false;
    editableTask: TaskVo;
    onEditTask = false;
    onSelectTask = false;
    uploadedFiles: any[] = [];
    courrierPiece: CourrierPieceJoint;
    onAddSender = false;
    displayBasic2: boolean;
    natureExpediteurs: SelectItem[];

    constructor(private courrierService: CourrierService,
                private voieService: VoieService,
                private formBuilder: FormBuilder,
                private courrierObjectService: CourrierObjectService,
                private expeditorService: ExpeditorService,
                private expidtorTypeSerice: ExpeditorTypeService,
                private evaluationService: EvaluationService,
                private statusService: StatusService,
                private typeCourrierService: TypeCourrierService,
                private etatCourrierService: EtatCourrierService,
                private leServiceService: LeServiceService,
                private natureCourrierService: NatureCourrierService,
                private subdivisionService: SubdivisionService,
                private userService: UserService,
                private phaseAdminService: PhaseAdminService,
                private natureClientService: NatureClientService,
                private typeRequetteService: TypeRequetteService
                ) {
    }

    onUpload(event) {
        for(const file of event.files) {
            this.uploadedFiles.push(file);
        }
        console.log(this.uploadedFiles);
        this.courrierService.upload(this.uploadedFiles);
    }

    get coordinateur(): boolean {
        return this.courrierService.coordinateur;
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
        if (this.onDetail) {
            return 'Detail';
        } else if (this.onEdit) {
            return 'Edit Courrier';
        } else if (this.courrier.typeCourrierVo.libelle === 'Sortie') {
                    return 'nouveau courrier de sortie ';
        } else if (this.courrier.typeCourrierVo.libelle === 'Arrivee') {
                    return 'nouveau courrier d\'Arrivee';
        }
    }

    isDemande() {
        return (this.courrier.natureCourrierVo != null && this.courrier.natureCourrierVo.code === 'demande') ;
    }
    isSortie() {
        return (this.courrier.typeCourrierVo != null && this.courrier.typeCourrierVo.libelle === 'Sortie') ;
    }
    isArrive() {
        return (this.courrier.typeCourrierVo != null && this.courrier.typeCourrierVo.libelle === 'Arrivee') ;
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




    showBasicDialog2() {
        this.displayBasic2 = true;
        this.findAllsexes();
        this.findAllnationalitys();
    }

    boolenAccuse(task: TaskVo) {
        if (task.accuse == false) {
            task.accuse = true;
        } else {
            task.accuse = false;
        }
        console.log(task.accuse + 'hhh');
    }

    boolenReponse(task: TaskVo) {
        if (task.reponse == false) {
            task.reponse = true;
        } else {
            task.reponse = false;
        }
        console.log(task.accuse + 'hhh');
    }

    DetailInterfacedefaulteValue(naturcorier: NatureCourrierVo) {
        this.courrier.delai = naturcorier.delai;
        this.courrier.relance = naturcorier.relance;
        // this.courrier.dateRelance=new Date();
        const today = new Date();
        const addingDays = parseInt(this.courrier.relance);
        this.courrier.dateRelance = new Date(today.getTime() + (1000 * 60 * 60 * 24 * addingDays)).toISOString().substring(0, 10);


    }

    ngOnInit(): void {
        this.findAllcourrierObjects();
        this.findAllvoies();
        this.findAllnatureCourriers();
        this.findAllexpeditors();
        this.findAllServices();
        this.userService.getCurrentUser();
        this.findAllChangedServices();
        this.findAllevaluations();
        this.findAllexpeditorTypes();
        this.findAllsubdivisions();
        this.findAllstatuss();
        this.findAlltypeCourriers();
        this.findAllEtatCourriers();
        this.findAllUSer();
        this.findAllNatureClients();
        this.findAllPhaseAdmins();
        this.findAllTypeRequettes();
        this.findAllUSerInService();

        this.uploadForm = this.formBuilder.group({
            profile: ['']
        });
        this.courrierService.loadRoles();


    }

    generateId() {
        this.courrierService.generateId();
        this.courrierService.verifyIdCourier = '';
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
        const index = this.courrier.tasksVo.indexOf(this.editableTask);
        if (index != -1) {
            this.onSelectTask = false;
            this.onEditTask = false;
            this.courrier.tasksVo.splice(index, 1);

        }
    }

    addCourrierServiceItem() {
        const index = this.courrier.courrierServiceItemsVo.findIndex(item => item.serviceVo.id == this.courrierServiceItem.serviceVo.id);
        if (index == -1 && this.courrierServiceItem.serviceVo) {
            this.courrierService.addCourrierServiceItem();
        }
    }

    removeCourrierServiceItem(i: number) {
        this.courrierService.removeCourrierServiceItem(i);
    }
     findEtatCourrierByCode(codeEtatCourrier: string): EtatCourrierVo {
         for (let i = 0; i < this.etatCourriers.length; i++) {
             const myEtatCourrier = this.etatCourriers[i];
             if (myEtatCourrier.code === codeEtatCourrier) {
                 return myEtatCourrier;
             }
         }
         return null;
    }

    isCourrierSucceptibleInitialisation() {
        return this.courrier.etatCourrierVo == null || this.courrier.etatCourrierVo.code === 'init';
    }

    isCourrierSucceptibleDirecteur() {
        return this.courrier.etatCourrierVo != null && this.courrier.etatCourrierVo.code === 'directeur';
    }

    isCourrierSucceptibleChef() {
        return this.courrier.etatCourrierVo != null && (this.courrier.etatCourrierVo.code === 'chef' || this.courrier.etatCourrierVo.code === 'bureau');
    }

    isCourrierSucceptibleBureau() {
        return this.courrier.etatCourrierVo != null && this.courrier.etatCourrierVo.code === 'bureau';
    }


    saveCourrierUsingEtat( codeEtatCourrier: string) {
        this.courrier.etatCourrierVo = this.findEtatCourrierByCode(codeEtatCourrier);
        console.log(this.courrier.etatCourrierVo);
        this.saveCourrier();
    }

    saveCourrier() {
        console.log(this.courrier);
        if (!this.courrier.idCourrier) {
            this.courrier.idCourrier = this.generatedId;
            this.courrierService.saveCourrier();
            this.generatedId = '';
            this.courrierService.verifyIdCourier = '';
        } else {
            this.courrierService.editCourrier();
        }
    }

    findAllcourrierObjects() {
        this.courrierObjectService.findAllcourrierObjects().subscribe(data => {
            this.courrierObjects = data;
        }, error => {
            console.log(error);
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
            this.natureCourriers = data ;
            if (data != null) {
                this.natureCourriersSortie = data.filter(e => e.categorie === '2');
                this.natureCourriersArrivee = data.filter(e => e.categorie === '1');
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
            this.evaluations = [{label: '--------------------', value: null}];
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
            this.subdivisions = [{label: '--------------------', value: null}];
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
                /*this.task.statusVo = this.statuss[0];*/
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

    findAllEtatCourriers() {
        this.etatCourrierService.findAlletatCourriers().subscribe(data => {

            if (data != null) {
                this.etatCourriers = data;
                console.log(data);
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

    findAllUSerInService() {
        this.userService.findAllUsersInService().subscribe(data => {
            if (data != null) {
                this.usersInService = data;
            }
        }, error => {
            console.log(error);
        });
    }

    showCreateExpeditor() {
        this.courrierService.showCreateExpeditor();
    }

    verifyId() {
        this.courrierService.verifyId(this.generatedId);
        console.log(this.generatedId);
    }

    showDialog() {
        // Always hide edit-task card
        this.onEditTask = false;
        this.onSelectTask = false;
        // TODO  always open the first tab
        const element: HTMLElement = document.getElementById('courrier-tab') as HTMLElement;
        if ( element != null ) {
        element.click();
       }
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
            this.findAllPhaseAdmins();
            this.findAllNatureClients();

        }
    }

    changeDelaiEtAvance() {
        if ( this.courrier != null && this.courrier.natureCourrierVo != null ) {
        this.courrier.delai = this.courrier.natureCourrierVo.delai;
        this.courrier.relance = this.courrier.natureCourrierVo.relance;
        }

    }
    
    isCourrierRequette() {
       return this.courrier != null && this.courrier.natureCourrierVo != null && (this.courrier.natureCourrierVo.code === 'requete' || this.courrier.natureCourrierVo.code === 'reclamation' );
    }


    roleAdmin() {
        return this.courrierService.isADMIN;
    }

    chekIfCoordinateur() {
        /*let coord = this.courrierService.chekIfCoordinateur();
        console.log('is cordd ?? ' + coord);
        let admin = this.roleAdmin() ;
        console.log('is admin ?? ' + admin);
        let detail = this.onDetail ;
        console.log('is detail ?? ' + detail);
        console.log('onDetail && ( !roleAdmin() || !chekIfCoordinateur() ) ??? ' + (detail && ( !admin || !coord )));
    */
        return this.courrierService.chekIfCoordinateur();
    }
    roleChargerDeTraitementCourier() {
        return this.courrierService.isCHARGE_DE_TRAITEMENT_COURRIER;
    }
    roleChefService() {
        return this.courrierService.isCHEF_DE_SERVICE;
    }
    roleAgentBo() {
        return this.courrierService.isAGENT_BO;
    }
    roleChargeDeRequete() {
        return this.courrierService.isCHARGE_DE_REQUETE;
    }
    roleAgentCai() {
        return this.courrierService.isAGENT_CAI;
    }
    roleDirecteur() {
        return this.courrierService.isDIRECTEUR;
    }
    isCourrierSortieOrArriver() {
        return this.courrierService.isCourieSorieOrArrivee;
    }
    isHeConnected(email: string): boolean {
        if ((this.currentUser.email === email || this.roleChefService()) && (!this.onDetail)) {
            return true;
        } else {
            return false;
        }
    }
    isHeConnected1(email: string): boolean {
        if ((this.roleChefService()) && (!this.onDetail)) {
            return true;
        } else {
            return false;
        }
    }
    get currentUser(): UserVo {
        return this.userService.currentUser;
    }
    AddSender() {
        this.findAllsexes();
        this.findAllnationalitys();
        return this.onAddSender = !this.onAddSender;
    }
    get expeditor(): ExpeditorVo {
        return this.expeditorService.expeditor;
    }
    get sexes(): Array<SexeVo> {
        return this.expeditorService.sexes;
    }
    get nationalitys(): Array<NationalityVo> {
        return this.expeditorService.nationalitys;
    }
    saveExpeditor() {
        this.expeditorService.saveExpeditor();
        this.onAddSender = !this.onAddSender;
        this.displayBasic2 = false ;
    }
    findAllsexes() {
        this.expeditorService.findAllsexes();
    }

    findAllnationalitys() {
        this.expeditorService.findAllnationalitys();
    }
    private findAllTypeRequettes() {
        this.typeRequetteService.findAll().subscribe(data => {

            if (data != null) {
                this.typeRequettes = data;
                console.log(data);
            }
        }, error => {
            console.log(error);
        });
    }

    private findAllPhaseAdmins() {
        this.phaseAdminService.findAll().subscribe(data => {

            if (data != null) {
                this.phaseAdmins = data;
                console.log(data);
            }
        }, error => {
            console.log(error);
        });
    }

    private findAllNatureClients() {
        this.natureClientService.findAll().subscribe(data => {
            if (data != null) {
                this.natureClients = data;
                console.log(data);
            }
        }, error => {
            console.log(error);
        });
    }
}
