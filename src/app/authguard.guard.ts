import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  constructor(private authservice: AuthserviceService, private router: Router) {


  }
  canActivate(route: ActivatedRouteSnapshot,) {

    if (this.authservice.IsLoggedIn()) {

     
      this.router.navigate(['login']);
     
    }

    alert("You have not logged In")

    this.router.navigate(['login']);

    return false;

  }

}
