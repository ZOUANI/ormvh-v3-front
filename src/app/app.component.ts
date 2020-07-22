import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
   sidebarItems: MenuItem[];
   openBar: Boolean;

   notifications : string[];  //contain the notifications to show
   badgeNumber : number;      //contain the number of notifications , if =0 the badge won't show
  settingItems: MenuItem[];  //contain items for the setting menu on nav bar

  constructor() {
    this.openBar=false;

     // to change icons , change the icon value on the array below to one of the font awesome classes 
    this.sidebarItems= [{
      items :[
                { label: 'Status', routerLink: '/status/list' ,icon:'fa fa-database' },
        { label: 'CourrierObject', routerLink: '/courrierObject/list' ,icon:'fa fa-database' },
        { label: 'Evaluation', routerLink: '/evaluation/list' ,icon:'fa fa-database' },
        { label: 'Task', routerLink: '/task/list' ,icon:'fa fa-database' },
        { label: 'User', routerLink: '/user/list' ,icon:'fa fa-database' },
        { label: 'NatureCourrier', routerLink: '/natureCourrier/list' ,icon:'fa fa-database' },
        { label: 'ExpeditorType', routerLink: '/expeditorType/list' ,icon:'fa fa-database' },
        { label: 'CourrierServiceItem', routerLink: '/courrierServiceItem/list' ,icon:'fa fa-database' },
        { label: 'Courrier', routerLink: '/courrier/list' ,icon:'fa fa-database' },
        { label: 'ModelLettreReponse', routerLink: '/modelLettreReponse/list' ,icon:'fa fa-database' },
        { label: 'Subdivision', routerLink: '/subdivision/list' ,icon:'fa fa-database' },
        { label: 'Nationality', routerLink: '/nationality/list' ,icon:'fa fa-database' },
        { label: 'TypeCourrier', routerLink: '/typeCourrier/list' ,icon:'fa fa-database' },
        { label: 'Expeditor', routerLink: '/expeditor/list' ,icon:'fa fa-database' },
        { label: 'Role', routerLink: '/role/list' ,icon:'fa fa-database' },
        { label: 'Employee', routerLink: '/employee/list' ,icon:'fa fa-database' },
        { label: 'CategorieModelLettreReponse', routerLink: '/categorieModelLettreReponse/list' ,icon:'fa fa-database' },
        { label: 'LeService', routerLink: '/leService/list' ,icon:'fa fa-database' },
        { label: 'Sexe', routerLink: '/sexe/list' ,icon:'fa fa-database' },
        { label: 'Bordereau', routerLink: '/bordereau/list' ,icon:'fa fa-database' },
        { label: 'Voie', routerLink: '/voie/list', icon:'fa fa-database' }
      ]
    }];

this.settingItems=[
      {
        label: '',
        items:[
          { label: 'settings', routerLink:'/', icon:'fa fa-cog'},
          { label: 'profile', routerLink:'/', icon:'fa fa-user'}]
      },
      {
        label: '',
        items:[
          { label: 'Log out', routerLink:'/', icon:'fa fa-sign-out'}]
      }
    ];
    
    this.notifications= ["Test 1", "Use equal casing. Compare these module identifiers:","There are multiple modules with names that only differ in casing.\n" +
    "This can lead to unexpected behavior when compiling on a filesystem with other case-semantic." ];

    this.badgeNumber = this.notifications.length;


}

  buttonClick() {
    if(this.openBar == true) {
      this.openBar = false;
      console.log("if "+this.openBar);
    }    else
      {  this.openBar=true;
        console.log("else "+this.openBar);
      }
    console.log("none "+this.openBar);
  }

  markRead() {
    this.badgeNumber = 0;

  }

  deleteNot() {
    this.notifications = [];
    this.badgeNumber = 0;
  }


}