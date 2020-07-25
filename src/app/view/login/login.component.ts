import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../controller/service/auth/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private authService: AuthenticationService) {
    }

    get userCandidat() {
        return this.authService.userCandidat;
    }

    ngOnInit() {
    }

    public login() {
        return this.authService.login();
    }

}
