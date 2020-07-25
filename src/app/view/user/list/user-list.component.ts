import {Component, OnInit} from '@angular/core';
import {UserVo} from '../../../controller/model/user.model';
import {UserService} from '../../../controller/service/User.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserlistComponent implements OnInit {

    constructor(private _userService: UserService) {
    }

    get createdBys(): Array<UserVo> {
        return this.userService.createdBys;
    }

    get updatedBys(): Array<UserVo> {
        return this.userService.updatedBys;
    }

    get userService(): UserService {
        return this._userService;
    }

    set userService(value: UserService) {
        this._userService = value;
    }

    get userListe(): Array<UserVo> {
        return this.userService.userListe;
    }

    set userListe(value: Array<UserVo>) {
        this.userService.userListe = value;
    }

    get userDetail(): UserVo {
        return this.userService.userDetail;
    }

    set userDetail(value: UserVo) {
        this.userService.userDetail = value;
    }

    get userSearch(): UserVo {
        return this.userService.userSearch;
    }

    set userSearch(value: UserVo) {
        this.userService.userSearch = value;
    }

    get userShowDetail(): boolean {
        return this.userService.userShowDetail;
    }

    set userShowDetail(value: boolean) {
        this.userService.userShowDetail = value;
    }

    ngOnInit(): void {
        this.findAll();
        this.findAllcreatedBys();
        this.findAllupdatedBys();
    }

    delete(pojo: UserVo) {
        this.userService.delete(pojo);
    }


    detailShow(pojo: UserVo) {
        this.userService.detailShow(pojo);

    }

    findUser(pojo: UserVo) {
        this.userService.findUser(pojo);

    }

    findAll() {
        this.userService.findAll();
    }

    findAllcreatedBys() {
        this.userService.findAllcreatedBys();
    }

    findAllupdatedBys() {
        this.userService.findAllupdatedBys();
    }

}
