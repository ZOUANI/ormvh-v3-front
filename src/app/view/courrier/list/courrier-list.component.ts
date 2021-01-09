import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CourrierVo} from '../../../controller/model/courrier.model';
import {CourrierService} from '../../../controller/service/Courrier.service';
import {StatusVo} from '../../../controller/model/Status.model';
import {TypeCourrierVo} from '../../../controller/model/TypeCourrier.model';
import {VoieVo} from '../../../controller/model/Voie.model';
import {TypeCourrierService} from "../../../controller/service/TypeCourrier.service";
import {VoieService} from "../../../controller/service/Voie.service";
import {StatusService} from "../../../controller/service/Status.service";

@Component({
    selector: 'app-courrier-list',
    templateUrl: './courrier-list.component.html',
    styleUrls: ['./courrier-list.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class CourrierlistComponent implements OnInit {
    typeCourriers: TypeCourrierVo[];
    voies: VoieVo[];
    statuss: StatusVo[];


    constructor(private _courrierService: CourrierService, private statusService: StatusService,
                private typeCourrierService: TypeCourrierService, private voieService: VoieService
    ) {
    }


    ngOnInit(): void {
        this.findAlltypeCourriers();
        this.findAllvoies();
        this.findAllstatuss();
    }

    isCourrierSucceptibleInitialisation(courrier: CourrierVo) {
        return courrier.etatCourrierVo == null || courrier.etatCourrierVo.code === 'init';
    }

    edit(courrier: CourrierVo) {
        this.courrierService.edit(courrier);
        console.log('haaa courier.coordinator ' + courrier.coordinator);
    }

    detail(courrier: CourrierVo) {
        this.courrierService.detail(courrier);
    }

    roleAdmin() {
        return this.courrierService.isADMIN;
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

    showNewCorrierDialogArrive() {
        this.courrierService.courrier = null;
        this.courrierService.addNewCourrier = true;
        this.courrierService.onEdit = false;
        this.courrierService.onDetail = false;
        this.courrierService.courrier.typeCourrierVo.libelle = 'Arrivee';
        this.courrierService.isCourieSorieOrArrivee = true;
    }

    public download(courrier: CourrierVo) {
        this.courrierService.downloadFile(courrier);
        //  this.courrierService.
    }

    showNewCorrierDialogSortie() {
        this.courrierService.courrier = null;
        this.courrierService.addNewCourrier = true;
        this.courrierService.onEdit = false;
        this.courrierService.onDetail = false;
        this.courrierService.courrier.typeCourrierVo.libelle = 'Sortie';
        this.courrierService.isCourieSorieOrArrivee = false;
        console.log(">>>>>" + this.courrierService.isCourieSorieOrArrivee);

    }

    get addNewCourrier(): boolean {
        return this.courrierService.addNewCourrier;
    }

    set addNewCourrier(value: boolean) {
        this.courrierService.addNewCourrier = value;
    }

    get courrierService(): CourrierService {
        return this._courrierService;
    }

    set courrierService(value: CourrierService) {
        this._courrierService = value;
    }

    get courrierListe(): Array<CourrierVo> {
        return this.courrierService.courrierListe;
    }

    set courrierListe(value: Array<CourrierVo>) {
        this.courrierService.courrierListe = value;
    }

    get courrierDetail(): CourrierVo {
        return this.courrierService.courrierDetail;
    }

    set courrierDetail(value: CourrierVo) {
        this.courrierService.courrierDetail = value;
    }

    get courrierSearch(): CourrierVo {
        return this.courrierService.courrierSearch;
    }

    set courrierSearch(value: CourrierVo) {
        this.courrierService.courrierSearch = value;
    }


    get courrierShowDetail(): boolean {
        return this.courrierService.courrierShowDetail;
    }

    set courrierShowDetail(value: boolean) {
        this.courrierService.courrierShowDetail = value;
    }


    showLinked(courrier: CourrierVo) {
        this.courrierService.findLinkedCourrier(courrier);
    }

    get showLinkedCourrier(): boolean {
        return this.courrierService.showLinkedCourrier;
    }

    set showLinkedCourrier(value: boolean) {
        this.courrierService.showLinkedCourrier = value;
    }

    delete(pojo: CourrierVo) {
        this.courrierService.delete(pojo);
    }


    detailShow(pojo: CourrierVo) {
        this.courrierService.detailShow(pojo);

    }

    findCourrier(pojo: CourrierVo) {
        this.courrierService.findCourrier(pojo);

    }


    showReservation() {
        this.courrierService.showReservation();
    }


    get reservationShow(): boolean {
        return this.courrierService.reservationShow;
    }

    set reservationShow(value: boolean) {
        this.courrierService.reservationShow = value;
    }


    rowSelected(p: CourrierVo) {
        if (this.exist(p)) {
            this.deleteSelected(p);
        } else {
            let cloned = new CourrierVo();
            cloned.idCourrier = p.idCourrier;
            this.courriersSelected.push(cloned);
        }

    }

    public courriersSelected = Array<CourrierVo>();

    exist(p: CourrierVo): boolean {
        for (let item of this.courriersSelected) {
            if (item.idCourrier == p.idCourrier) {
                return true;
            }
        }
        return false;
    }

    deleteSelected(p) {
        for (let item of this.courriersSelected) {
            if (item.idCourrier == p.idCourrier) {
                this.courriersSelected.splice(this.courriersSelected.indexOf(item), 1);
            }
        }
    }

    print() {
        this._courrierService.print(this.courriersSelected);
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


    findAllvoies() {
        this.voieService.findAllvoies().subscribe(data => {
            if (data != null) {
                this.voies = data;
            }
        }, error => {
            console.log(error);
        });
    }

    findAllstatuss() {
        this.statusService.findAllstatuss().subscribe(data => {
            if (data != null) {
                this.statuss = data;
            }
        }, error => {
            console.log(error);
        });
    }


    get showEmailDialog(): boolean {
        return this.courrierService.showEmailDialog;
    }

    set showEmailDialog(value: boolean) {
        this.courrierService.showEmailDialog = value;
    }


    email(courrier: CourrierVo) {
        this.courrierService.selectedCourrier = courrier;
        this.showEmailDialog = true;
    }


}
