import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StatuslistComponent} from './view/status/list/status-list.component';
import {StatusCreateComponent} from './view/status/create/status-create.component';
import {StatusDetailsComponent} from './view/status/details/status-details.component';
import {StatusEditComponent} from './view/status/edit/status-edit.component';
import {CourrierObjectlistComponent} from './view/courrierObject/list/courrierObject-list.component';
import {CourrierObjectCreateComponent} from './view/courrierObject/create/courrierObject-create.component';
import {CourrierObjectDetailsComponent} from './view/courrierObject/details/courrierObject-details.component';
import {CourrierObjectEditComponent} from './view/courrierObject/edit/courrierObject-edit.component';
import {EvaluationlistComponent} from './view/evaluation/list/evaluation-list.component';
import {EvaluationCreateComponent} from './view/evaluation/create/evaluation-create.component';
import {EvaluationDetailsComponent} from './view/evaluation/details/evaluation-details.component';
import {EvaluationEditComponent} from './view/evaluation/edit/evaluation-edit.component';
import {TasklistComponent} from './view/task/list/task-list.component';
import {TaskCreateComponent} from './view/task/create/task-create.component';
import {TaskDetailsComponent} from './view/task/details/task-details.component';
import {TaskEditComponent} from './view/task/edit/task-edit.component';
import {UserlistComponent} from './view/user/list/user-list.component';
import {UserCreateComponent} from './view/user/create/user-create.component';
import {UserDetailsComponent} from './view/user/details/user-details.component';
import {UserEditComponent} from './view/user/edit/user-edit.component';
import {NatureCourrierlistComponent} from './view/natureCourrier/list/natureCourrier-list.component';
import {NatureCourrierCreateComponent} from './view/natureCourrier/create/natureCourrier-create.component';
import {NatureCourrierDetailsComponent} from './view/natureCourrier/details/natureCourrier-details.component';
import {NatureCourrierEditComponent} from './view/natureCourrier/edit/natureCourrier-edit.component';
import {ExpeditorTypelistComponent} from './view/expeditorType/list/expeditorType-list.component';
import {ExpeditorTypeCreateComponent} from './view/expeditorType/create/expeditorType-create.component';
import {ExpeditorTypeDetailsComponent} from './view/expeditorType/details/expeditorType-details.component';
import {ExpeditorTypeEditComponent} from './view/expeditorType/edit/expeditorType-edit.component';
import {CourrierServiceItemlistComponent} from './view/courrierServiceItem/list/courrierServiceItem-list.component';
import {CourrierServiceItemCreateComponent} from './view/courrierServiceItem/create/courrierServiceItem-create.component';
import {CourrierServiceItemDetailsComponent} from './view/courrierServiceItem/details/courrierServiceItem-details.component';
import {CourrierServiceItemEditComponent} from './view/courrierServiceItem/edit/courrierServiceItem-edit.component';
import {CourrierlistComponent} from './view/courrier/list/courrier-list.component';
import {CourrierCreateComponent} from './view/courrier/create/courrier-create.component';
import {CourrierDetailsComponent} from './view/courrier/details/courrier-details.component';
import {CourrierEditComponent} from './view/courrier/edit/courrier-edit.component';
import {ModelLettreReponselistComponent} from './view/modelLettreReponse/list/modelLettreReponse-list.component';
import {ModelLettreReponseCreateComponent} from './view/modelLettreReponse/create/modelLettreReponse-create.component';
import {ModelLettreReponseDetailsComponent} from './view/modelLettreReponse/details/modelLettreReponse-details.component';
import {ModelLettreReponseEditComponent} from './view/modelLettreReponse/edit/modelLettreReponse-edit.component';
import {SubdivisionlistComponent} from './view/subdivision/list/subdivision-list.component';
import {SubdivisionCreateComponent} from './view/subdivision/create/subdivision-create.component';
import {SubdivisionDetailsComponent} from './view/subdivision/details/subdivision-details.component';
import {SubdivisionEditComponent} from './view/subdivision/edit/subdivision-edit.component';
import {NationalitylistComponent} from './view/nationality/list/nationality-list.component';
import {NationalityCreateComponent} from './view/nationality/create/nationality-create.component';
import {NationalityDetailsComponent} from './view/nationality/details/nationality-details.component';
import {NationalityEditComponent} from './view/nationality/edit/nationality-edit.component';
import {TypeCourrierlistComponent} from './view/typeCourrier/list/typeCourrier-list.component';
import {TypeCourrierCreateComponent} from './view/typeCourrier/create/typeCourrier-create.component';
import {TypeCourrierDetailsComponent} from './view/typeCourrier/details/typeCourrier-details.component';
import {TypeCourrierEditComponent} from './view/typeCourrier/edit/typeCourrier-edit.component';
import {ExpeditorlistComponent} from './view/expeditor/list/expeditor-list.component';
import {ExpeditorCreateComponent} from './view/expeditor/create/expeditor-create.component';
import {ExpeditorDetailsComponent} from './view/expeditor/details/expeditor-details.component';
import {ExpeditorEditComponent} from './view/expeditor/edit/expeditor-edit.component';
import {RolelistComponent} from './view/role/list/role-list.component';
import {RoleCreateComponent} from './view/role/create/role-create.component';
import {RoleDetailsComponent} from './view/role/details/role-details.component';
import {RoleEditComponent} from './view/role/edit/role-edit.component';
import {EmployeelistComponent} from './view/employee/list/employee-list.component';
import {EmployeeCreateComponent} from './view/employee/create/employee-create.component';
import {EmployeeDetailsComponent} from './view/employee/details/employee-details.component';
import {EmployeeEditComponent} from './view/employee/edit/employee-edit.component';
import {CategorieModelLettreReponselistComponent} from './view/categorieModelLettreReponse/list/categorieModelLettreReponse-list.component';
import {CategorieModelLettreReponseCreateComponent} from './view/categorieModelLettreReponse/create/categorieModelLettreReponse-create.component';
import {CategorieModelLettreReponseDetailsComponent} from './view/categorieModelLettreReponse/details/categorieModelLettreReponse-details.component';
import {CategorieModelLettreReponseEditComponent} from './view/categorieModelLettreReponse/edit/categorieModelLettreReponse-edit.component';
import {LeServicelistComponent} from './view/leService/list/leService-list.component';
import {LeServiceCreateComponent} from './view/leService/create/leService-create.component';
import {LeServiceDetailsComponent} from './view/leService/details/leService-details.component';
import {LeServiceEditComponent} from './view/leService/edit/leService-edit.component';
import {SexelistComponent} from './view/sexe/list/sexe-list.component';
import {SexeCreateComponent} from './view/sexe/create/sexe-create.component';
import {SexeDetailsComponent} from './view/sexe/details/sexe-details.component';
import {SexeEditComponent} from './view/sexe/edit/sexe-edit.component';
import {BordereaulistComponent} from './view/bordereau/list/bordereau-list.component';
import {BordereauCreateComponent} from './view/bordereau/create/bordereau-create.component';
import {BordereauDetailsComponent} from './view/bordereau/details/bordereau-details.component';
import {BordereauEditComponent} from './view/bordereau/edit/bordereau-edit.component';
import {VoielistComponent} from './view/voie/list/voie-list.component';
import {VoieCreateComponent} from './view/voie/create/voie-create.component';
import {VoieDetailsComponent} from './view/voie/details/voie-details.component';
import {VoieEditComponent} from './view/voie/edit/voie-edit.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {CourrierComponent} from './view/courrier/courrier.component';
import {CourrierReservationComponent} from './view/courrier/reservation/courrier-reservation.component';
import {DashboardComponent} from './view/dashboard/dashboard.component';
import {LoginComponent} from './view/login/login.component';
import {CreateExpeditorComponent} from "./view/courrier/createExpeditor/createExpeditor.component";
import {CourrierRedirectionComponent} from './view/courrier/redirection/courrier-redirection.component';
import {PasswordResetComponent} from './view/password-reset/password-reset.component';
import {StatistiquesComponent} from "./view/statistiques/statistiques.component";

