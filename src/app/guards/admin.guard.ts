import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { MessageServiceService } from '../services/message-service.service';
import { AuthServicesService } from '../services/auth-services.service';
import { AdminService } from '../services/admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private AdmS: AdminService, private router: Router, private messageS: MessageServiceService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      return this.AdmS.isAuthenticated$().pipe(
        map(isAdmin=> {
          if (isAdmin) {
            return true;
          } else {
            this.router.navigate(['/']);
            this.messageS.showErrorMessage("Você precisa estar logado como admin para acessar essa página");
            return false;
          }
        }));
  }
  
}
