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
    active = false;
    loaded: boolean = false;

    constructor(private _courrierService: CourrierService) {
        this.statsCourrierByNatureClient();
    }

    get courrierService(): CourrierService {
        return this._courrierService;
    }

    set courrierService(value: CourrierService) {
        this._courrierService = value;
    }

    ngOnInit(): void {

    }

    statsCourrierByNatureClient() {
        this.courrierService.courrierByNatureClient().subscribe(value => {
            // console.log(value);
            // var res: Map<string, Array<StatistiqueVo>> = new Map<string, Array<StatistiqueVo>>();
            // console.log(value['oservations']);
            // this.countCourrierByNatureClientData.set("observation", this.listToData(value['oservations']))
            // this.countCourrierByNatureClientData.set("propositions", this.listToData(value['propositions']));
            // this.countCourrierByNatureClientData.set("reclamations", this.listToData(value['reclamations']));
            // console.log(this.countCourrierByNatureClientData);
            // //  res.forEach( (r,k) => {this.countCourrierByNatureClientData.set(k,this.listToData(r))}; not working
            // console.log(this.countCourrierByNatureClientData);
            this.countCourrierByNatureClientData = this.listToData(value);
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


}
