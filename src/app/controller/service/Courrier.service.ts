import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CourrierVo} from '../model/courrier.model';

import {TaskVo} from '../model/Task.model';

import {CourrierServiceItemVo} from '../model/CourrierServiceItem.model';
import {LeServiceVo} from '../model/LeService.model';
import {ExpeditorService} from './Expeditor.service';
import {ExpeditorVo} from '../model/Expeditor.model';
import {CourrierPieceJoint} from '../model/courrier-piece-joint.model';
import {AuthenticationService} from './auth/authentication.service';
import {Observable} from 'rxjs';
import {NatureCourrierVo} from '../model/NatureCourrier.model';
import {StatusVo} from '../model/Status.model';
import {PhaseAdminVo} from '../model/PhaseAdmin.model';
import {NatureClientVo} from '../model/NatureClient.model';
import {TypeRequetteVo} from '../model/TypeRequette.model';
import {SelectItem} from 'primeng/api';
import {ToastrService} from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class CourrierService {

    onEdit = false;
    onDetail = false;
    onCreate = false;

    courriersService: Map<string, Array<CourrierVo>>;
    showEmailDialog = false;
    selectedCourrier: CourrierVo;



    addNewCourrier = false;
    showLinkedCourrier = false;
    linkedToThisCourrier: CourrierVo;
    linkedCourrier: Array<CourrierVo> = new Array<CourrierVo>();
    private  formData: FormData = new FormData();

    private _courrierDetail: CourrierVo = new CourrierVo();
    private _courrierListe: Array<CourrierVo> = new Array<CourrierVo>();
    private _linkedTos: SelectItem[];
    private _courrierSearch: CourrierVo = new CourrierVo();
    private _courrier: CourrierVo = new CourrierVo();
    private _searchedCourriers: Array<CourrierVo> = new Array<CourrierVo>();
    private _editableCourriers: Array<CourrierVo> = new Array<CourrierVo>();
    private _departCourriers: Array<CourrierVo> = new Array<CourrierVo>();
    private _arrivedCourriers: Array<CourrierVo> = new Array<CourrierVo>();
    private _ouvertCourriers: Array<CourrierVo> = new Array<CourrierVo>();
    private _enCoursCourriers: Array<CourrierVo> = new Array<CourrierVo>();
    private _traitedCourriers: Array<CourrierVo> = new Array<CourrierVo>();
    private _accusedCourriers: Array<CourrierVo> = new Array<CourrierVo>();
    private _responseCourriers: Array<CourrierVo> = new Array<CourrierVo>();

    private _phaseAdmins: Array<PhaseAdminVo> = new Array<PhaseAdminVo>();
    private _natureClients: Array<NatureClientVo> = new Array<NatureClientVo>();
    private _typeRequettes: Array<TypeRequetteVo> = new Array<TypeRequetteVo>();


    private _task: TaskVo;
    private _generatedId = '';
    private _generatedId2 = '';
    private _reservationCourrier: CourrierVo = new CourrierVo();
    private _reserveCourier: CourrierVo = new CourrierVo();
    private _nbrOfAccused = 0;
    private _nbrOfResponed = 0;
    private _nbrOfAll = 0;
    private _nbrOfDeparted = 0;
    private _nbrOfArived = 0;
    private _nbrOfOpen = 0;
    private _nbrOfEnCours = 0;
    private _nbrOfTraited = 0;

    private _verifyIdCourier = '';

    private _courrierServiceItem: CourrierServiceItemVo;

    private _reservationShow: boolean;
    private _createExpeditorShow: boolean;

    private _courrierShowDetail: boolean;
    courrierPiece: any;
    private _uploadedFiles: any[] = [];

    isADMIN: boolean;
    isCHARGE_DE_TRAITEMENT_COURRIER: boolean;
    isCHEF_DE_SERVICE: boolean;
    isAGENT_BO: boolean;
    isCHARGE_DE_REQUETE: boolean;
    isAGENT_CAI: boolean;
    isDIRECTEUR: boolean;
    isCourieSorieOrArrivee: boolean;


    private _courrierPieceJoint: Array<CourrierPieceJoint>;





    constructor(private http: HttpClient, private expeditorService: ExpeditorService ,
                private authService: AuthenticationService, private toastr: ToastrService) {
    }
    findAllLinkedTo(): Observable<Array<CourrierVo>> {
        return this.http.get<Array<CourrierVo>>('http://localhost:8080/generated/courrier/');
    }
    get uploadedFiles() {
        return this._uploadedFiles;
    }
    set uploadedFiles(value) {
        this._uploadedFiles = value;
    }
    upload(files: Array<File>) {
        const formData: FormData = new FormData();
        for (const file of files) {
            formData.append('files', file);
            this.http.post('http://localhost:8080/generated/courrier/upload/' + this._courrier.idCourrier, formData).subscribe(
                data => {
                    if (data > 0) {
                        this.toastr.success(' Les fichiers sont bien enregistré', 'Succés!', {
                            timeOut: 4000,
                            closeButton: true,
                            positionClass: 'toast-top-center'
                        });
                        this.addNewCourrier = false;
                    } else {
                        this.toastr.error('Vous devez choisir un courrier ou bien créer un nouveau', 'Courrier non valide!', {
                            timeOut: 4000,
                            closeButton: true,
                            positionClass: 'toast-top-center'
                        });
                    }

                }, error => {
                    console.log(error);
                }
            );
        }
    }

    chekIfCoordinateur(courrierVo: CourrierVo) {
        console.log('koko ana chekIfCoordinateur');
        if (courrierVo == null || courrierVo.courrierServiceItemsVo == null
            || this.authService.authenticatedUser == null || this.authService.authenticatedUser.username == null) {
            courrierVo.coordinator = false;
            return ;
        }

        const authenticatedUserUsername = this.authService.authenticatedUser.username;
        for ( const item of courrierVo.courrierServiceItemsVo) {
            if ( item.coordinateur != null && item.coordinateur && item.serviceVo != null
                && item.serviceVo.chefVo != null && item.serviceVo.chefVo.username === authenticatedUserUsername) {
                courrierVo.coordinator = true;
                return ;
            }
        }
        courrierVo.coordinator = false;
    }
    get courrierPieceJoint(): Array<CourrierPieceJoint> {
        if (this._courrierPieceJoint == null) {
            this._courrierPieceJoint = new Array<CourrierPieceJoint>();
        }
        return this._courrierPieceJoint;
    }

    public findAllTypeRequettes() {
        this.http.get<Array<TypeRequetteVo>>('http://localhost:8080/generated/typeRequette/').subscribe(
            value => {
                if (value != null) {
                    this._typeRequettes = value;
                }
            }
        );
    }
    public findAllPhaseAdmins() {
        this.http.get<Array<PhaseAdminVo>>('http://localhost:8080/generated/phaseAdmin/').subscribe(
            value => {
                if (value != null) {
                    this.phaseAdmins = value;
                }
            }
        );
    }

    public findAllNatureClients() {
        this.http.get<Array<NatureClientVo>>('http://localhost:8080/generated/natureClient/').subscribe(
            value => {
                if (value != null) {
                    this.natureClients = value;
                }
            }
        );
    }
    loadRoles() {
        this.isADMIN = this.authService.hasRole('ADMIN');
        this.isCHARGE_DE_TRAITEMENT_COURRIER = this.authService.hasRole('CHARGE_DE_TRAITEMENT_COURRIER');
        this.isCHEF_DE_SERVICE = this.authService.hasRole('CHEF_DE_SERVICE');
        this.isAGENT_BO = this.authService.hasRole('AGENT_BO');
        this.isCHARGE_DE_REQUETE = this.authService.hasRole('CHARGE_DE_REQUETE');
        this.isAGENT_CAI = this.authService.hasRole('AGENT_CAI') || (this.authService.authenticatedUser.leServiceVo != null && this.authService.authenticatedUser.leServiceVo.code === 'cai');
        this.isDIRECTEUR = this.authService.hasRole('DIRECTEUR');

    }

    set courrierPieceJoint(value: Array<CourrierPieceJoint>) {
        this._courrierPieceJoint = value;
    }

    public downloadFile(courrier: CourrierVo) {
        //     this.findAllCourrierJoint(courrier.id);
        // console.log(this.courrierPieceJoint);
        // this.courrierPieceJoint.forEach(cour => {
        this.http.get('http://localhost:8080/generated/courrier/downloadFile/' + courrier.id, {
            responseType : 'arraybuffer'}).subscribe(response => this.downLoad(response, courrier.type));
        // });
    }
    public findAllCourrierJoint(id: number) {
        console.log(id);
        this.http.get<CourrierPieceJoint>('http://localhost:8080/generated/courrier/findAllcourrierPieceJoint/' + id).subscribe(
            data => {
                if (data != null) {
                    console.log(data);
                    //  this.courrierPieceJoint = data.courrierPieceJoint;
                }
            }, error => {
                console.log(error);
            }
        );
    }
    downLoad(data: any, type: string) {
        const blob = new Blob([data], { type});
        const url = window.URL.createObjectURL(blob);
        const pwa = window.open(url);
        if (!pwa || pwa.closed || typeof pwa.closed === 'undefined') {
            alert( 'Please disable your Pop-up blocker and try again.');
        }
    }
    get linkedTos(): SelectItem[] {
        return this._linkedTos;
    }

    set linkedTos(value: SelectItem[]) {
        this._linkedTos = value;
    }

    get nbrOfAll(): number {
        return this._nbrOfAll;
    }

    set nbrOfAll(value: number) {
        this._nbrOfAll = value;
    }

    get nbrOfDeparted(): number {
        return this._nbrOfDeparted;
    }

    set nbrOfDeparted(value: number) {
        this._nbrOfDeparted = value;
    }

    get nbrOfArived(): number {
        return this._nbrOfArived;
    }

    set nbrOfArived(value: number) {
        this._nbrOfArived = value;
    }

    get nbrOfOpen(): number {
        return this._nbrOfOpen;
    }

    set nbrOfOpen(value: number) {
        this._nbrOfOpen = value;
    }

    get nbrOfEnCours(): number {
        return this._nbrOfEnCours;
    }

    set nbrOfEnCours(value: number) {
        this._nbrOfEnCours = value;
    }

    get nbrOfTraited(): number {
        return this._nbrOfTraited;
    }

    set nbrOfTraited(value: number) {
        this._nbrOfTraited = value;
    }

    get nbrOfAccused(): number {
        return this._nbrOfAccused;
    }

    set nbrOfAccused(value: number) {
        this._nbrOfAccused = value;
    }

    get nbrOfResponed(): number {
        return this._nbrOfResponed;
    }

    set nbrOfResponed(value: number) {
        this._nbrOfResponed = value;
    }

    get task(): TaskVo {
        if (this._task == null) {
            this._task = new TaskVo();
        }
        return this._task;
    }

    set task(value: TaskVo) {
        this._task = value;
    }

    get verifyIdCourier(): string {
        return this._verifyIdCourier;
    }

    set verifyIdCourier(value: string) {
        this._verifyIdCourier = value;
    }

    get courrierServiceItem(): CourrierServiceItemVo {
        if (this._courrierServiceItem == null) {
            this._courrierServiceItem = new CourrierServiceItemVo();
        }
        return this._courrierServiceItem;
    }

    set courrierServiceItem(value: CourrierServiceItemVo) {
        this._courrierServiceItem = value;
    }

    get courrier(): CourrierVo {
        if (this._courrier == null) {
            this._courrier = new CourrierVo();
            this._courrier.natureCourrierVo = new NatureCourrierVo();
            this._courrier.statusVo = new StatusVo();
            //   this._courrier.phaseAdminVo = new PhaseAdminVo();

            this._courrier.courrierPieceJoint = new Array<CourrierPieceJoint>();
            this._courrier.courrierPieceJoint.forEach(courr => {
                courr = new CourrierPieceJoint();
            });
        }
        return this._courrier;
    }

    set courrier(value: CourrierVo) {
        this._courrier = value;
    }


    get courrierListe(): Array<CourrierVo> {
        return this._courrierListe;
    }

    set courrierListe(value: Array<CourrierVo>) {
        this._courrierListe = value;
    }

    get courrierDetail(): CourrierVo {
        return this._courrierDetail;
    }

    set courrierDetail(value: CourrierVo) {
        this._courrierDetail = value;
    }

    get courrierSearch(): CourrierVo {
        return this._courrierSearch;
    }

    set courrierSearch(value: CourrierVo) {
        this._courrierSearch = value;
    }

    get courrierShowDetail(): boolean {
        return this._courrierShowDetail;
    }

    set courrierShowDetail(value: boolean) {
        this._courrierShowDetail = value;
    }

    get editableCourriers(): Array<CourrierVo> {
        return this._editableCourriers;
    }

    set editableCourriers(value: Array<CourrierVo>) {
        this._editableCourriers = value;
    }


    get departCourriers(): Array<CourrierVo> {
        return this._departCourriers;
    }

    set departCourriers(value: Array<CourrierVo>) {
        this._departCourriers = value;
    }

    get arrivedCourriers(): Array<CourrierVo> {
        return this._arrivedCourriers;
    }

    set arrivedCourriers(value: Array<CourrierVo>) {
        this._arrivedCourriers = value;
    }

    get ouvertCourriers(): Array<CourrierVo> {
        return this._ouvertCourriers;
    }

    set ouvertCourriers(value: Array<CourrierVo>) {
        this._ouvertCourriers = value;
    }

    get enCoursCourriers(): Array<CourrierVo> {
        return this._enCoursCourriers;
    }

    set enCoursCourriers(value: Array<CourrierVo>) {
        this._enCoursCourriers = value;
    }

    get traitedCourriers(): Array<CourrierVo> {
        return this._traitedCourriers;
    }

    set traitedCourriers(value: Array<CourrierVo>) {
        this._traitedCourriers = value;
    }

    get accusedCourriers(): Array<CourrierVo> {
        return this._accusedCourriers;
    }

    set accusedCourriers(value: Array<CourrierVo>) {
        this._accusedCourriers = value;
    }

    get responseCourriers(): Array<CourrierVo> {
        return this._responseCourriers;
    }

    set responseCourriers(value: Array<CourrierVo>) {
        this._responseCourriers = value;
    }


    get natureClients(): Array<NatureClientVo> {
        return this._natureClients;
    }

    set natureClients(value: Array<NatureClientVo>) {
        this._natureClients = value;
    }

    get phaseAdmins(): Array<PhaseAdminVo> {
        return this._phaseAdmins;
    }

    set phaseAdmins(value: Array<PhaseAdminVo>) {
        this._phaseAdmins = value;
    }



    get reservationShow(): boolean {
        return this._reservationShow;
    }

    set reservationShow(value: boolean) {
        this._reservationShow = value;
    }


    get searchedCourriers(): Array<CourrierVo> {
        return this._searchedCourriers;
    }

    set searchedCourriers(value: Array<CourrierVo>) {
        this._searchedCourriers = value;
    }

    get generatedId(): string {
        return this._generatedId;
    }

    set generatedId(value: string) {
        this._generatedId = value;
    }

    get generatedId2(): string {
        return this._generatedId2;
    }

    set generatedId2(value: string) {
        this._generatedId2 = value;
    }

    get reservationCourrier(): CourrierVo {
        return this._reservationCourrier;
    }

    set reservationCourrier(value: CourrierVo) {
        this._reservationCourrier = value;
    }

    get reserveCourier(): CourrierVo {
        return this._reserveCourier;
    }

    set reserveCourier(value: CourrierVo) {
        this._reserveCourier = value;
    }

    get createExpeditorShow(): boolean {
        return this._createExpeditorShow;
    }

    set createExpeditorShow(value: boolean) {
        this._createExpeditorShow = value;
    }

    edit(courrier: CourrierVo) {
        this.courrier = courrier;
        if (this.courrier.courrierServiceItemsVo == null) {
            this.courrier.courrierServiceItemsVo = new Array<CourrierServiceItemVo>();
        }
        if (this.courrier.tasksVo == null) {
            this.courrier.tasksVo = new Array<TaskVo>();
        }
        this.chekIfCoordinateur(courrier) ;
        //  this.findServiceCourrier(this.courrier);
        this.onEdit = true;
        this.onDetail = false;
        this.addNewCourrier = true;
    }

    detail(courrier: CourrierVo) {
        this.courrier = courrier;
        this.onDetail = true;
        this.onEdit = false;
        this.addNewCourrier = true;
        //   this.findServiceCourrier(this.courrier);
    }

    public findServiceCourrier(courrier: CourrierVo) {
        const link = 'http://localhost:8080/generated/courrierServiceItem/courrier/id/' + courrier.id;
        console.log('haaa le liennn ' + link);

        this.http.get <Array<CourrierServiceItemVo>>(link).subscribe(
            value => {
                console.log('haaaa courrierServiceItemsVo !!! ' + value);
                if (value != null) {
                    courrier.courrierServiceItemsVo = value;
                }
            }
        );
    }

    findCourrierByRelance(courrier: CourrierVo) {
        this.http.post('http://localhost:8080/generated/courrier/couriersusceptiblerelance', courrier).subscribe(data => {
            const entries = Object.entries(data);
            console.log(data);
            this.courriersService = new Map<string, Array<CourrierVo>>(entries);

            console.log(this.courriersService);

        });
    }

    sendListCourriers(courriers: CourrierVo[]) {
        this.http.post<number>('http://localhost:8080/generated/courrier/sendcourierrelance/', courriers);

    }

    sendEmail(email: string, subject: string, body: string) {
        this.http.post<number>('http://localhost:8080/generated/courrier/sendcourierredirection/to/' + email + '/subject/' + subject + '/content/' + body, null);
    }

    public findAll() {
        this.http.get <Array<CourrierVo>>('http://localhost:8080/generated/courrier/').subscribe(
            value => {
                if (value != null) {
                    this.courrierListe = value;
                    this.courrierListe.forEach(cor => {
                        console.log(cor.type);
                    });
                } else {
                    console.log('madkheltch oops !!! ');
                    this.courrierListe = [];
                }
            }
        );
    }

    public getStatsByDate(date1: string, date2: string, titleCoordinator: string) {
        this.http.get <Array<number>>('http://localhost:8080/generated/courrier/stats/dateMin/' + date1 + '/dateMax/' + date2 + '/titleCoordinator/' + titleCoordinator).subscribe(
            value => {
                if (value != null) {
                    console.log(value);
                    this.nbrOfArived = value[0];
                    this.nbrOfDeparted = value[1];
                    this.nbrOfOpen = value[2];
                    this.nbrOfEnCours = value[3];
                    this.nbrOfTraited = value[4];
                    this.nbrOfAccused = value[5];
                    this.nbrOfResponed = value[6];
                    this.nbrOfAll = value[7];
                }
            }
        );
    }

    /* public getStatsByDateAndLeService(date1: string, date2: string, leServiceTitle) {
         this.http.get <Array<number>>('http://localhost:8080/generated/courrier/stats/dateMin/' + date1 + '/dateMax/' + date2 + '/leServiceCoordinatorTitle/' + leServiceTitle).subscribe(
             value => {
                 if (value != null) {
                     //console.log(value);
                     this.nbrOfArived = value[0];
                     this.nbrOfDeparted = value[1];
                     this.nbrOfOpen = value[2];
                     this.nbrOfEnCours = value[3];
                     this.nbrOfTraited = value[4];
                     this.nbrOfAccused = value[5];
                     this.nbrOfResponed = value[6];
                     this.nbrOfAll = value[7];
                 }
             }
         );
     }*/

    public countAll() {
        this.http.get <number>('http://localhost:8080/generated/courrier/countAll').subscribe(
            value => {
                if (value != null) {
                    this.nbrOfAll = value;
                } else {
                    console.log('madkheltch oops');
                    this.nbrOfAll = 0;
                }
            }
        );
    }

    public countByDate(date: string) {
        this.http.get <number>('http://localhost:8080/generated/courrier/createdAt/' + date).subscribe(
            value => {
                if (value != null) {
                    this.nbrOfAll = value;
                } else {
                    console.log('madkheltch oops');
                    this.nbrOfAll = 0;
                }
            }
        );
    }

    public countByTwoDates(date1: string, date2: string) {
        this.http.get <number>('http://localhost:8080/generated/courrier/createdAt/' + date1 + '/createdAt2/' + date2).subscribe(
            value => {
                if (value != null) {
                    this.nbrOfAll = value;
                } else {
                    console.log('madkheltch oops');
                    this.nbrOfAll = 0;
                }
            }
        );
    }


    public findAllDepartCourriers() {
        this.http.get<Array<CourrierVo>>('http://localhost:8080/generated/courrier/typeCourrier/libelle/' + 'Départ').subscribe(
            value => {
                if (value != null) {
                    this.departCourriers = value;
                } else {
                    console.log('madkheltch oops');
                    this.departCourriers = [];
                }
            }
        );
    }

    public findNumberDepartCourriers() {
        this.http.get<number>('http://localhost:8080/generated/courrier/countTypeCourrier/typeCourrier_libelle/' + 'Départ').subscribe(
            value => {
                if (value != null) {
                    this.nbrOfDeparted = value;
                } else {
                    console.log('madkheltch oops');
                    this.nbrOfDeparted = 0;
                }
            }
        );
    }

    public countDepartCourriersByDate(date: string) {
        this.http.get<number>('http://localhost:8080/generated/courrier/typeCourrier_libelle/' + 'Départ/createdAt/' + date).subscribe(
            value => {
                if (value != null) {
                    this.nbrOfDeparted = value;
                } else {
                    console.log('madkheltch oops');
                    this.nbrOfDeparted = 0;
                }
            }
        );
    }

    public countDepartCourriersByTwoDate(date: string, date2: string) {
        this.http.get<number>('http://localhost:8080/generated/courrier/typeCourrier_libelle/' + 'Départ/createdAt/' + date + '/createdAt2/' + date2).subscribe(
            value => {
                if (value != null) {
                    this.nbrOfDeparted = value;
                } else {
                    console.log('madkheltch oops');
                    this.nbrOfDeparted = 0;
                }
            }
        );
    }

    public findAllArrivedCourriers() {
        this.http.get<Array<CourrierVo>>('http://localhost:8080/generated/courrier/typeCourrier/libelle/' + 'Arrivée').subscribe(
            value => {
                if (value != null) {
                    this.arrivedCourriers = value;
                } else {
                    console.log('madkheltch oops');
                    this.arrivedCourriers = [];
                }
            }
        );
    }

    public findNumberArrivedCourriers() {
        this.http.get<number>('http://localhost:8080/generated/courrier/countTypeCourrier/typeCourrier_libelle/' + 'Arrivée').subscribe(
            value => {
                if (value != null) {
                    this.nbrOfArived = value;
                } else {
                    console.log('madkheltch oops');
                    this.nbrOfArived = 0;
                }
            }
        );
    }

    public countArrivedCourriersByDate(date: string) {
        this.http.get<number>('http://localhost:8080/generated/courrier/typeCourrier_libelle/' + 'Arrivée/createdAt/' + date).subscribe(
            value => {
                if (value != null) {
                    this.nbrOfArived = value;
                } else {
                    console.log('madkheltch oops');
                    this.nbrOfArived = 0;
                }
            }
        );
    }

    public countArrivedCourriersByTwoDate(date: string, date2: string) {
        this.http.get<number>('http://localhost:8080/generated/courrier/typeCourrier_libelle/' + 'Arrivée/createdAt/' + date + '/createdAt2/' + date2).subscribe(
            value => {
                if (value != null) {
                    this.nbrOfArived = value;
                } else {
                    console.log('madkheltch oops');
                    this.nbrOfArived = 0;
                }
            }
        );
    }

    public findAllOpenCourriers() {
        this.http.get<Array<CourrierVo>>('http://localhost:8080/generated/courrier/status/libelle/' + 'Ouvert').subscribe(
            value => {
                if (value != null) {
                    this.ouvertCourriers = value;
                } else {
                    console.log('madkheltch oops');
                    this.ouvertCourriers = [];
                }
            }
        );
    }

    public findNumberOpenCourriers() {
        this.http.get<number>('http://localhost:8080/generated/courrier/countStatus/libelle/' + 'Ouvert').subscribe(
            value => {
                if (value != null) {
                    this.nbrOfOpen = value;
                } else {
                    console.log('madkheltch oops');
                    this.nbrOfOpen = 0;
                }
            }
        );
    }

    public countOpenCourriersByDate(date: string) {
        this.http.get<number>('http://localhost:8080/generated/courrier/status_libelle/' + 'Ouvert/createdAt/' + date).subscribe(
            value => {
                if (value != null) {
                    this.nbrOfOpen = value;
                } else {
                    console.log('madkheltch oops');
                    this.nbrOfOpen = 0;
                }
            }
        );
    }

    public countOpenCourriersByTwoDate(date: string, date2: string) {
        this.http.get<number>('http://localhost:8080/generated/courrier/status_libelle/' + 'Ouvert/createdAt/' + date + '/createdAt2/' + date2).subscribe(
            value => {
                if (value != null) {
                    this.nbrOfOpen = value;
                } else {
                    console.log('madkheltch oops');
                    this.nbrOfOpen = 0;
                }
            }
        );
    }

    public findAllEnCoursCourriers() {
        this.http.get<Array<CourrierVo>>('http://localhost:8080/generated/courrier/status/libelle/' + 'En cours').subscribe(
            value => {
                if (value != null) {
                    this.enCoursCourriers = value;
                } else {
                    console.log('madkheltch oops');
                    this.enCoursCourriers = [];
                }
            }
        );
    }

    public findNumberEncoursCourriers() {
        this.http.get<number>('http://localhost:8080/generated/courrier/countStatus/libelle/' + 'En cours').subscribe(
            value => {
                if (value != null) {
                    this.nbrOfEnCours = value;
                } else {
                    console.log('madkheltch oops');
                    this.nbrOfEnCours = 0;
                }
            }
        );
    }

    public countEnCoursCourriersByDate(date: string) {
        this.http.get<number>('http://localhost:8080/generated/courrier/status_libelle/' + 'En cours/createdAt/' + date).subscribe(
            value => {
                if (value != null) {
                    this.nbrOfEnCours = value;
                } else {
                    console.log('madkheltch oops');
                    this.nbrOfEnCours = 0;
                }
            }
        );
    }

    public countEnCoursCourriersByTwoDate(date: string, date2: string) {
        this.http.get<number>('http://localhost:8080/generated/courrier/status_libelle/' + 'En cours/createdAt/' + date + '/createdAt2/' + date2).subscribe(
            value => {
                if (value != null) {
                    this.nbrOfEnCours = value;
                } else {
                    console.log('madkheltch oops');
                    this.nbrOfEnCours = 0;
                }
            }
        );
    }

    public findAllTraitedCourriers() {
        this.http.get<Array<CourrierVo>>('http://localhost:8080/generated/courrier/status/libelle/' + 'Traité').subscribe(
            value => {
                if (value != null) {
                    this.traitedCourriers = value;
                } else {
                    console.log('madkheltch oops');
                    this.traitedCourriers = [];
                }
            }
        );
    }


    public findNumberTraitedCourriers() {
        this.http.get<number>('http://localhost:8080/generated/courrier/countStatus/libelle/' + 'Traité').subscribe(
            value => {
                if (value != null) {
                    this.nbrOfTraited = value;
                } else {
                    console.log('madkheltch oops');
                    this.nbrOfTraited = 0;
                }
            }
        );
    }

    public countTraitedCourriersByDate(date: string) {
        this.http.get<number>('http://localhost:8080/generated/courrier/status_libelle/' + 'Traité/createdAt/' + date).subscribe(
            value => {
                if (value != null) {
                    this.nbrOfTraited = value;
                } else {
                    console.log('madkheltch oops');
                    this.nbrOfTraited = 0;
                }
            }
        );
    }

    public countTraitedCourriersByTwoDate(date: string, date2: string) {
        this.http.get<number>('http://localhost:8080/generated/courrier/status_libelle/' + 'Traité/createdAt/' + date + '/createdAt2/' + date2).subscribe(
            value => {
                if (value != null) {
                    this.nbrOfTraited = value;
                } else {
                    console.log('madkheltch oops');
                    this.nbrOfTraited = 0;
                }
            }
        );
    }

    public findAllAccusedCourriers() {
        this.http.get<Array<CourrierVo>>('http://localhost:8080/generated/courrier/accuse/' + true).subscribe(
            value => {
                if (value != null) {
                    this.accusedCourriers = value;
                } else {
                    console.log('madkheltch oops');
                    this.accusedCourriers = [];
                }
            }
        );
    }

    public findNumberAccusedCourriers() {
        this.http.get<number>('http://localhost:8080/generated/courrier/countAccused/accuse/' + true).subscribe(
            value => {
                if (value != null) {
                    this.nbrOfAccused = value;
                } else {
                    console.log('madkheltch oops');
                    this.nbrOfAccused = 0;
                }
            }
        );
    }

    public countAccusedCourriersByDate(date: string) {
        this.http.get<number>('http://localhost:8080/generated/courrier/accuse/' + true + '/createdAt/' + date).subscribe(
            value => {
                if (value != null) {
                    this.nbrOfAccused = value;
                } else {
                    console.log('madkheltch oops');
                    this.nbrOfAccused = 0;
                }
            }
        );
    }

    public countAccusedCourriersByTwoDates(date: string, date2: string) {
        this.http.get<number>('http://localhost:8080/generated/courrier/accuse/' + true + '/createdAt/' + date + '/createdAt2/' + date2).subscribe(
            value => {
                if (value != null) {
                    this.nbrOfAccused = value;
                } else {
                    console.log('madkheltch oops');
                    this.nbrOfAccused = 0;
                }
            }
        );
    }


    public findAllResponseCourriers() {
        this.http.get<Array<CourrierVo>>('http://localhost:8080/generated/courrier/reponse/' + true).subscribe(
            value => {
                if (value != null) {
                    this.responseCourriers = value;
                } else {
                    console.log('madkheltch oops');
                    this.responseCourriers = [];
                }
            }
        );
    }

    public findNumberResponedCourriers() {
        this.http.get<number>('http://localhost:8080/generated/courrier/countResponse/reponse/' + true).subscribe(
            value => {
                if (value != null) {
                    this.nbrOfResponed = value;
                } else {
                    console.log('madkheltch oops');
                    this.nbrOfResponed = 0;
                }
            }
        );
    }

    public countResponseCourriersByDate(date: string) {
        this.http.get<number>('http://localhost:8080/generated/courrier/reponse/' + true + '/createdAt/' + date).subscribe(
            value => {
                if (value != null) {
                    this.nbrOfResponed = value;
                } else {
                    console.log('madkheltch oops');
                    this.nbrOfResponed = 0;
                }
            }
        );
    }

    public countResponseCourriersByTwoDates(date: string, date2: string) {
        this.http.get<number>('http://localhost:8080/generated/courrier/reponse/' + true + '/createdAt/' + date + '/createdAt2/' + date2).subscribe(
            value => {
                if (value != null) {
                    this.nbrOfResponed = value;
                } else {
                    console.log('madkheltch oops');
                    this.nbrOfResponed = 0;
                }
            }
        );
    }

    public saveCourrier() {

        console.log(this.courrier.courrierPieceJoint);
        this.http.post <number>('http://localhost:8080/generated/courrier/', this.courrier).subscribe(data => {
                if (data == 1) {
                    this.findAll();
//                this.courrierListe.push(data);
                    this.addNewCourrier = false;
                    this.courrier = null;
                }
            }, eror => {
                console.log('eroro');
            }
        );
    }
    public saveCourrierPieceJoint(form: FormData) {
        this.http.post <number>('http://localhost:8080/generated/courrier/create', form).subscribe(data => {
            if (data != null) {
                console.log('sucess');
            }
        });
    }

    public verifyId(IdCourier: string) {
        this.http.get('http://localhost:8080/generated/courrier/verify/IdCourier/' + IdCourier, {responseType: 'text'}).subscribe(
            value => {
                if (value != null) {
                    this.verifyIdCourier = value;

                }
            });
    }

    public editCourrier() {
        console.log(this.courrier);
        this.http.put <CourrierVo>('http://localhost:8080/generated/courrier/', this.courrier).subscribe(data => {
            console.log(this.courrier);

            this.addNewCourrier = false;
            this.courrier = null;

        });


    }


    public addTask() {
        const clone = this.cloneTask(this.task);
        this.courrier.tasksVo.push(clone);
        this.task = null;
        this.task.assigneVo = clone.assigneVo;
        this.task.statusVo = clone.statusVo;

    }

    public cloneTask(task: TaskVo) {
        const myTaskClone = new TaskVo();
        myTaskClone.delai = task.delai;
        myTaskClone.relance = task.relance;
        myTaskClone.accuse = task.accuse;
        myTaskClone.reponse = task.reponse;
        myTaskClone.id = task.id;
        myTaskClone.title = task.title;
        myTaskClone.description = task.description;
        myTaskClone.observation = task.observation;
        myTaskClone.assigneVo = task.assigneVo;
        myTaskClone.statusVo = task.statusVo;
        myTaskClone.dateAccuse = task.dateAccuse;
        myTaskClone.dateReponse = task.dateReponse;
        return myTaskClone;
    }

    public removeTask(i: number) {
        this.courrier.tasksVo.splice(i, 1);
    }

    public addCourrierServiceItem() {
        this.courrier.courrierServiceItemsVo.push(this.cloneCourrierServiceItem(this.courrierServiceItem));

    }

    public cloneCourrierServiceItem(courrierServiceItem: CourrierServiceItemVo) {
        const myCourrierServiceItemClone = new CourrierServiceItemVo();
        myCourrierServiceItemClone.serviceVo = new LeServiceVo();
        myCourrierServiceItemClone.serviceVo.title = courrierServiceItem.serviceVo.title;
        myCourrierServiceItemClone.serviceVo.code = courrierServiceItem.serviceVo.code;
        myCourrierServiceItemClone.serviceVo.id = courrierServiceItem.serviceVo.id;
        return myCourrierServiceItemClone;
    }

    public removeCourrierServiceItem(i: number) {
        this.courrier.courrierServiceItemsVo.splice(i, 1);
    }

    public findCourrier(pojo: CourrierVo) {
        this.http.post <Array<CourrierVo>>('http://localhost:8080/generated/courrier/search/', pojo).subscribe(
            value => {
                this.courrierListe = value;
            });
    }


    public detailShow(pojo: CourrierVo) {
        this.courrierDetail = pojo;
        this.courrierShowDetail = true;

    }


    delete(pojo: CourrierVo) {
        this.http.delete <CourrierVo>('http://localhost:8080/generated/courrier/id/' + pojo.id).subscribe(
            value => {
                const index = this.courrierListe.indexOf(pojo);
                if (index > -1) {
                    this.courrierListe.splice(index, 1);
                }
            }
        );


    }


    public findByidCourrier(ref: string) {
        this.http.get <CourrierVo>('http://localhost:8080/generated/courrier/idCourrier/' + ref).subscribe(
            value => {
                if (value != null) {
                    this.courrier = value;
                }
            }
        );
    }


    public generateId() {
        this.http.get('http://localhost:8080/generated/courrier/generateId/', {responseType: 'text'}).subscribe(
            value => {
                if (value != null) {
                    this.generatedId = value;

                }
            });
    }


    public reserve(idCourier: string, nbrCourier: number, description: string) {
        this.http.post<CourrierVo>('http://localhost:8080/generated/courrier/courriers/reservation/idCourier/' + idCourier + '/nbr/' + nbrCourier + '/description/' + description, this.reserveCourier).subscribe(
            value => {
                console.log(value);
                this.findAll();
            });
    }

    findLinkedCourrier(courrier: CourrierVo) {
        this.linkedToThisCourrier = courrier;
        this.http.get<CourrierVo[]>('http://localhost:8080/generated/courrier/linked/' + courrier.id).subscribe(data => {
                if (data != null) {
                    this.linkedCourrier = data;
                    this.showLinkedCourrier = true;
                }
            }
        );
    }


    public generateIdReserve() {
        this.http.get('http://localhost:8080/generated/courrier/generateId/', {responseType: 'text'}).subscribe(
            value => {
                if (value != null) {
                    this.generatedId2 = value;

                }
            });
    }


    reservationHide() {

        this.reservationShow = false;
        this.reservationCourrier = new CourrierVo();
    }

    showReservation() {
        this.reservationShow = true;
        this.reservationCourrier = new CourrierVo();
    }

    public detailHide() {

        this.courrierShowDetail = false;
        this.courrierDetail = null;
    }


    showCreateExpeditor() {
        this.createExpeditorShow = true;
        this.expeditorService.expeditor = new ExpeditorVo();
    }

    public print(courriers: Array<CourrierVo>) {
        const httpOptions = {
            responseType: 'blob' as 'json'
        };
        return this.http.post('http://localhost:8080/generated/courrier/pdf', courriers, httpOptions).subscribe((resultBlob: Blob) => {
            const downloadURL = URL.createObjectURL(resultBlob);
            window.open(downloadURL);
        });
    }

    public findPieceJointsParCourrierId(id: number) {
        this.http.get<Array<CourrierPieceJoint>>('http://localhost:8080/generated/courrier/searchbyCourrierid/' + id).subscribe(
            value => {
                if (value != null) {
                    this._courrier.courrierPieceJoint = [];
                    value.forEach(value1 => {
                        value1.absoluteChemin = 'data:image/jpg;base64,' + value1.contenu;
                        this._courrier.courrierPieceJoint.push(value1);
                    });
                }
            });
    }

    public deletePieceJointById(id: number) {
        this.http.delete('http://localhost:8080/generated/courrier/piecejointid/' + id).subscribe();
        this._courrier.courrierPieceJoint.forEach(piece => {
            if (piece.id === id) {
                const index = this._courrier.courrierPieceJoint.indexOf(piece);
                this._courrier.courrierPieceJoint.splice(index, 1);
            }
        } );
    }
}
