import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthServicesService } from '../services/auth-services.service';
import { MessageServiceService } from '../services/message-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private AuthS: AuthServicesService, private router: Router, private messageS: MessageServiceService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.AuthS.isAuthenticated$().pipe(
        map(isAuthenticated => {
          if (isAuthenticated) {
            return true;
          } else {
            this.router.navigate(['/']);
            this.messageS.showErrorMessage("Você precisa estar logado para acessar essa página");
            return false;
          }
        }));
  }
  
  
}
