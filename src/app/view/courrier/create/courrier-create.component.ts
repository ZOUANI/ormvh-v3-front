import {Component, OnInit} from '@angular/core';
import {CourrierService} from '../../../controller/service/Courrier.service';
import {CourrierVo} from '../../../controller/model/courrier.model';
import {UserVo} from '../../../controller/model/user.model';
import {StatusVo} from '../../../controller/model/Status.model';
import {TaskVo} from '../../../controller/model/Task.model';
import {NatureCourrierVo} from '../../../controller/model/NatureCourrier.model';
import {CourrierServiceItemVo} from '../../../controller/model/CourrierServiceItem.model';
import {TypeCourrierVo} from '../../../controller/model/TypeCourrier.model';
import {VoieVo} from '../../../controller/model/Voie.model';
import { VoieService } from 'src/app/controller/service/Voie.service';
import { CourrierObjectService } from 'src/app/controller/service/CourrierObject.service';
import { ExpeditorService } from 'src/app/controller/service/Expeditor.service';
import { ExpeditorTypeService } from 'src/app/controller/service/ExpeditorType.service';
import { EvaluationService } from 'src/app/controller/service/Evaluation.service';
import { StatusService } from 'src/app/controller/service/Status.service';
import { TypeCourrierService } from 'src/app/controller/service/TypeCourrier.service';
import { LeServiceService } from 'src/app/controller/service/LeService.service';
import { NatureCourrierService } from 'src/app/controller/service/NatureCourrier.service';
import { SubdivisionService } from 'src/app/controller/service/Subdivision.service';
import {SelectItem} from 'primeng/api';
import { UserService } from 'src/app/controller/service/User.service';
import { LeServiceVo } from 'src/app/controller/model/LeService.model';

@Component({
  selector: 'app-courrier-create',
  templateUrl: './courrier-create.component.html',
  styleUrls: ['./courrier-create.component.css']
})
export class CourrierCreateComponent implements OnInit {

  courrierObjects:  SelectItem[];
  voies:  VoieVo[];
  natureCourriers:  NatureCourrierVo[];
  linkedTos:  SelectItem[];
  expeditors:  SelectItem[]; 
  evaluations: SelectItem[];
  expeditorTypes: SelectItem[];
  subdivisions: SelectItem[];
  leServices: SelectItem[];
  statuss: StatusVo[];
  users:UserVo[];
  changedServices:LeServiceVo[];
  typeCourriers:TypeCourrierVo[];

