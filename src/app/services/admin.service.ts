import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MessageServiceService } from './message-service.service';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private apiUrl = environment.apiUrl;
  private isAdminSubject = new BehaviorSubject<boolean>(false);

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private messageS: MessageServiceService
  ) {
    this.checkAdmin();
  }

  private checkAdmin(): void {
    const isAuthenticated = !!sessionStorage.getItem('isAdmin');
    this.isAdminSubject.next(isAuthenticated);
  }

  isAuthenticated$() {
    return this.isAdminSubject.asObservable();
  }
  loginAdmin(userEmail: string, userPassword: string): Observable<any> {
    const url = `${this.apiUrl}login/admin`;

    const body = {
      userEmail: userEmail,
      userPassword: userPassword,
    };

    return this.httpClient.post<any>(url, body).pipe(
      tap((response) => {
        if (response.token) {
          sessionStorage.setItem('token', response.token);
          sessionStorage.setItem('userId', response.userId);
          sessionStorage.setItem('isAdmin', response.isAdmin);
          this.isAdminSubject.next(true);
          this.messageS.showSuccessMessage('Usuário logado com sucesso');
          this.router.navigate(['/dashboard']);
        } else {
          this.messageS.showErrorMessage(
            response.msg || 'Erro desconhecido ao fazer login'
          );
        }
      }),
      catchError((error) => {
        this.messageS.showErrorMessage(
          error.error.msg ||
            'Erro ao fazer login. Por favor, tente novamente mais tarde.'
        );
        return throwError(error);
      })
    );
  }

  getUserAdmin(user_id: string): Observable<any> {
    const url = `${this.apiUrl}getAdminUser/${user_id}`;
    return this.httpClient.get<any>(url);
  }

  checkUserId() {
    if (sessionStorage.getItem('userId')) {
      return sessionStorage.getItem('userId');
    } else {
      return null;
    }
  }
}
