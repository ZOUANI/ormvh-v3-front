import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { StatusCreateComponent } from './view/status/create/status-create.component';
import { StatuslistComponent } from './view/status/list/status-list.component';
import { StatusDetailsComponent } from './view/status/details/status-details.component';
import { StatusEditComponent } from './view/status/edit/status-edit.component';
import { StatusComponent } from './view/status/status.component';
import { CourrierObjectCreateComponent } from './view/courrierObject/create/courrierObject-create.component';
import { CourrierObjectlistComponent } from './view/courrierObject/list/courrierObject-list.component';
import { CourrierObjectDetailsComponent } from './view/courrierObject/details/courrierObject-details.component';
import { CourrierObjectEditComponent } from './view/courrierObject/edit/courrierObject-edit.component';
import { CourrierObjectComponent } from './view/courrierObject/courrierObject.component';
import { EvaluationCreateComponent } from './view/evaluation/create/evaluation-create.component';
import { EvaluationlistComponent } from './view/evaluation/list/evaluation-list.component';
import { EvaluationDetailsComponent } from './view/evaluation/details/evaluation-details.component';
import { EvaluationEditComponent } from './view/evaluation/edit/evaluation-edit.component';
import { EvaluationComponent } from './view/evaluation/evaluation.component';
import { TaskCreateComponent } from './view/task/create/task-create.component';
import { TasklistComponent } from './view/task/list/task-list.component';
import { TaskDetailsComponent } from './view/task/details/task-details.component';
import { TaskEditComponent } from './view/task/edit/task-edit.component';
import { TaskComponent } from './view/task/task.component';
import { UserCreateComponent } from './view/user/create/user-create.component';
import { UserlistComponent } from './view/user/list/user-list.component';
import { UserDetailsComponent } from './view/user/details/user-details.component';
import { UserEditComponent } from './view/user/edit/user-edit.component';
import { UserComponent } from './view/user/user.component';
import { NatureCourrierCreateComponent } from './view/natureCourrier/create/natureCourrier-create.component';
import { NatureCourrierlistComponent } from './view/natureCourrier/list/natureCourrier-list.component';
import { NatureCourrierDetailsComponent } from './view/natureCourrier/details/natureCourrier-details.component';
import { NatureCourrierEditComponent } from './view/natureCourrier/edit/natureCourrier-edit.component';
import { NatureCourrierComponent } from './view/natureCourrier/natureCourrier.component';
import { ExpeditorTypeCreateComponent } from './view/expeditorType/create/expeditorType-create.component';
import { ExpeditorTypelistComponent } from './view/expeditorType/list/expeditorType-list.component';
import { ExpeditorTypeDetailsComponent } from './view/expeditorType/details/expeditorType-details.component';
import { ExpeditorTypeEditComponent } from './view/expeditorType/edit/expeditorType-edit.component';
import { ExpeditorTypeComponent } from './view/expeditorType/expeditorType.component';
import { CourrierServiceItemCreateComponent } from './view/courrierServiceItem/create/courrierServiceItem-create.component';
import { CourrierServiceItemlistComponent } from './view/courrierServiceItem/list/courrierServiceItem-list.component';
import { CourrierServiceItemDetailsComponent } from './view/courrierServiceItem/details/courrierServiceItem-details.component';
import { CourrierServiceItemEditComponent } from './view/courrierServiceItem/edit/courrierServiceItem-edit.component';
import { CourrierServiceItemComponent } from './view/courrierServiceItem/courrierServiceItem.component';
import { CourrierCreateComponent } from './view/courrier/create/courrier-create.component';
import { CourrierlistComponent } from './view/courrier/list/courrier-list.component';
import { CourrierDetailsComponent } from './view/courrier/details/courrier-details.component';
import { CourrierEditComponent } from './view/courrier/edit/courrier-edit.component';
import { CourrierComponent } from './view/courrier/courrier.component';
import { ModelLettreReponseCreateComponent } from './view/modelLettreReponse/create/modelLettreReponse-create.component';
import { ModelLettreReponselistComponent } from './view/modelLettreReponse/list/modelLettreReponse-list.component';
import { ModelLettreReponseDetailsComponent } from './view/modelLettreReponse/details/modelLettreReponse-details.component';
import { ModelLettreReponseEditComponent } from './view/modelLettreReponse/edit/modelLettreReponse-edit.component';
import { ModelLettreReponseComponent } from './view/modelLettreReponse/modelLettreReponse.component';
import { SubdivisionCreateComponent } from './view/subdivision/create/subdivision-create.component';
import { SubdivisionlistComponent } from './view/subdivision/list/subdivision-list.component';
import { SubdivisionDetailsComponent } from './view/subdivision/details/subdivision-details.component';
import { SubdivisionEditComponent } from './view/subdivision/edit/subdivision-edit.component';
import { SubdivisionComponent } from './view/subdivision/subdivision.component';
import { NationalityCreateComponent } from './view/nationality/create/nationality-create.component';
import { NationalitylistComponent } from './view/nationality/list/nationality-list.component';
import { NationalityDetailsComponent } from './view/nationality/details/nationality-details.component';
import { NationalityEditComponent } from './view/nationality/edit/nationality-edit.component';
import { NationalityComponent } from './view/nationality/nationality.component';
import { TypeCourrierCreateComponent } from './view/typeCourrier/create/typeCourrier-create.component';
import { TypeCourrierlistComponent } from './view/typeCourrier/list/typeCourrier-list.component';
import { TypeCourrierDetailsComponent } from './view/typeCourrier/details/typeCourrier-details.component';
import { TypeCourrierEditComponent } from './view/typeCourrier/edit/typeCourrier-edit.component';
import { TypeCourrierComponent } from './view/typeCourrier/typeCourrier.component';
import { ExpeditorCreateComponent } from './view/expeditor/create/expeditor-create.component';
import { ExpeditorlistComponent } from './view/expeditor/list/expeditor-list.component';
import { ExpeditorDetailsComponent } from './view/expeditor/details/expeditor-details.component';
import { ExpeditorEditComponent } from './view/expeditor/edit/expeditor-edit.component';
import { ExpeditorComponent } from './view/expeditor/expeditor.component';
import { RoleCreateComponent } from './view/role/create/role-create.component';
import { RolelistComponent } from './view/role/list/role-list.component';
import { RoleDetailsComponent } from './view/role/details/role-details.component';
import { RoleEditComponent } from './view/role/edit/role-edit.component';
import { RoleComponent } from './view/role/role.component';
import { EmployeeCreateComponent } from './view/employee/create/employee-create.component';
import { EmployeelistComponent } from './view/employee/list/employee-list.component';
import { EmployeeDetailsComponent } from './view/employee/details/employee-details.component';
import { EmployeeEditComponent } from './view/employee/edit/employee-edit.component';
import { EmployeeComponent } from './view/employee/employee.component';
import { CategorieModelLettreReponseCreateComponent } from './view/categorieModelLettreReponse/create/categorieModelLettreReponse-create.component';
import { CategorieModelLettreReponselistComponent } from './view/categorieModelLettreReponse/list/categorieModelLettreReponse-list.component';
import { CategorieModelLettreReponseDetailsComponent } from './view/categorieModelLettreReponse/details/categorieModelLettreReponse-details.component';
import { CategorieModelLettreReponseEditComponent } from './view/categorieModelLettreReponse/edit/categorieModelLettreReponse-edit.component';
import { CategorieModelLettreReponseComponent } from './view/categorieModelLettreReponse/categorieModelLettreReponse.component';
import { LeServiceCreateComponent } from './view/leService/create/leService-create.component';
import { LeServicelistComponent } from './view/leService/list/leService-list.component';
import { LeServiceDetailsComponent } from './view/leService/details/leService-details.component';
import { LeServiceEditComponent } from './view/leService/edit/leService-edit.component';
import { LeServiceComponent } from './view/leService/leService.component';
import { SexeCreateComponent } from './view/sexe/create/sexe-create.component';
import { SexelistComponent } from './view/sexe/list/sexe-list.component';
import { SexeDetailsComponent } from './view/sexe/details/sexe-details.component';
import { SexeEditComponent } from './view/sexe/edit/sexe-edit.component';
import { SexeComponent } from './view/sexe/sexe.component';
import { BordereauCreateComponent } from './view/bordereau/create/bordereau-create.component';
import { BordereaulistComponent } from './view/bordereau/list/bordereau-list.component';
import { BordereauDetailsComponent } from './view/bordereau/details/bordereau-details.component';
import { BordereauEditComponent } from './view/bordereau/edit/bordereau-edit.component';
import { BordereauComponent } from './view/bordereau/bordereau.component';
import { VoieCreateComponent } from './view/voie/create/voie-create.component';
import { VoielistComponent } from './view/voie/list/voie-list.component';
import { VoieDetailsComponent } from './view/voie/details/voie-details.component';
import { VoieEditComponent } from './view/voie/edit/voie-edit.component';
import { VoieComponent } from './view/voie/voie.component';
import { NavbarComponent } from './navbar/navbar.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {DropdownModule} from 'primeng/dropdown';