const routes: Routes = [
        {
            path: 'status', children: [
                {path: 'list', component: StatuslistComponent},
                {path: 'create', component: StatusCreateComponent},
                {path: 'details', component: StatusDetailsComponent},
                {path: 'edit', component: StatusEditComponent}
            ]
        },
        {
            path: 'courrierObject', children: [
                {path: 'list', component: CourrierObjectlistComponent},
                {path: 'create', component: CourrierObjectCreateComponent},
                {path: 'details', component: CourrierObjectDetailsComponent},
                {path: 'edit', component: CourrierObjectEditComponent}
            ]
        },
        {
            path: 'evaluation', children: [
                {path: 'list', component: EvaluationlistComponent},
                {path: 'create', component: EvaluationCreateComponent},
                {path: 'details', component: EvaluationDetailsComponent},
                {path: 'edit', component: EvaluationEditComponent}
            ]
        },
        {
            path: 'task', children: [
                {path: 'list', component: TasklistComponent},
                {path: 'create', component: TaskCreateComponent},
                {path: 'details', component: TaskDetailsComponent},
                {path: 'edit', component: TaskEditComponent}
            ]
        },
        {
            path: 'user', children: [
                {path: 'list', component: UserlistComponent},
                {path: 'create', component: UserCreateComponent},
                {path: 'details', component: UserDetailsComponent},
                {path: 'edit', component: UserEditComponent}
            ]
        },
        {
            path: 'natureCourrier', children: [
                {path: 'list', component: NatureCourrierlistComponent},
                {path: 'create', component: NatureCourrierCreateComponent},
                {path: 'details', component: NatureCourrierDetailsComponent},
                {path: 'edit', component: NatureCourrierEditComponent}
            ]
        },
        {
            path: 'expeditorType', children: [
                {path: 'list', component: ExpeditorTypelistComponent},
                {path: 'create', component: ExpeditorTypeCreateComponent},
                {path: 'details', component: ExpeditorTypeDetailsComponent},
                {path: 'edit', component: ExpeditorTypeEditComponent}
            ]
        },
        {
            path: 'courrierServiceItem', children: [
                {path: 'list', component: CourrierServiceItemlistComponent},
                {path: 'create', component: CourrierServiceItemCreateComponent},
                {path: 'details', component: CourrierServiceItemDetailsComponent},
                {path: 'edit', component: CourrierServiceItemEditComponent}
            ]
        },
        {
            path: 'courrier', component: CourrierComponent, children: [
                {path: 'list', component: CourrierlistComponent},
                {path: 'create', component: CourrierCreateComponent},
                {path: 'details', component: CourrierDetailsComponent},
                {path: 'edit', component: CourrierEditComponent},
                {path: 'reservation', component: CourrierReservationComponent},
                {path: 'createExpeditor', component: CreateExpeditorComponent},
                {path: 'redirection', component: CourrierRedirectionComponent}

            ]
        },
        {
            path: 'modelLettreReponse', children: [
                {path: 'list', component: ModelLettreReponselistComponent},
                {path: 'create', component: ModelLettreReponseCreateComponent},
                {path: 'details', component: ModelLettreReponseDetailsComponent},
                {path: 'edit', component: ModelLettreReponseEditComponent}
            ]
        },
        {
            path: 'subdivision', children: [
                {path: 'list', component: SubdivisionlistComponent},
                {path: 'create', component: SubdivisionCreateComponent},
                {path: 'details', component: SubdivisionDetailsComponent},
                {path: 'edit', component: SubdivisionEditComponent}
            ]
        },
        {
            path: 'nationality', children: [
                {path: 'list', component: NationalitylistComponent},
                {path: 'create', component: NationalityCreateComponent},
                {path: 'details', component: NationalityDetailsComponent},
                {path: 'edit', component: NationalityEditComponent}
            ]
        },
        {
            path: 'typeCourrier', children: [
                {path: 'list', component: TypeCourrierlistComponent},
                {path: 'create', component: TypeCourrierCreateComponent},
                {path: 'details', component: TypeCourrierDetailsComponent},
                {path: 'edit', component: TypeCourrierEditComponent}
            ]
        },
        {
            path: 'expeditor', children: [
                {path: 'list', component: ExpeditorlistComponent},
                {path: 'create', component: ExpeditorCreateComponent},
                {path: 'details', component: ExpeditorDetailsComponent},
                {path: 'edit', component: ExpeditorEditComponent}
            ]
        },
        {
            path: 'role', children: [
                {path: 'list', component: RolelistComponent},
                {path: 'create', component: RoleCreateComponent},
                {path: 'details', component: RoleDetailsComponent},
                {path: 'edit', component: RoleEditComponent}
            ]
        },
        {
            path: 'employee', children: [
                {path: 'list', component: EmployeelistComponent},
                {path: 'create', component: EmployeeCreateComponent},
                {path: 'details', component: EmployeeDetailsComponent},
                {path: 'edit', component: EmployeeEditComponent}
            ]
        },
        {
            path: 'categorieModelLettreReponse', children: [
                {path: 'list', component: CategorieModelLettreReponselistComponent},
                {path: 'create', component: CategorieModelLettreReponseCreateComponent},
                {path: 'details', component: CategorieModelLettreReponseDetailsComponent},
                {path: 'edit', component: CategorieModelLettreReponseEditComponent}
            ]
        },
        {
            path: 'leService', children: [
                {path: 'list', component: LeServicelistComponent},
                {path: 'create', component: LeServiceCreateComponent},
                {path: 'details', component: LeServiceDetailsComponent},
                {path: 'edit', component: LeServiceEditComponent}
            ]
        },
        {
            path: 'sexe', children: [
                {path: 'list', component: SexelistComponent},
                {path: 'create', component: SexeCreateComponent},
                {path: 'details', component: SexeDetailsComponent},
                {path: 'edit', component: SexeEditComponent}
            ]
        },
        {
            path: 'bordereau', children: [
                {path: 'list', component: BordereaulistComponent},
                {path: 'create', component: BordereauCreateComponent},
                {path: 'details', component: BordereauDetailsComponent},
                {path: 'edit', component: BordereauEditComponent}
            ]
        },
        {
            path: 'voie', children: [
                {path: 'list', component: VoielistComponent},
                {path: 'create', component: VoieCreateComponent},
                {path: 'details', component: VoieDetailsComponent},
                {path: 'edit', component: VoieEditComponent}
            ]
        },
        {path: 'dashboard', component: DashboardComponent},

        {path: 'stats', component: StatistiquesComponent},
        {path: 'login', component: LoginComponent},
        {path: 'resetPassword', component: PasswordResetComponent},
        {path: '', redirectTo: '/login', pathMatch: 'full'},
    ]
;

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
