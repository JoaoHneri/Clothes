import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginResponse } from '../interfaces/loginResponse';
import { Router } from '@angular/router';
import { MessageServiceService } from './message-service.service';

@Injectable({ providedIn: 'root' })
export class AuthServicesService {
  private apiUrl = environment.apiUrl;
  private usuario!: String;
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);


  constructor(private httpClient: HttpClient, private router: Router, private messageS: MessageServiceService) {
    this.checkAuthentication();
  }

  private checkAuthentication(): void {
    const isAuthenticated = !!sessionStorage.getItem('token');
    this.isAuthenticatedSubject.next(isAuthenticated);
  }

  isAuthenticated$() {
    return this.isAuthenticatedSubject.asObservable();
  }

  register(formData: FormData): Observable<LoginResponse> {
    const url = `${this.apiUrl}auth/register`;

    const userName = formData.get('userName');
    const userEmail = formData.get('userEmail');
    const userPassword = formData.get('userPassword');

    const body = {
      userName: userName,
      userEmail: userEmail,
      userPassword: userPassword,
    };

    return this.httpClient.post<LoginResponse>(url, body).pipe(
      tap((response) => {
        if (response.token) {
          sessionStorage.setItem('token', response.token);
          sessionStorage.setItem('userId', response.userId);
          this.isAuthenticatedSubject.next(true);
          this.messageS.showSuccessMessage("Usuário Registrado com sucesso")
          window.location.reload();
        } else {
          this.messageS.showErrorMessage(response.msg || 'Erro desconhecido ao registrar usuário')
        }
      }),
      catchError((error) => {
        this.messageS.showErrorMessage('Erro ao fazer registro do usuário. Por favor, tente novamente mais tarde.')
        return throwError(error);
      })
    );
  }

  login(formData: FormData): Observable<LoginResponse> {
    const url = `${this.apiUrl}auth/login`;

    const userEmail = formData.get('userEmail');
    const userPassword = formData.get('userPassword');

    const body = {
      userEmail: userEmail,
      userPassword: userPassword,
    };

    return this.httpClient.post<LoginResponse>(url, body).pipe(
      tap((response) => {
        if (response.token) {
          sessionStorage.setItem('token', response.token);
          sessionStorage.setItem('userId', response.userId);
          this.isAuthenticatedSubject.next(true);
          this.messageS.showSuccessMessage("Usuário logado com sucesso")
          window.location.reload();
        } else {
          this.messageS.showErrorMessage(response.msg || 'Erro desconhecido ao fazer login')
        }
      }),
      catchError((error) => {
        this.messageS.showErrorMessage(error.error.msg || 'Erro ao fazer login. Por favor, tente novamente mais tarde.')
        return throwError(error);
      })
    );
  }

  logout(): void {

    this.messageS.showConfirmationMessage("Deseja realmente sair?").then((confirmed: boolean) => {
      if (confirmed) {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('userId');
        this.messageS.showSuccessMessage("Usuário Deslogado.");
        this.isAuthenticatedSubject.next(false);
        window.location.reload();
      }
    });
  }


  checkUserId(){
    if(sessionStorage.getItem('userId')){
      return sessionStorage.getItem('userId');
    }else{
      return null;
    }
  }

  checkisAdmin(){
    if(sessionStorage.getItem('userId')){
      return sessionStorage.getItem('userId');
    }else{
      return null;
    }
  }


  loginAdmin(userEmail: string, userPassword:string): Observable<any> {
    const url = `${this.apiUrl}login/admin`;

    const body = {
      userEmail: userEmail,
      userPassword: userPassword,
    };

    return this.httpClient.post<any
    >(url, body).pipe(
      tap((response) => {
        if (response.token) {
          sessionStorage.setItem('token', response.token);
          sessionStorage.setItem('userId', response.userId);
          sessionStorage.setItem('isAdmin', response.isAdmin);
          this.isAuthenticatedSubject.next(true);
          this.messageS.showSuccessMessage("Usuário logado com sucesso")
          this.router.navigate(['/dashboard']);
        } else {
          this.messageS.showErrorMessage(response.msg || 'Erro desconhecido ao fazer login')
        }
      }),
      catchError((error) => {
        this.messageS.showErrorMessage(error.error.msg || 'Erro ao fazer login. Por favor, tente novamente mais tarde.')
        return throwError(error);
      })
    );
  }


  getUserAdmin(user_id: string): Observable<any>{
      const url = `${this.apiUrl}getAdminUser/${user_id}`;
      return this.httpClient.get<any>(url)
    }

}
