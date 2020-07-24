import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CourrierVo} from '../model/courrier.model';

import {TaskVo} from '../model/Task.model';

import {CourrierServiceItemVo} from '../model/CourrierServiceItem.model';
import { LeServiceVo } from '../model/LeService.model';
import {ExpeditorService} from "./Expeditor.service";
import {ExpeditorVo} from "../model/Expeditor.model";

@Injectable({
    providedIn: 'root'
})
export class CourrierService {


    constructor(private http: HttpClient,private expeditorService : ExpeditorService) {
    }

    private _courrierDetail: CourrierVo = new CourrierVo();
    private _courrierListe: Array<CourrierVo> = new Array<CourrierVo>();

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


    private _task: TaskVo;
    private _generatedId: string = '';
    private _generatedId2: string = '';
    private _reservationCourrier: CourrierVo = new CourrierVo();
    private _reserveCourier: CourrierVo = new CourrierVo();
    private _verifyIdCourier : string =''

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

    private _courrierServiceItem: CourrierServiceItemVo;

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

    public findAll() {
        this.http.get <Array<CourrierVo>>('http://localhost:8080/generated/courrier/').subscribe(
            value => {
                if (value != null) {
                    this.courrierListe = value;
                } else {
                    console.log('madkheltch oops');
                    this.courrierListe = [];
                }
            }
        );
    }

    public findByDate(date: string) {
        this.http.get <Array<CourrierVo>>('http://localhost:8080/generated/courrier/createdAt/' + date).subscribe(
            value => {
                if (value != null) {
                    console.log('dkhelt l find by date');
                    this.courrierListe = value;
                } else {
                    console.log('madkheltch oops');
                    this.courrierListe = [];
                }
            }
        );
    }

