import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginResponse } from '../interfaces/loginResponse';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthServicesService {

  constructor(private httpClient: HttpClient, private router: Router) {}

  private apiUrl = environment.apiUrl;

  register(formData: FormData): Observable<any> {
    const url = `${this.apiUrl}auth/register`;

    const userName = formData.get('userName');
    const userEmail = formData.get('userEmail');
    const userPassword = formData.get('userPassword');

    const body = {
      userName: userName,
      userEmail: userEmail,
      userPassword: userPassword,
    };

    return this.httpClient.post(url, body);
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
          this.router.navigate(['/']);
        } else {
          alert(response.msg || 'Erro desconhecido ao fazer login');
        }
      }),
      catchError((error) => {
        alert('Erro ao fazer login. Por favor, tente novamente mais tarde.');
        return throwError(error);
      })
    );
  }
}
