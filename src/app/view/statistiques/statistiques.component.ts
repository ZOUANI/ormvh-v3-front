import {Component, OnInit, ViewChild} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {StatistiqueService} from "../../controller/service/statistique.service";
import {StatistiqueVo} from "../../controller/model/statistique-vo.model";
import {UIChart} from "primeng/chart";


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
    countCourrierTraiteByService: any;
    countCourrierByDestinatorTrancheAge: any;
    countCourrierByExpeditorTrancheAge: any;
    countCourrierRejeteNonConformeReponduByService: any;
    countCourrierRejeteNonConformeReponduByNatureClient: any;
    countCourrierRejeteNonConformeSansReponceByService: any;
    countCourrierRejeteNonConformeSansReponceByNatureClient: any;

    active = false;
    loaded: boolean = false;
    items: MenuItem[];
    activeItem: MenuItem;
    subactiveItem: MenuItem;

    constructor(private statistiqueService: StatistiqueService) {

    }

    @ViewChild("chart") chart: UIChart;

    get statistiqueVo(): StatistiqueVo {

        return this.statistiqueService.statistiqueVo;
    }

    set statistiqueVo(value: StatistiqueVo) {
        this.statistiqueService.statistiqueVo = value;
    }


    initsubStats(e: any) {

        if (true) {
            this.activeItem = e.item;
            this.subactiveItem = e.item.items[0];
            const subevent = e;
            subevent.item = e.item.items[0];
            subevent.item.command(subevent);
        }
    }


    ngOnInit(): void {
        this.items = [
            {
                label: 'Nature Client',
                routerLink: this.countCourrierByNatureClientData,
                command: (event) => this.statsCourrierByNatureClient(event)
            },
            {
                label: 'Sexe',
                items: [{
                    label: 'expediteur',
                    routerLink: this.countCourrierByExpeditorSex,
                    command: (event) => this.statsCourrierByExpeditorSex(event)
                }, {
                    label: 'destinataire',
                    routerLink: this.countCourrierByDestinatorSex,
                    command: (event) => this.statsCourrierByDestinatorSex(event)
                }],
                command: (event) => this.initsubStats(event)
            }, {
                label: 'Tranche Age',
                items: [{
                    label: 'expediteur',
                    routerLink: this.countCourrierByExpeditorTrancheAge,
                    command: (event) => this.statsCourrieByExpeditorTrancheAge(event)
                }, {
                    label: 'destinataire',
                    routerLink: this.countCourrierByDestinatorTrancheAge,
                    command: (event) => this.statsCourrierByDestinatorTrancheAge(event)
                }],
                command: (event) => this.initsubStats(event)
            },
            {
                label: 'Service',
                routerLink: this.countCourrierByService,
                command: (event) => this.statsCourrierByService(event)
            },
            {
                label: 'Subject',
                routerLink: this.countCourrierBySubject,
                command: (event) => this.statsCourrierBySubject(event)
            },
            {label: 'Voie', routerLink: this.countCourrierByVoie, command: (event) => this.statsCourrierByVoie(event)},
            {
                label: 'Etat Evaluation',
                routerLink: this.countCourrierByEtatEval,
                command: (event) => this.statsCourrierByEtatEval(event)
            },
            {
                label: 'Service Emeteur',
                routerLink: this.countCourrierByServiceEmeteur,
                command: (event) => this.statsCourrierByServiceEmeteur(event)
            },
            {
                label: 'Service Coord',
                routerLink: this.countCourrierByServiceCoord,
                command: (event) => this.statsCourrierByServiceCoord(event)
            },
            {
                label: 'Acceptee', items: [{
                    label: 'Subject',
                    routerLink: this.countCourrierAcceptedBySubject,
                    command: (event) => this.statsCourrierAcceptedBySubject(event)
                }, {
                    label: 'Nature Client',
                    routerLink: this.countCourrierAcceptedByNatureClient,
                    command: (event) => this.statsCourrierAcceptedByNatureClient(event)
                }], command: (event) => this.initsubStats(event)
            },
            {
                label: 'Refusee', items: [{
                    label: 'Subject',
                    routerLink: this.countCourrierRefusedBySubject,
                    command: (event) => this.statsCourrierRefusedBySubject(event)
                }, {
                    label: 'Reason',
                    routerLink: this.countCourrierRefusedByReason,
                    command: (event) => this.statsCourrierRefusedByReason(event)
                }, {
                    label: 'Nature Client',
                    routerLink: this.countCourrierRefusedByNatureClient,
                    command: (event) => this.statsCourrierRefusedByNatureClient(event)
                }], command: (event) => this.initsubStats(event)
            },
            {
                label: 'Traitee',
                items: [{
                    label: 'Service Emeteur',
                    routerLink: this.countCourrierTraiteByServiceEmeteur,
                    command: (event) => this.statsCourrierTraiteByServiceEmeteur(event)
                }, {
                    label: 'Service Coord',
                    routerLink: this.countCourrierTraiteByServiceCoord,
                    command: (event) => this.statsCourrierTraiteByServiceCoord(event)
                }, {
                    label: 'Nature Client',
                    routerLink: this.countCourrierTraiteByNatureClient,
                    command: (event) => this.statsCourrierTraiteByNatureClient(event)
                }, {
                    label: 'Service',
                    routerLink: this.countCourrierTraiteByService,
                    command: (event) => this.statsCourrierTraiteByService(event)
                }],
                command: (event) => this.initsubStats(event)
            }, {
                label: 'Rejete sans reponse',
                items: [{
                    label: 'Service',
                    routerLink: this.countCourrierRejeteNonConformeSansReponceByService,
                    command: (event) => this.statsCourrierRejeteNonConformeSansReponceByService(event)
                }, {
                    label: 'Nature Client',
                    routerLink: this.countCourrierRejeteNonConformeSansReponceByNatureClient,
                    command: (event) => this.statsCourrierRejeteNonConformeSansReponceByNatureClient(event)
                }],
                command: (event) => this.initsubStats(event)
            }, {
                label: 'Rejete avec reponse',
                items: [{
                    label: 'Service',
                    routerLink: this.countCourrierRejeteNonConformeReponduByService,
                    command: (event) => this.statsCourrierRejeteNonConformeReponduByService(event)
                }, {
                    label: 'Nature Client',
                    routerLink: this.countCourrierRejeteNonConformeReponduByNatureClient,
                    command: (event) => this.statsCourrierRejeteNonConformeReponduByNatureClient(event)
                }],
                command: (event) => this.initsubStats(event)
            }
        ];
        this.statsCourrierByNatureClientInit();
    }

    statsCourrierByNatureClient(e: any) {

        this.activeItem = e.item;
        if (this.countCourrierByNatureClientData == null) {
            this.loaded = false;
            this.statistiqueService.courrierByNatureClient().subscribe(value => {
                this.countCourrierByNatureClientData = this.listToData(value);
                this.activeItem.routerLink = this.countCourrierByNatureClientData;
                this.loaded = true;


            });
        }

    }

    statsCourrierByNatureClientInit() {

        this.activeItem = this.items[0];
        this.loaded = false;
        this.statistiqueService.courrierByNatureClient().subscribe(value => {
            this.countCourrierByNatureClientData = this.listToData(value);
            this.activeItem.routerLink = this.countCourrierByNatureClientData;
            this.loaded = true;

        });


    }

    statsCourrierByService(e: any) {
        this.activeItem = e.item;
        if (this.countCourrierByService == null) {
            this.loaded = false;
            this.statistiqueService.courrierByService().subscribe(value => {
                this.countCourrierByService = this.listToData(value);
                this.activeItem.routerLink = this.countCourrierByService;
                this.loaded = true;

            });
        }
    }

    statsCourrierByExpeditorSex(e: any) {
        console.log(e.item);
        this.subactiveItem = e.item;
        if (this.countCourrierByExpeditorSex == null) {
            this.loaded = false;
            this.statistiqueService.courrierByExpeditorSex().subscribe(value => {
                this.countCourrierByExpeditorSex = this.listToData(value);
                this.subactiveItem.routerLink = this.countCourrierByExpeditorSex;
                this.loaded = true;

            });
        }
    }

    statsCourrierByDestinatorTrancheAge(e: any) {
        console.log(e.item);
        this.subactiveItem = e.item;
        if (this.countCourrierByDestinatorTrancheAge == null) {
            this.loaded = false;
            this.statistiqueService.courrierByDestinatorTrancheAge().subscribe(value => {
                this.countCourrierByDestinatorTrancheAge = this.listToData(value);
                this.subactiveItem.routerLink = this.countCourrierByDestinatorTrancheAge;
                this.loaded = true;

            });
        }
    }

    statsCourrieByExpeditorTrancheAge(e: any) {
        console.log(e.item);
        this.subactiveItem = e.item;
        if (this.countCourrierByExpeditorTrancheAge == null) {
            this.loaded = false;
            this.statistiqueService.courrierByExpeditorTrancheAge().subscribe(value => {
                this.countCourrierByExpeditorTrancheAge = this.listToData(value);
                this.subactiveItem.routerLink = this.countCourrierByExpeditorTrancheAge;
                this.loaded = true;

            });
        }
    }

    statsCourrierRejeteNonConformeReponduByService(e: any) {
        console.log(e.item);
        this.subactiveItem = e.item;
        if (this.countCourrierRejeteNonConformeReponduByService == null) {
            this.loaded = false;
            this.statistiqueService.courrierRejeteNonConformeReponduByService().subscribe(value => {
                this.countCourrierRejeteNonConformeReponduByService = this.listToData(value);
                this.subactiveItem.routerLink = this.countCourrierRejeteNonConformeReponduByService;
                this.loaded = true;

            });
        }
    }

    statsCourrierRejeteNonConformeReponduByNatureClient(e: any) {
        console.log(e.item);
        this.subactiveItem = e.item;
        if (this.countCourrierRejeteNonConformeReponduByNatureClient == null) {
            this.loaded = false;
            this.statistiqueService.courrierByRejeteNonConformeReponduByNatureClient().subscribe(value => {
                this.countCourrierRejeteNonConformeReponduByNatureClient = this.listToData(value);
                this.subactiveItem.routerLink = this.countCourrierRejeteNonConformeReponduByNatureClient;
                this.loaded = true;

            });
        }
    }

    statsCourrierRejeteNonConformeSansReponceByService(e: any) {
        console.log(e.item);
        this.subactiveItem = e.item;
        if (this.countCourrierRejeteNonConformeSansReponceByService == null) {
            this.loaded = false;
            this.statistiqueService.courrierByRejeteNonConformeSansReponceByService().subscribe(value => {
                this.countCourrierRejeteNonConformeSansReponceByService = this.listToData(value);
                this.subactiveItem.routerLink = this.countCourrierRejeteNonConformeSansReponceByService;
                this.loaded = true;

            });
        }
    }

    statsCourrierRejeteNonConformeSansReponceByNatureClient(e: any) {
        console.log(e.item);
        this.subactiveItem = e.item;
        if (this.countCourrierRejeteNonConformeSansReponceByNatureClient == null) {
            this.loaded = false;
            this.statistiqueService.courrierByRejeteNonConformeSansReponceByNatureClient().subscribe(value => {
                this.countCourrierRejeteNonConformeSansReponceByNatureClient = this.listToData(value);
                this.subactiveItem.routerLink = this.countCourrierRejeteNonConformeSansReponceByNatureClient;
                this.loaded = true;

            });
        }
    }

    statsCourrierTraiteByService(e: any) {
        this.subactiveItem = e.item;
        if (this.countCourrierTraiteByService == null) {
            this.loaded = false;
            this.statistiqueService.courrierTraiteByService().subscribe(value => {
                this.countCourrierTraiteByService = this.listToData(value);
                this.subactiveItem.routerLink = this.countCourrierTraiteByService;
                this.loaded = true;

            });
        }
    }

    statsCourrierByServiceEmeteur(e: any) {
        this.activeItem = e.item;
        if (this.countCourrierByServiceEmeteur == null) {
            this.loaded = false;
            this.statistiqueService.courrierByServiceEmeteur().subscribe(value => {
                this.countCourrierByServiceEmeteur = this.listToData(value);
                this.activeItem.routerLink = this.countCourrierByServiceEmeteur;
                this.loaded = true;

            });
        }
    }

    statsCourrierByServiceCoord(e: any) {
        this.activeItem = e.item;
        if (this.countCourrierByServiceCoord == null) {
            this.loaded = false;
            this.statistiqueService.courrierByServiceCoord().subscribe(value => {
                this.countCourrierByServiceCoord = this.listToData(value);
                this.activeItem.routerLink = this.countCourrierByServiceCoord;
                this.loaded = true;

            });
        }
    }

    statsCourrierBySubject(e: any) {
        this.activeItem = e.item;
        if (this.countCourrierBySubject == null) {
            this.loaded = false;
            this.statistiqueService.courrierBySubject().subscribe(value => {
                this.countCourrierBySubject = this.listToData(value);
                this.activeItem.routerLink = this.countCourrierBySubject;
                this.loaded = true;

            });
        }
    }

    statsCourrierByVoie(e: any) {
        this.activeItem = e.item;
        if (this.countCourrierByVoie == null) {
            this.loaded = false;
            this.statistiqueService.courrierByVoie().subscribe(value => {
                this.countCourrierByVoie = this.listToData(value);
                this.activeItem.routerLink = this.countCourrierByVoie;
                this.loaded = true;

            });
        }
    }

    statsCourrierByEtatEval(e: any) {
        this.activeItem = e.item;
        if (this.countCourrierByEtatEval == null) {
            this.loaded = false;
            this.statistiqueService.courrierByEtatEval().subscribe(value => {
                this.countCourrierByEtatEval = this.listToData(value);
                this.activeItem.routerLink = this.countCourrierByEtatEval;
                this.loaded = true;

            });
        }
    }

    statsCourrierRefusedBySubject(e: any) {
        this.subactiveItem = e.item;
        if (this.countCourrierRefusedBySubject == null) {
            this.loaded = false;
            this.statistiqueService.courrierRefusedBySubject().subscribe(value => {
                this.countCourrierRefusedBySubject = this.listToData(value);
                this.subactiveItem.routerLink = this.countCourrierRefusedBySubject;
                this.loaded = true;

            });
        }
    }

    statsCourrierAcceptedByNatureClient(e: any) {
        this.subactiveItem = e.item;
        if (this.countCourrierAcceptedByNatureClient == null) {
            this.loaded = false;
            this.statistiqueService.courrierAcceptedByNatureClient().subscribe(value => {
                this.countCourrierAcceptedByNatureClient = this.listToData(value);
                this.subactiveItem.routerLink = this.countCourrierAcceptedByNatureClient;
                this.loaded = true;

            });
        }

    }

    statsCourrierRefusedByNatureClient(e: any) {

        this.subactiveItem = e.item;
        if (this.countCourrierRefusedByNatureClient == null) {
            this.loaded = false;
            this.statistiqueService.courrierRefusedByNatureClient().subscribe(value => {
                this.countCourrierRefusedByNatureClient = this.listToData(value);
                this.subactiveItem.routerLink = this.countCourrierRefusedByNatureClient;
                this.loaded = true;

            });
        }
    }

    statsCourrierTraiteByServiceEmeteur(e: any) {
        this.subactiveItem = e.item;
        if (this.countCourrierTraiteByServiceEmeteur == null) {
            this.loaded = false;
            this.statistiqueService.courrierTraiteByServiceEmeteur().subscribe(value => {
                this.countCourrierTraiteByServiceEmeteur = this.listToData(value);
                this.subactiveItem.routerLink = this.countCourrierTraiteByServiceEmeteur;
                this.loaded = true;

            });
        }
    }

    statsCourrierTraiteByServiceCoord(e: any) {
        this.subactiveItem = e.item;
        if (this.countCourrierTraiteByServiceCoord == null) {
            this.loaded = false;
            this.statistiqueService.courrierTraiteByServiceCoord().subscribe(value => {
                this.countCourrierTraiteByServiceCoord = this.listToData(value);
                this.subactiveItem.routerLink = this.countCourrierTraiteByServiceCoord;
                this.loaded = true;

            });
        }
    }

    statsCourrierTraiteByNatureClient(e: any) {
        this.subactiveItem = e.item;
        if (this.countCourrierTraiteByNatureClient == null) {
            this.loaded = false;
            this.statistiqueService.courrierTraiteByNatureClient().subscribe(value => {
                this.countCourrierTraiteByNatureClient = this.listToData(value);
                this.subactiveItem.routerLink = this.countCourrierTraiteByNatureClient;
                this.loaded = true;

            });
        }
    }

    statsCourrierByDestinatorSex(e: any) {
        this.subactiveItem = e.item;
        if (this.countCourrierByDestinatorSex == null) {
            this.loaded = false;
            this.statistiqueService.courrierByDestinatorSex().subscribe(value => {
                this.countCourrierByDestinatorSex = this.listToData(value);
                this.subactiveItem.routerLink = this.countCourrierByDestinatorSex;
                this.loaded = true;

            });
        }

    }

    statsCourrierRefusedByReason(e: any) {
        this.subactiveItem = e.item;
        if (this.countCourrierRefusedByReason == null) {
            this.loaded = false;
            this.statistiqueService.courrierRefusedByReason().subscribe(value => {
                this.countCourrierRefusedByReason = this.listToData(value);
                this.subactiveItem.routerLink = this.countCourrierRefusedByReason;
                this.loaded = true;

            });
        }
    }

    statsCourrierAcceptedBySubject(e: any) {
        this.subactiveItem = e.item;
        if (this.countCourrierAcceptedBySubject == null) {
            this.loaded = false;
            this.statistiqueService.courrierAcceptedBySubject().subscribe(value => {
                this.countCourrierAcceptedBySubject = this.listToData(value);
                this.subactiveItem.routerLink = this.countCourrierAcceptedBySubject;
                this.loaded = true;

            });
        }
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


    update() {
        let e = {item: this.activeItem};
        this.countCourrierByNatureClientData = null;
        this.countCourrierByService = null;
        this.countCourrierByExpeditorSex = null;
        this.countCourrierByDestinatorSex = null;
        this.countCourrierBySubject = null;
        this.countCourrierByVoie = null;
        this.countCourrierByServiceEmeteur = null;
        this.countCourrierByServiceCoord = null;
        this.countCourrierByEtatEval = null;
        this.countCourrierAcceptedBySubject = null;
        this.countCourrierRefusedBySubject = null;
        this.countCourrierAcceptedByNatureClient = null;
        this.countCourrierRefusedByNatureClient = null;
        this.countCourrierRefusedByReason = null;
        this.countCourrierTraiteByNatureClient = null;
        this.countCourrierTraiteByServiceCoord = null;
        this.countCourrierTraiteByServiceEmeteur = null;
        this.activeItem.command(e);

    }
}