    public findByTwoDates(date1: string, date2: string) {
        this.http.get <Array<CourrierVo>>('http://localhost:8080/generated/courrier/createdAt/' + date1 + '/createdAt2/' + date2).subscribe(
            value => {
                if (value != null) {
                    this.courrierListe = value;
                } else {
                    console.log('madkheltch oops');
                    this.courrierListe = [];
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

    public findAllDepartCourriersByDate(date: string) {
        this.http.get<Array<CourrierVo>>('http://localhost:8080/generated/courrier/typeCourrier_libelle/' + 'Départ/createdAt/' + date).subscribe(
            value => {
                if (value != null) {
                    console.log('dkhelt l findDepart by date');
                    this.departCourriers = value;
                } else {
                    console.log('madkheltch oops');
                    this.departCourriers = [];
                }
            }
        );
    }

    public findAllDepartCourriersByTwoDate(date: string, date2: string) {
        this.http.get<Array<CourrierVo>>('http://localhost:8080/generated/courrier/typeCourrier_libelle/' + 'Départ/createdAt/' + date + '/createdAt2/' + date2).subscribe(
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

    public findAllArrivedCourriersByDate(date: string) {
        this.http.get<Array<CourrierVo>>('http://localhost:8080/generated/courrier/typeCourrier_libelle/' + 'Arrivée/createdAt/' + date).subscribe(
            value => {
                if (value != null) {
                    console.log('dkhelt l find arrived by date');
                    this.arrivedCourriers = value;
                } else {
                    console.log('madkheltch oops');
                    this.arrivedCourriers = [];
                }
            }
        );
    }

    public findAllArrivedCourriersByTwoDate(date: string, date2: string) {
        this.http.get<Array<CourrierVo>>('http://localhost:8080/generated/courrier/typeCourrier_libelle/' + 'Arrivée/createdAt/' + date + '/createdAt2/' + date2).subscribe(
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

    public findAllOpenCourriersByDate(date: string) {
        this.http.get<Array<CourrierVo>>('http://localhost:8080/generated/courrier/status_libelle/' + 'Ouvert/createdAt/' + date).subscribe(
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

    public findAllOpenCourriersByTwoDate(date: string, date2: string) {
        this.http.get<Array<CourrierVo>>('http://localhost:8080/generated/courrier/status_libelle/' + 'Ouvert/createdAt/' + date + '/createdAt2/' + date2).subscribe(
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

    public findAllEnCoursCourriersByDate(date: string) {
        this.http.get<Array<CourrierVo>>('http://localhost:8080/generated/courrier/status_libelle/' + 'En cours/createdAt/' + date).subscribe(
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

    public findAllEnCoursCourriersByTwoDate(date: string, date2: string) {
        this.http.get<Array<CourrierVo>>('http://localhost:8080/generated/courrier/status_libelle/' + 'En cours/createdAt/' + date + '/createdAt2/' + date2).subscribe(
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

    public findAllTraitedCourriersByDate(date: string) {
        this.http.get<Array<CourrierVo>>('http://localhost:8080/generated/courrier/status_libelle/' + 'Traité/createdAt/' + date).subscribe(
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

    public findAllTraitedCourriersByTwoDate(date: string, date2: string) {
        this.http.get<Array<CourrierVo>>('http://localhost:8080/generated/courrier/status_libelle/' + 'Traité/createdAt/' + date + '/createdAt2/' + date2).subscribe(
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

    public findAllAccusedCourriersByDate(date: string) {
        this.http.get<Array<CourrierVo>>('http://localhost:8080/generated/courrier/accuse/' + true + '/createdAt/' + date).subscribe(
            value => {
                if (value != null) {
                    console.log('dkhelt l find accused by date');
                    this.accusedCourriers = value;
                } else {
                    console.log('madkheltch oops');
                    this.accusedCourriers = [];
                }
            }
        );
    }

    public findAllAccusedCourriersByTwoDates(date: string, date2: string) {
        this.http.get<Array<CourrierVo>>('http://localhost:8080/generated/courrier/accuse/' + true + '/createdAt/' + date + '/createdAt2/' + date2).subscribe(
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

    public findAllResponseCourriersByDate(date: string) {
        this.http.get<Array<CourrierVo>>('http://localhost:8080/generated/courrier/reponse/' + true + '/createdAt/' + date).subscribe(
            value => {
                if (value != null) {
                    console.log('dkhelt l find reponse by date');
                    this.responseCourriers = value;
                } else {
                    console.log('madkheltch oops');
                    this.responseCourriers = [];
                }
            }
        );
    }

    public findAllResponseCourriersByTwoDates(date: string, date2: string) {
        this.http.get<Array<CourrierVo>>('http://localhost:8080/generated/courrier/reponse/' + true + '/createdAt/' + date + '/createdAt2/' + date2).subscribe(
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

    public saveCourrier() {
        this.http.post <CourrierVo>('http://localhost:8080/generated/courrier/', this.courrier).subscribe(data => {
            if (data != null) {
                this.courrierListe.push(data);
            }
            this.courrier = null;
        });

    }

    public verifyId(IdCourier : string){
        this.http.get('http://localhost:8080/generated/courrier/verify/IdCourier/'+IdCourier, {responseType: 'text'}).subscribe(
            value => {
                if (value != null) {
                    this.verifyIdCourier = value;

                }
            });
    }
    public editCourrier() {
        this.http.put <CourrierVo>('http://localhost:8080/generated/courrier/', this.courrier).subscribe(data => {
        });
        this.courrier.tasksVo.length = 0;
        this.courrier.courrierServiceItemsVo.length = 0;

    }

   
  public addTask() {
    console.log(this.task);
    let clone = this.cloneTask(this.task);
    console.log(clone);
    this.courrier.tasksVo.push(clone);
    this.task =null;
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
                var index = this.courrierListe.indexOf(pojo);
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


    public reserve(idCourier: string, nbrCourier: number) {
        this.http.post<CourrierVo>('http://localhost:8080/generated/courrier/courriers/reservation/idCourier/' + idCourier + '/nbr/' + nbrCourier, this.reserveCourier).subscribe(
            value => {
                console.log(value);
                this.findAll();
            });
    }

    public generateIdReserve() {
        this.http.get('http://localhost:8080/generated/courrier/generateId/', {responseType: 'text'}).subscribe(
            value => {
                if (value != null) {
                    this.generatedId2 = value;

                }
            });
    }

    private _reservationShow: boolean;
    private _createExpeditorShow: boolean;


    reservationHide() {

        this.reservationShow = false;
        this.reservationCourrier = new CourrierVo();
    }

    showReservation() {
        this.reservationShow = true;
        this.reservationCourrier = new CourrierVo();
    }


    get reservationShow(): boolean {
        return this._reservationShow;
    }

    set reservationShow(value: boolean) {
        this._reservationShow = value;
    }

    private _courrierShowDetail: boolean;

    public detailHide() {

        this.courrierShowDetail = false;
        this.courrierDetail = null;
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



    showCreateExpeditor(){
        this.createExpeditorShow = true;
        this.expeditorService.expeditor = new ExpeditorVo();
    }
    get createExpeditorShow(): boolean {
        return this._createExpeditorShow;
    }

    set createExpeditorShow(value: boolean) {
        this._createExpeditorShow = value;
    }

}
