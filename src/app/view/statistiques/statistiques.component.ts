import {Component, OnInit} from '@angular/core';
import {CourrierService} from '../../controller/service/Courrier.service';

@Component({
    selector: 'app-statistiques',
    templateUrl: './statistiques.component.html',
    styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {


    // countCourrierByNatureClientData: Map<string, any> = new Map<string, any>();
    countCourrierByNatureClientData: any;
    countCourrierByService: any;
    countCourrierByExpeditorSex: any;
    countCourrierByDestinatorSex: any;
    countCourrierBySubject: any;
    countCourrierByVoie: any;
    countCourrierByServiceEmeteur: any;
    countCourrierByServiceCoord: any;
    countCourrierByEtatEval: any;
    countCourrierAcceptedBySubject: any;
    countCourrierRefusedBySubject: any;
    countCourrierAcceptedByNatureClient: any;
    countCourrierRefusedByNatureClient: any;
    countCourrierRefusedByReason: any;
    countCourrierTraiteByNatureClient: any;
    countCourrierTraiteByServiceCoord: any;
    countCourrierTraiteByServiceEmeteur: any;
    active = false;
    loaded: boolean = false;

    items: any;

    constructor(private _courrierService: CourrierService) {
        this.statsCourrierByNatureClient();
        this.statsCourrierByService();
        this.statsCourrierByDestinatorSex();
        this.statsCourrierByExpeditorSex();
        this.statsCourrierAcceptedByNatureClient();
        this.statsCourrierAcceptedBySubject();
        this.statsCourrierByEtatEval();
        this.statsCourrierByServiceCoord();
        this.statsCourrierByServiceEmeteur();
        this.statsCourrierBySubject();
        this.statsCourrierByVoie();
        this.statsCourrierRefusedByNatureClient();
        this.statsCourrierRefusedByReason();
        this.statsCourrierRefusedBySubject();
        this.statsCourrierTraiteByNatureClient();
        this.statsCourrierTraiteByServiceCoord();
        this.statsCourrierTraiteByServiceEmeteur();
    }

    get courrierService(): CourrierService {
        return this._courrierService;
    }

    set courrierService(value: CourrierService) {
        this._courrierService = value;
    }

    ngOnInit(): void {
        this.items = [
            {label: 'Nature Client'},
            {label: 'Service'},
            {label: 'Bla'},
            {label: 'Bla'},
            {label: 'Bla'}
        ];
    }

    statsCourrierByNatureClient() {
        this.courrierService.courrierByNatureClient().subscribe(value => {
            this.countCourrierByNatureClientData = this.listToData(value);
            this.loaded = true;

        });
    }

    statsCourrierByService() {
        this.courrierService.courrierByService().subscribe(value => {
            this.countCourrierByService = this.listToData(value);
            this.loaded = true;

        });
    }
    statsCourrierByExpeditorSex() {
        this.courrierService.courrierByExpeditorSex().subscribe(value => {
            this.countCourrierByExpeditorSex = this.listToData(value);
            this.loaded = true;

        });
    }
    statsCourrierByServiceEmeteur() {
        this.courrierService.courrierByServiceEmeteur().subscribe(value => {
            this.countCourrierByServiceEmeteur = this.listToData(value);
            this.loaded = true;

        });
    }
    statsCourrierByServiceCoord() {
        this.courrierService.courrierByServiceCoord().subscribe(value => {
            this.countCourrierByServiceCoord = this.listToData(value);
            this.loaded = true;

        });
    }
    statsCourrierBySubject() {
        this.courrierService.courrierBySubject().subscribe(value => {
            this.countCourrierBySubject = this.listToData(value);
            this.loaded = true;

        });
    }
    statsCourrierByVoie() {
        this.courrierService.courrierByVoie().subscribe(value => {
            this.countCourrierByVoie = this.listToData(value);
            this.loaded = true;

        });
    }
    statsCourrierByEtatEval() {
        this.courrierService.courrierByEtatEval().subscribe(value => {
            this.countCourrierByEtatEval = this.listToData(value);
            this.loaded = true;

        });
    }
    statsCourrierRefusedBySubject() {
        this.courrierService.courrierRefusedBySubject().subscribe(value => {
            this.countCourrierRefusedBySubject = this.listToData(value);
            this.loaded = true;

        });
    }
    statsCourrierAcceptedByNatureClient() {
        this.courrierService.courrierAcceptedByNatureClient().subscribe(value => {
            this.countCourrierAcceptedByNatureClient = this.listToData(value);
            this.loaded = true;

        });
    }
    statsCourrierRefusedByNatureClient() {
        this.courrierService.courrierRefusedByNatureClient().subscribe(value => {
            this.countCourrierRefusedByNatureClient = this.listToData(value);
            this.loaded = true;

        });
    }
    statsCourrierTraiteByServiceEmeteur() {
        this.courrierService.courrierTraiteByServiceEmeteur().subscribe(value => {
            this.countCourrierTraiteByServiceEmeteur = this.listToData(value);
            this.loaded = true;

        });
    }
    statsCourrierTraiteByServiceCoord() {
        this.courrierService.courrierTraiteByServiceCoord().subscribe(value => {
            this.countCourrierTraiteByServiceCoord = this.listToData(value);
            this.loaded = true;

        });
    }
    statsCourrierTraiteByNatureClient() {
        this.courrierService.courrierTraiteByNatureClient().subscribe(value => {
            this.countCourrierTraiteByNatureClient = this.listToData(value);
            this.loaded = true;

        });
    }
    statsCourrierByDestinatorSex() {
        this.courrierService.courrierByDestinatorSex().subscribe(value => {
            this.countCourrierByDestinatorSex = this.listToData(value);
            this.loaded = true;

        });
    }
    statsCourrierRefusedByReason() {
        this.courrierService.courrierRefusedByReason().subscribe(value => {
            this.countCourrierRefusedByReason = this.listToData(value);
            this.loaded = true;

        });
    }
    statsCourrierAcceptedBySubject() {
        this.courrierService.courrierAcceptedBySubject().subscribe(value => {
            this.countCourrierAcceptedBySubject = this.listToData(value);
            this.loaded = true;

        });
    }

    listToData(object: any): any {

        const list = [{name: 'observations', data: object.oservations},
            {name: 'propositions', data: object.propositions},
            {name: 'reclamations', data: object.reclamations}];
        const result = [];
        list.forEach(
            value => {
                const data = {
                    labels: [],
                    datasets: [{
                        data: [],
                        backgroundColor: []
                    }]
                };
                const options = {
                    title: {
                        display: true,
                        text: value.name,
                        fontSize: 16
                    },
                    legend: {
                        position: 'bottom'
                    }
                };
                for (const stat of value.data) {
                    data.labels.push(stat.groupe);
                    data.datasets[0].data.push(stat.count);
                    data.datasets[0].backgroundColor.push(this.getRandomColor());
                }

                result.push({data, options});
            }
        );

        console.log(result);
        return result;
    }

    getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }


    selectStat(header: any) {
        this.loaded = false;
        console.log(header);

    }
}