  constructor(private courrierService: CourrierService,
              private voieService:VoieService,
              private courrierObjectService:CourrierObjectService,
              private expeditorService:ExpeditorService,
              private expidtorTypeSerice:ExpeditorTypeService,
              private evaluationService:EvaluationService,
              private statusService:StatusService,
              private typeCourrierService:TypeCourrierService,
              private leServiceService:LeServiceService,
              private natureCourrierService:NatureCourrierService,
              private subdivisionService:SubdivisionService,
              private userService:UserService) { }

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
    
    }
  
 

   get courrier(): CourrierVo {
    return this.courrierService.courrier;
  }

 

  get task(): TaskVo {
    return this.courrierService.task;
  }

  addTask() {
   return this.courrierService.addTask();
  }

  removeTask(i: number) {
   this.courrierService.removeTask(i);
  }
  get courrierServiceItem(): CourrierServiceItemVo {
    return this.courrierService.courrierServiceItem;
  }

  addCourrierServiceItem() {
    let index = this.changedServices.indexOf(this.courrierServiceItem.serviceVo);
    if(index!= -1){
      this.changedServices.splice(index,1);
      this.courrierService.addCourrierServiceItem();
    }
  }

  removeCourrierServiceItem(i: number) {
    this.changedServices.push(this.courrier.courrierServiceItemsVo[i].serviceVo)
   this.courrierService.removeCourrierServiceItem(i);
  }

    saveCourrier() {
        this.courrier.idCourrier=this.generatedId
        this.courrierService.saveCourrier();
        this.generatedId=''
    }

   findAllcourrierObjects() {
     this.courrierObjectService.findAllcourrierObjects().subscribe(data=>{    
      this.courrierObjects=[{label:'none', value:null}];
      if(data!=null){
     for (const item of data) {
      this.courrierObjects.push({label:item.title, value:item});
       }
     }
     },error=>{
      this.courrierObjects=[{label:'none', value:null}];
     });
   }
   findAllServices() {
    this.leServiceService.findAllServices().subscribe(data=>{    
      this.leServices=[{label:'none', value:null}];
      if(data!=null){
     for (const item of data) {
      this.leServices.push({label:item.title, value:item});
     }
    }
     },error=>{
      this.leServices=[{label:'none', value:null}];
     });
  }
  findAllChangedServices(){
    this.leServiceService.findAllServices().subscribe(data=>{    
      if(data!=null){
       this.changedServices = data;
    }
     },error=>{
       console.log(error);
    });
  }
   findAllvoies() {
     this.voieService.findAllvoies().subscribe(data=>{    
     if(data!=null){
       this.voies = data;
       this.courrier.voieVo = this.voies[0];
     }
     },error=>{
       console.log(error);
     });
   }
   findAllnatureCourriers() {
    this.natureCourrierService.findAllnatureCourriers().subscribe(data=>{    
      if(data!=null){
        this.natureCourriers = data;
        this.courrier.natureCourrierVo = this.natureCourriers[0];
      }
      },error=>{
        console.log(error);
      });
   }
   findAlllinkedTos() {
     this.linkedTos = [{label:"none",value:null}];
     for (const item of this.courrierService.courrierListe) {
      this.linkedTos.push({label:item.idCourrier,value:item});
     }
   }
   findAllexpeditors() {
     this.expeditorService.findAllexpeditors().subscribe(data=>{    
      this.expeditors=[{label:'Select expeditor', value:null}];
      if(data!=null){
      for (const item of data) {
       this.expeditors.push({label:item.title, value:item});
      }
    }
      },error=>{
       this.expeditors=[{label:'none', value:null}];
      });
   }
   
   
   findAllevaluations() {
     this.evaluationService.findAllevaluations().subscribe(data=>{    
      this.evaluations=[{label:'Select evaluation', value:null}];
      if(data!=null){
      for (const item of data) {
       this.evaluations.push({label:item.title, value:item});
      }
    }
      },error=>{
       this.evaluations=[{label:'none', value:null}];
      });
   }
   findAllexpeditorTypes() {
     this.expidtorTypeSerice.findAllexpeditorTypes().subscribe(data=>{    
      this.expeditorTypes=[{label:'type expeditor', value:null}];
      if(data!=null){
      for (const item of data) {
       this.expeditorTypes.push({label:item.title, value:item});
      }
    }
      },error=>{
       this.expeditorTypes=[{label:'none', value:null}];
      });
   }
   
   findAllsubdivisions() {
     this.subdivisionService.findAllsubdivisions().subscribe(data=>{    
      this.subdivisions=[{label:'select subdivision', value:null}];
      if(data!=null){
      for (const item of data) {
       this.subdivisions.push({label:item.title, value:item});
      }
    }
      },error=>{
       this.subdivisions=[{label:'none', value:null}];
      });
   }
   findAllstatuss() {
     this.statusService.findAllstatuss().subscribe(data=>{    
      if(data!=null){
        this.statuss = data;
        this.courrier.statusVo = this.statuss[0];
      }
      },error=>{
        console.log(error);
      });
   }
   findAlltypeCourriers() {
     this.typeCourrierService.findAlltypeCourriers().subscribe(data=>{    
      if(data!=null){
        this.typeCourriers = data;
        this.courrier.typeCourrierVo = this.typeCourriers[0];
      }
      },error=>{
        console.log(error);
      });
   }
   findAllUSer() {
    this.userService.findAllUsers().subscribe(data=>{
      if(data!=null){
        this.users = data;
      }
      },error=>{
        console.log(error);
      });
  }
    generateId(){
        this.courrierService.generateId()
    }

    get generatedId(): string {
        return this.courrierService.generatedId;
    }


    set generatedId(value: string) {
        this.courrierService.generatedId = value;
    }


}