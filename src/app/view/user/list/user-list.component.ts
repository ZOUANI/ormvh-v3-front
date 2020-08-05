import {Component, OnInit} from '@angular/core';
import {UserVo} from '../../../controller/model/user.model';
import {UserService} from '../../../controller/service/User.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserlistComponent implements OnInit {

    constructor(private _userService: UserService, private router: Router) {
    }

    ngOnInit(): void {
        this.findAll();
        this.findAllcreatedBys();
        this.findAllupdatedBys();
        this.userSearch.enabled = false;
        this.userSearch.accountNonExpired = false;
        this.userSearch.accountNonLocked = false;
        this.userSearch.credentialsNonExpired = false;
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

    setUserToUpdate(p) {
        this._userService.userToUpdate = p;
        this.router.navigate(['/user/edit']);

    }

    switchCredentialsNonExpired() {
            this.userSearch.credentialsNonExpired = !this.userSearch.credentialsNonExpired;
    }

    switchEnabled() {
            this.userSearch.enabled = !this.userSearch.enabled;
    }

    switchAccountNonExpired() {
            this.userSearch.accountNonExpired = !this.userSearch.accountNonExpired;
    }

    switchAccountNonLocked() {
            this.userSearch.accountNonLocked = !this.userSearch.accountNonLocked;
    }

    initSearch(){
        this.userSearch = new UserVo();
        this.userService.findAll();
    }


}
