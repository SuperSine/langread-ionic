import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,private authService: AuthService){
    // authService.getUserData();
  }

  canActivate():Observable<boolean>{
    let isAuth:boolean;
    
    this.authService.isAuthenticated.subscribe((isAuthenticated) => {
      console.log(isAuthenticated);
      if(!isAuthenticated)
        this.router.navigateByUrl('/login');
    });

    this.authService.isEmailConfirmed.subscribe((confirmed) => {
      if(!confirmed){
        console.log('you should activate your email!!!');

        if(this.router.url != '/auth-confirm')
          this.router.navigateByUrl('/auth-confirm');
      }

    })

    return this.authService.isAuthenticated;
  }
}
