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
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  private userIdSubject = new BehaviorSubject<string | null>(null);
  userId$ = this.userIdSubject.asObservable();

  private usuario!: String;


  constructor(private httpClient: HttpClient, private router: Router, private messageS: MessageServiceService) {
    this.checkLoginStatus();
  }

  private checkLoginStatus(): void {
    const isLoggedIn = sessionStorage.getItem('token') !== null;
    this.isLoggedInSubject.next(isLoggedIn);
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
          this.setUserId(response.userId)
          this.messageS.showSuccessMessage("Usuário Registrado com sucesso")
          this.isLoggedInSubject.next(true);
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
          this.setUserId(response.userId)
          this.messageS.showSuccessMessage("Usuário logado com sucesso")
          this.isLoggedInSubject.next(true);
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
        this.isLoggedInSubject.next(false);
        this.messageS.showSuccessMessage("Usuário Deslogado.");
        this.setUserId(null)
      }
    });
  }


  setUserId(userId: string | null) {
    this.userIdSubject.next(userId);
    this.usuario = String(userId);
  }
  
  getUsuario() {
    return this.usuario;
  }

}
