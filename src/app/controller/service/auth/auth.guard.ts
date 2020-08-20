import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import Swal from "sweetalert2";
import {AuthenticationService} from './authentication.service';


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private auth: AuthenticationService) {
    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        // const expectedRole = route.data.expectedRole;
        //
        // let allowed : boolean ;
        // for (let r of this.auth.authenticatedUser.roles){
        //   if (expectedRole == 'ALL'){
        //     allowed = true;break;
        //   }
        //   if (r == expectedRole){
        //     allowed = true;break;
        //   }
        //   allowed = false;
        // }
        // console.log('++++++++++++++++++++++++++++++++++++++++++++++++++??')
        if (this.auth.authenticated == false || this.auth.authenticatedUser.username == '') {
            Swal.fire({
                position: 'top-end',
                icon: 'warning',
                title: 'Impossible de consulter cette page  ',
                showConfirmButton: false,
                timer: 1500
            });
            //   this.router.navigate(['login']);
            return false;
        }
        return true;
    }

}
