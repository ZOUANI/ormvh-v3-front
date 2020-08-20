import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EmployeeVo} from '../model/employee.model';
import {UserVo} from '../model/User.model';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    constructor(private http: HttpClient) {
    }

    private _employeeDetail: EmployeeVo = new EmployeeVo();
    private _employeeListe: Array<EmployeeVo> = new Array<EmployeeVo>();

    private _employeeSearch: EmployeeVo = new EmployeeVo();
    private _employee: EmployeeVo = new EmployeeVo();
    private _searchedEmployees: Array<EmployeeVo> = new Array<EmployeeVo>();
    private _editableEmployees: Array<EmployeeVo> = new Array<EmployeeVo>();
    private _updatedBys: Array<UserVo> = new Array<UserVo>();
    private _createdBys: Array<UserVo> = new Array<UserVo>();
    private _users: Array<UserVo> = new Array<UserVo>();

    get updatedBys(): Array<UserVo> {
        return this._updatedBys;
    }

    set updatedBys(value: Array<UserVo>) {
        this._updatedBys = value;
    }

    get createdBys(): Array<UserVo> {
        return this._createdBys;
    }

    set createdBys(value: Array<UserVo>) {
        this._createdBys = value;
    }

    get users(): Array<UserVo> {
        return this._users;
    }

    set users(value: Array<UserVo>) {
        this._users = value;
    }

    get employee(): EmployeeVo {
        if (this._employee == null) {
            this._employee = new EmployeeVo();
        }
        return this._employee;
    }

    set employee(value: EmployeeVo) {
        this._employee = value;
    }

    get employeeListe(): Array<EmployeeVo> {
        return this._employeeListe;
    }

    set employeeListe(value: Array<EmployeeVo>) {
        this._employeeListe = value;
    }

    get employeeDetail(): EmployeeVo {
        return this._employeeDetail;
    }

    set employeeDetail(value: EmployeeVo) {
        this._employeeDetail = value;
    }

    get employeeSearch(): EmployeeVo {
        return this._employeeSearch;
    }

    set employeeSearch(value: EmployeeVo) {
        this._employeeSearch = value;
    }

    get employeeShowDetail(): boolean {
        return this._employeeShowDetail;
    }

    set employeeShowDetail(value: boolean) {
        this._employeeShowDetail = value;
    }

    get editableEmployees(): Array<EmployeeVo> {
        return this._editableEmployees;
    }

    set editableEmployees(value: Array<EmployeeVo>) {
        this._editableEmployees = value;
    }

    public findAll() {
        this.http.get<Array<EmployeeVo>>('http://localhost:8080/generated/employee/').subscribe(
            value => {
                if (value != null) {
                    this.employeeListe = value;
                    this.editableEmployees = value;

                }
            }
        );
    }

    public saveEmployee() {
        this.http.post<EmployeeVo>('http://localhost:8080/generated/employee/', this.employee).subscribe(data => {
            this.createHide();
            this.employeeListe.push(data);

        });
    }

    public editEmployee() {
        this.http.put<EmployeeVo>('http://localhost:8080/generated/employee/', this.employee).subscribe(data => {
            this.editHide();
        });

    }

    public findEmployee(pojo: EmployeeVo) {
        this.http.post<Array<EmployeeVo>>('http://localhost:8080/generated/employee/search/', pojo).subscribe(
            value => {
                this.employeeListe = value;
            });
    }

    public detailShow(pojo: EmployeeVo) {
        this.employeeDetail = pojo;
        this.employeeShowDetail = true;

    }


    delete(pojo: EmployeeVo) {
        this.http.delete<EmployeeVo>('http://localhost:8080/generated/employee/id/' + pojo.id).subscribe(
            value => {
                var index = this.employeeListe.indexOf(pojo);
                if (index > -1) {
                    this.employeeListe.splice(index, 1);
                }
            }
        );


    }


    public findBytitle(ref: string) {
        this.http.get<EmployeeVo>('http://localhost:8080/generated/employee/title/' + ref).subscribe(
            value => {
                if (value != null) {
                    this.employee = value;
                }
            }
        );
    }

    public findAllupdatedBys() {
        this.http.get<Array<UserVo>>('http://localhost:8080/generated/user/').subscribe(
            value => {
                if (value != null) {
                    this.updatedBys = value;
                }
            }
        );
    }

    public findAllcreatedBys() {
        this.http.get<Array<UserVo>>('http://localhost:8080/generated/user/').subscribe(
            value => {
                if (value != null) {
                    this.createdBys = value;
                }
            }
        );
    }

    public findAllusers() {
        this.http.get<Array<UserVo>>('http://localhost:8080/generated/user/').subscribe(
            value => {
                if (value != null) {
                    this.users = value;
                }
            }
        );
    }


    /***********************************************************************************************/
    private _employeeShowDetail: boolean;

    public detailHide() {

        this.employeeShowDetail = false;
        this.employeeDetail = null;
    }

    private _employeeShowEdit: boolean;

    private _employeeShowCreate: boolean;

    get employeeShowEdit(): boolean {
        return this._employeeShowEdit;
    }

    set employeeShowEdit(value: boolean) {
        this._employeeShowEdit = value;
    }

    get employeeShowCreate(): boolean {
        return this._employeeShowCreate;
    }

    set employeeShowCreate(value: boolean) {
        this._employeeShowCreate = value;
    }

    public editShow(pojo: EmployeeVo) {

        this.employeeShowEdit = true;
        this.employee = pojo;
    }

    public editHide() {

        this.employeeShowEdit = false;
        this.employee = new EmployeeVo();
    }

    public createShow() {

        this.employeeShowCreate = true;
        this.employee = new EmployeeVo();
    }

    public createHide() {

        this.employeeShowCreate = false;
        this.employee = new EmployeeVo();
    }
}