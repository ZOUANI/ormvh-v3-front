import { Component } from '@angular/core';
import { MenuItem } from "primeng/api";
import { AuthenticationService } from './controller/service/auth/authentication.service';
import { TranslateService } from '@ngx-translate/core';

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
  languageItems: MenuItem[];  //contain items for the language menu on nav bar
  settingItems: MenuItem[];  //contain items for the setting menu on nav bar

  languages: { abbrv: string, label: string }[] = [
    { abbrv: 'en', label: 'English' },
    { abbrv: 'fr', label: 'French' },
    { abbrv: 'ar', label: 'Arabic' }
  ];

  constructor(private authService: AuthenticationService, public translateService: TranslateService) {
    translateService.addLangs(this.languages.map(lg => lg.abbrv).concat());
    translateService.setDefaultLang('en');
    const browserLang = translateService.getBrowserLang();
    translateService.use(browserLang.match(/en|fr|ar/) ? browserLang : 'en');
    this.openBar = false;

    // to change icons , change the icon value on the array below to one of the font awesome classes
    this.sidebarItems = [{
      items: [
        { id: 'dashboard', label: 'DASHBOARD', routerLink: '/dashboard', icon: 'fa fa-bar-chart' },

        {
          id: 'mailing', label: 'MAILING', icon: 'fa fa-suitcase', items: [
            { label: 'MAILING', routerLink: '/courrier/list', icon: 'fa fa-suitcase' },
            { label: 'RELANCE', routerLink: '/courrier/redirection', icon: 'fa fa-envelope' },
            { label: 'OBJECT', routerLink: '/courrierObject/list', icon: 'fa fa-header' },
            { label: 'STATEMENT', routerLink: '/bordereau/list', icon: 'fa fa-file-text-o' },
            { label: 'EXPEDITOR', routerLink: '/expeditor/list', icon: 'fa fa-ship' },
            { label: 'EVALUATION', routerLink: '/evaluation/list', icon: 'fa fa-check-square-o' },
            { label: 'RELANCE', routerLink: '/courrier/redirection', icon: 'fa fa-envelope' }
            // { label: 'Service Item', routerLink: '/courrierServiceItem/list', icon: 'fa fa-wrench' },
            // { label: 'Tâche', routerLink: '/task/list', icon: 'fa fa-tasks' },
          ]
        },

        { id: 'users', label: 'USERS', routerLink: '/user/list', icon: 'fa fa-user' },

        {
          id: 'letters', label: 'LETTERS', icon: 'fa fa-envelope', items: [
            { label: 'CATEGORY', routerLink: '/categorieModelLettreReponse/list', icon: 'fa fa-filter' },
            { label: 'MODEL', routerLink: '/modelLettreReponse/list', icon: 'fa fa-envelope-square' },
          ]
        },
        { id: 'employee', label: 'EMPLOYEE', routerLink: '/employee/list', icon: 'fa fa-male' },
        {
          id: 'configuration', label: 'CONFIGURATION', icon: 'fa fa-gear', items: [
            { label: 'SERVICE', routerLink: '/leService/list', icon: 'fa fa-briefcase' },
            { label: 'SUBDIVISION', routerLink: '/subdivision/list', icon: 'fa fa-exchange' },
            { label: 'NATURE', routerLink: '/natureCourrier/list', icon: 'fa fa-list' },
            { label: 'TYPE', routerLink: '/typeCourrier/list', icon: 'fa fa-sticky-note-o' },
            { label: 'TRACK', routerLink: '/voie/list', icon: 'fa fa-paper-plane' },
            { label: 'STATUS', routerLink: '/status/list', icon: 'fa fa-exclamation-circle' },
            { label: 'EXPEDITOR_TYPE', routerLink: '/expeditorType/list', icon: 'fa fa-archive' },
            { label: 'ROLES', routerLink: '/role/list', icon: 'fa fa-tag' },
            { label: 'NATIONALITY', routerLink: '/nationality/list', icon: 'fa fa-globe' },
            { label: 'GENDER', routerLink: '/sexe/list', icon: 'fa fa-genderless' },
          ]
        },
      ]
    }];

    this.languageItems = [
      {
        label: '',
        items: this.languages.map(lg => ({ label: lg.label, routerLink: [], command: () => translateService.use(lg.abbrv) })).concat()
        ,

      }
    ];

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
          { label: 'Log out', icon: 'fa fa-sign-out', command: () => this.logout() }]
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