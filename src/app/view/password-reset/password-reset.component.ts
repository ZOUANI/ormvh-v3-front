import {Component, OnInit} from '@angular/core';
import {UserService} from '../../controller/service/User.service';
import Swal from "sweetalert2";
import {match} from 'minimatch';

@Component({
    selector: 'app-password-reset',
    templateUrl: './password-reset.component.html',
    styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
    }

    resetPassword() {
        if (this.userPasswordReset.newPassword != this.userPasswordReset.confirmPassword) {
            Swal.fire({
                position: 'top',
                icon: 'error',
                title: "passwords don't match",
                showConfirmButton: true
            });
        } else {
            return this.userService.resetPassword();
        }
    }

    get userPasswordReset() {
        return this.userService.userPasswordReset;
    }


}
