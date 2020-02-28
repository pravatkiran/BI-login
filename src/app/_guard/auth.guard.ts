import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root'})

export class AuthGuard implements CanActivate {

    constructor(
        private router : Router,
        private authService : AuthService
    ){

    }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    )  {
        const currentUser = this.authService.currentUserValue;
        if(currentUser){

            // authorized so return true;
            return true;
        }

        // not logged in so redirect to login page with return url
        this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
        return false;
    }

}