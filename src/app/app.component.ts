import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";
import {AuthenticationService} from './controller/service/auth/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    ngOnInit() {
        this.authService.loadInfos();
    }

  title = 'frontend';
  sidebarItems: MenuItem[];
  openBar: Boolean;

  notifications: string[];  //contain the notifications to show
  badgeNumber: number;      //contain the number of notifications , if =0 the badge won't show
  settingItems: MenuItem[];  //contain items for the setting menu on nav bar

  constructor( private authService : AuthenticationService) {
    this.openBar=false;

    // to change icons , change the icon value on the array below to one of the font awesome classes
    this.sidebarItems = [{
      items: [
        {
          id: 'courrier', label: 'Courrier', icon: 'fa fa-suitcase', items: [
            { label: 'Courrier', routerLink: '/courrier/list', icon: 'fa fa-suitcase' },
            { label: 'Object', routerLink: '/courrierObject/list', icon: 'fa fa-header' },
            { label: 'Bordereau', routerLink: '/bordereau/list', icon: 'fa fa-file-text-o' },
            { label: 'Expéditeur', routerLink: '/expeditor/list', icon: 'fa fa-ship' },
            { label: 'Evaluation', routerLink: '/evaluation/list', icon: 'fa fa-check-square-o' },
            // { label: 'Service Item', routerLink: '/courrierServiceItem/list', icon: 'fa fa-wrench' },
          ]
        },
        {
          id: 'utilisateurs', label: 'Utilisateurs', icon: 'fa fa-users', items: [
            { label: 'Utilisateurs', routerLink: '/user/list', icon: 'fa fa-user' },
            { label: 'Rôles', routerLink: '/role/list', icon: 'fa fa-tag' },
          ]
        },
        // {
        //   id: 'services', label: 'Services', icon: 'fa fa-briefcase', items: [


        // { label: 'Tâche', routerLink: '/task/list', icon: 'fa fa-tasks' },

        //   ]
        // },
        {
          id: 'lettres', label: 'Lettres', icon: 'fa fa-envelope', items: [

            { label: 'Catégorie', routerLink: '/categorieModelLettreReponse/list', icon: 'fa fa-filter' },
            { label: 'Modèle', routerLink: '/modelLettreReponse/list', icon: 'fa fa-envelope-square' },
          ]
        },
        { id: 'employé', label: 'Employé', routerLink: '/employee/list', icon: 'fa fa-male' },
        {
          id: 'paramètres', label: 'Paramètres', icon: 'fa fa-gear', items: [
            { label: 'Service', routerLink: '/leService/list', icon: 'fa fa-briefcase' },
            { label: 'Subdivision', routerLink: '/subdivision/list', icon: 'fa fa-exchange' },
            { label: 'Nature', routerLink: '/natureCourrier/list', icon: 'fa fa-list' },
            { label: 'Type', routerLink: '/typeCourrier/list', icon: 'fa fa-sticky-note-o' },
            { label: 'Voie', routerLink: '/voie/list', icon: 'fa fa-paper-plane' },
            { label: 'Status', routerLink: '/status/list', icon: 'fa fa-exclamation-circle' },
            { label: 'Expéditeur Type', routerLink: '/expeditorType/list', icon: 'fa fa-archive' },
            { label: 'Nationalité', routerLink: '/nationality/list', icon: 'fa fa-globe' },
            { label: 'Sexe', routerLink: '/sexe/list', icon: 'fa fa-genderless' },
          ]
        },
      ]
    }];

    this.settingItems = [
      {
        label: '',
        items: [
          { label: 'settings', routerLink: '/', icon: 'fa fa-cog' },
          { label: 'profile', routerLink: '/', icon: 'fa fa-user' }]
      },
      {
        label: '',
        items: [
          { label: 'Log out', routerLink: '/', icon: 'fa fa-sign-out' }]
      }
    ];

    this.notifications = ["Test 1", "Use equal casing. Compare these module identifiers:", "There are multiple modules with names that only differ in casing.\n" +
      "This can lead to unexpected behavior when compiling on a filesystem with other case-semantic."];

    this.badgeNumber = this.notifications.length;


  }

  buttonClick() {
    if (this.openBar == true) {
      this.openBar = false;
      console.log("if " + this.openBar);
    } else {
      this.openBar = true;
      console.log("else " + this.openBar);
    }
    console.log("none " + this.openBar);
  }

  markRead() {
    this.badgeNumber = 0;

  }

  deleteNot() {
    this.notifications = [];
    this.badgeNumber = 0;
  }

    get authenticated() {
        return this.authService.authenticated;
    }

    logout() {
        this.authService.logout();
    }

}