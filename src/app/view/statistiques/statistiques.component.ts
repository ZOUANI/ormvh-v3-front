import {Component, OnInit} from '@angular/core';
import {CourrierService} from '../../controller/service/Courrier.service';
import {MenuItem} from 'primeng/api';


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
    items: MenuItem[];
    activeItem: MenuItem;
    subactiveItem: MenuItem;


    constructor(private _courrierService: CourrierService) {
        this.statsCourrierByNatureClientInit();
    }

    get courrierService(): CourrierService {
        return this._courrierService;
    }

    set courrierService(value: CourrierService) {
        this._courrierService = value;
    }

    test(e: any) {
        console.log(e);
    }

    initsubStats(e: any) {
        if (e.originalEvent) {
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
                }],
                command: (event) => this.initsubStats(event)
            },
        ];
        this.activeItem = this.items[0];
    }

    statsCourrierByNatureClient(e: any) {

        if (e.originalEvent) {

            this.activeItem = e.item;
            if (this.countCourrierByNatureClientData == null) {
                this.loaded = false;
                this.courrierService.courrierByNatureClient().subscribe(value => {
                    this.countCourrierByNatureClientData = this.listToData(value);
                    this.activeItem.routerLink = this.countCourrierByNatureClientData;
                    this.loaded = true;

                });
            }
        }

    }

    statsCourrierByNatureClientInit() {


        this.loaded = false;
        this.courrierService.courrierByNatureClient().subscribe(value => {
            this.countCourrierByNatureClientData = this.listToData(value);
            this.activeItem.routerLink = this.countCourrierByNatureClientData;
            this.loaded = true;

        });


    }

    statsCourrierByService(e: any) {
        if (e.originalEvent) {

            this.activeItem = e.item;
            if (this.countCourrierByService == null) {
                this.loaded = false;
                this.courrierService.courrierByService().subscribe(value => {
                    this.countCourrierByService = this.listToData(value);
                    this.activeItem.routerLink = this.countCourrierByService;
                    this.loaded = true;

                });
            }
        }
    }

    statsCourrierByExpeditorSex(e: any) {
        if (e.originalEvent) {
            console.log(e.item);
            this.subactiveItem = e.item;
            if (this.countCourrierByExpeditorSex == null) {
                this.loaded = false;
                this.courrierService.courrierByExpeditorSex().subscribe(value => {
                    this.countCourrierByExpeditorSex = this.listToData(value);
                    this.subactiveItem.routerLink = this.countCourrierByExpeditorSex;
                    this.loaded = true;

                });
            }
        }
    }

    statsCourrierByServiceEmeteur(e: any) {
        if (e.originalEvent) {

            this.activeItem = e.item;
            if (this.countCourrierByServiceEmeteur == null) {
                this.loaded = false;
                this.courrierService.courrierByServiceEmeteur().subscribe(value => {
                    this.countCourrierByServiceEmeteur = this.listToData(value);
                    this.activeItem.routerLink = this.countCourrierByServiceEmeteur;
                    this.loaded = true;

                });
            }
        }
    }

    statsCourrierByServiceCoord(e: any) {
        if (e.originalEvent) {

            this.activeItem = e.item;
            if (this.countCourrierByServiceCoord == null) {
                this.loaded = false;
                this.courrierService.courrierByServiceCoord().subscribe(value => {
                    this.countCourrierByServiceCoord = this.listToData(value);
                    this.activeItem.routerLink = this.countCourrierByServiceCoord;
                    this.loaded = true;

                });
            }
        }
    }

    statsCourrierBySubject(e: any) {
        if (e.originalEvent) {

            this.activeItem = e.item;
            if (this.countCourrierBySubject == null) {
                this.loaded = false;
                this.courrierService.courrierBySubject().subscribe(value => {
                    this.countCourrierBySubject = this.listToData(value);
                    this.activeItem.routerLink = this.countCourrierBySubject;
                    this.loaded = true;

                });
            }
        }
    }

    statsCourrierByVoie(e: any) {
        if (e.originalEvent) {

            this.activeItem = e.item;
            if (this.countCourrierByVoie == null) {
                this.loaded = false;
                this.courrierService.courrierByVoie().subscribe(value => {
                    this.countCourrierByVoie = this.listToData(value);
                    this.activeItem.routerLink = this.countCourrierByVoie;
                    this.loaded = true;

                });
            }
        }
    }

    statsCourrierByEtatEval(e: any) {
        if (e.originalEvent) {

            this.activeItem = e.item;
            if (this.countCourrierByEtatEval == null) {
                this.loaded = false;
                this.courrierService.courrierByEtatEval().subscribe(value => {
                    this.countCourrierByEtatEval = this.listToData(value);
                    this.activeItem.routerLink = this.countCourrierByEtatEval;
                    this.loaded = true;

                });
            }
        }
    }

    statsCourrierRefusedBySubject(e: any) {
        if (e.originalEvent) {
            this.subactiveItem = e.item;
            if (this.countCourrierRefusedBySubject == null) {
                this.loaded = false;
                this.courrierService.courrierRefusedBySubject().subscribe(value => {
                    this.countCourrierRefusedBySubject = this.listToData(value);
                    this.subactiveItem.routerLink = this.countCourrierRefusedBySubject;
                    this.loaded = true;

                });
            }
        }
    }

    statsCourrierAcceptedByNatureClient(e: any) {
        if (e.originalEvent) {
            this.subactiveItem = e.item;
            if (this.countCourrierAcceptedByNatureClient == null) {
                this.loaded = false;
                this.courrierService.courrierAcceptedByNatureClient().subscribe(value => {
                    this.countCourrierAcceptedByNatureClient = this.listToData(value);
                    this.subactiveItem.routerLink = this.countCourrierAcceptedByNatureClient;
                    this.loaded = true;

                });
            }
        }

    }

    statsCourrierRefusedByNatureClient(e: any) {

        if (e.originalEvent) {
            this.subactiveItem = e.item;
            if (this.countCourrierRefusedByNatureClient == null) {
                this.loaded = false;
                this.courrierService.courrierRefusedByNatureClient().subscribe(value => {
                    this.countCourrierRefusedByNatureClient = this.listToData(value);
                    this.subactiveItem.routerLink = this.countCourrierRefusedByNatureClient;
                    this.loaded = true;

                });
            }
        }
    }

    statsCourrierTraiteByServiceEmeteur(e: any) {
        if (e.originalEvent) {
            this.subactiveItem = e.item;
            if (this.countCourrierTraiteByServiceEmeteur == null) {
                this.loaded = false;
                this.courrierService.courrierTraiteByServiceEmeteur().subscribe(value => {
                    this.countCourrierTraiteByServiceEmeteur = this.listToData(value);
                    this.subactiveItem.routerLink = this.countCourrierTraiteByServiceEmeteur;
                    this.loaded = true;

                });
            }
        }
    }

    statsCourrierTraiteByServiceCoord(e: any) {
        if (e.originalEvent) {
            this.subactiveItem = e.item;
            if (this.countCourrierTraiteByServiceCoord == null) {
                this.loaded = false;
                this.courrierService.courrierTraiteByServiceCoord().subscribe(value => {
                    this.countCourrierTraiteByServiceCoord = this.listToData(value);
                    this.subactiveItem.routerLink = this.countCourrierTraiteByServiceCoord;
                    this.loaded = true;

                });
            }
        }
    }

    statsCourrierTraiteByNatureClient(e: any) {
        if (e.originalEvent) {
            this.subactiveItem = e.item;
            if (this.countCourrierTraiteByNatureClient == null) {
                this.loaded = false;
                this.courrierService.courrierTraiteByNatureClient().subscribe(value => {
                    this.countCourrierTraiteByNatureClient = this.listToData(value);
                    this.subactiveItem.routerLink = this.countCourrierTraiteByNatureClient;
                    this.loaded = true;

                });
            }
        }
    }

    statsCourrierByDestinatorSex(e: any) {
        if (e.originalEvent) {

            this.subactiveItem = e.item;
            if (this.countCourrierByDestinatorSex == null) {
                this.loaded = false;
                this.courrierService.courrierByDestinatorSex().subscribe(value => {
                    this.countCourrierByDestinatorSex = this.listToData(value);
                    this.subactiveItem.routerLink = this.countCourrierByDestinatorSex;
                    this.loaded = true;

                });
            }
        }

    }

    statsCourrierRefusedByReason(e: any) {
        if (e.originalEvent) {
            this.subactiveItem = e.item;
            if (this.countCourrierRefusedByReason == null) {
                this.loaded = false;
                this.courrierService.courrierRefusedByReason().subscribe(value => {
                    this.countCourrierRefusedByReason = this.listToData(value);
                    this.subactiveItem.routerLink = this.countCourrierRefusedByReason;
                    this.loaded = true;

                });
            }
        }
    }

    statsCourrierAcceptedBySubject(e: any) {
        if (e.originalEvent) {

            this.subactiveItem = e.item;
            if (this.countCourrierAcceptedBySubject == null) {
                this.loaded = false;
                this.courrierService.courrierAcceptedBySubject().subscribe(value => {
                    this.countCourrierAcceptedBySubject = this.listToData(value);
                    this.subactiveItem.routerLink = this.countCourrierAcceptedBySubject;
                    this.loaded = true;

                });
            }
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


}