import {OverlayPanelModule} from 'primeng/overlaypanel';

import {MenuModule} from 'primeng/menu';

@NgModule({
  declarations: [
    StatusCreateComponent,
    StatuslistComponent,
    StatusDetailsComponent,
    StatusEditComponent,
    StatusComponent,
    CourrierObjectCreateComponent,
    CourrierObjectlistComponent,
    CourrierObjectDetailsComponent,
    CourrierObjectEditComponent,
    CourrierObjectComponent,
    EvaluationCreateComponent,
    EvaluationlistComponent,
    EvaluationDetailsComponent,
    EvaluationEditComponent,
    EvaluationComponent,
    TaskCreateComponent,
    TasklistComponent,
    TaskDetailsComponent,
    TaskEditComponent,
    TaskComponent,
    UserCreateComponent,
    UserlistComponent,
    UserDetailsComponent,
    UserEditComponent,
    UserComponent,
    NatureCourrierCreateComponent,
    NatureCourrierlistComponent,
    NatureCourrierDetailsComponent,
    NatureCourrierEditComponent,
    NatureCourrierComponent,
    ExpeditorTypeCreateComponent,
    ExpeditorTypelistComponent,
    ExpeditorTypeDetailsComponent,
    ExpeditorTypeEditComponent,
    ExpeditorTypeComponent,
    CourrierServiceItemCreateComponent,
    CourrierServiceItemlistComponent,
    CourrierServiceItemDetailsComponent,
    CourrierServiceItemEditComponent,
    CourrierServiceItemComponent,
    CourrierCreateComponent,
    CourrierlistComponent,
    CourrierDetailsComponent,
    CourrierEditComponent,
    CourrierComponent,
    ModelLettreReponseCreateComponent,
    ModelLettreReponselistComponent,
    ModelLettreReponseDetailsComponent,
    ModelLettreReponseEditComponent,
    ModelLettreReponseComponent,
    SubdivisionCreateComponent,
    SubdivisionlistComponent,
    SubdivisionDetailsComponent,
    SubdivisionEditComponent,
    SubdivisionComponent,
    NationalityCreateComponent,
    NationalitylistComponent,
    NationalityDetailsComponent,
    NationalityEditComponent,
    NationalityComponent,
    TypeCourrierCreateComponent,
    TypeCourrierlistComponent,
    TypeCourrierDetailsComponent,
    TypeCourrierEditComponent,
    TypeCourrierComponent,
    ExpeditorCreateComponent,
    ExpeditorlistComponent,
    ExpeditorDetailsComponent,
    ExpeditorEditComponent,
    ExpeditorComponent,
    RoleCreateComponent,
    RolelistComponent,
    RoleDetailsComponent,
    RoleEditComponent,
    RoleComponent,
    EmployeeCreateComponent,
    EmployeelistComponent,
    EmployeeDetailsComponent,
    EmployeeEditComponent,
    EmployeeComponent,
    CategorieModelLettreReponseCreateComponent,
    CategorieModelLettreReponselistComponent,
    CategorieModelLettreReponseDetailsComponent,
    CategorieModelLettreReponseEditComponent,
    CategorieModelLettreReponseComponent,
    LeServiceCreateComponent,
    LeServicelistComponent,
    LeServiceDetailsComponent,
    LeServiceEditComponent,
    LeServiceComponent,
    SexeCreateComponent,
    SexelistComponent,
    SexeDetailsComponent,
    SexeEditComponent,
    SexeComponent,
    BordereauCreateComponent,
    BordereaulistComponent,
    BordereauDetailsComponent,
    BordereauEditComponent,
    BordereauComponent,
    VoieCreateComponent,
    VoielistComponent,
    VoieDetailsComponent,
    VoieEditComponent,
    VoieComponent,
    AppComponent,
    LandingPageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CalendarModule,
     OverlayPanelModule,
    MenuModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
