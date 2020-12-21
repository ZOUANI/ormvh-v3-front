import { Component, OnInit } from '@angular/core';
import {CourrierService} from "../../controller/service/Courrier.service";
import {StatistiqueVo} from "../../controller/model/statistique-vo.model";

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {


   countCourrierByNatureClientData : Map<string,any> = new Map<string, any>() ;
   active : boolean = false;

  constructor(private _courrierService : CourrierService) { }

  get courrierService(): CourrierService {
    return this._courrierService;
  }

  set courrierService(value: CourrierService) {
    this._courrierService = value;
  }

  ngOnInit(): void {
    this.statsCourrierByNatureClient();
  }

  statsCourrierByNatureClient(){
    this.courrierService.courrierByNatureClient().subscribe(value =>{
        var res : Map<string,Array<StatistiqueVo>> = new Map<string, Array<StatistiqueVo>>();
        console.log(value['oservations']);
      this.countCourrierByNatureClientData.set("observation",this.listToData(value['oservations']))
      this.countCourrierByNatureClientData.set("propositions",this.listToData(value['propositions']));
      this.countCourrierByNatureClientData.set("reclamations",this.listToData(value['reclamations']));
      console.log(this.countCourrierByNatureClientData);
   //  res.forEach( (r,k) => {this.countCourrierByNatureClientData.set(k,this.listToData(r))}; not working
      console.log(this.countCourrierByNatureClientData);
    });
  }
  listToData(list : Array<StatistiqueVo>):any{
    var data = {
      labels : [],
      datasets:[{
        data:[],
        backgroundColor:[]
      }]
    }
    for(let stat of list){
      data.labels.push(stat.groupe);
      data.datasets[0].data.push(stat.count);
      data.datasets[0].backgroundColor.push(this.getRandomColor());
    }
    console.log(data);
    return data;
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }



}
