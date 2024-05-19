import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, pipe, tap } from 'rxjs';
import { MessageServiceService } from './message-service.service';

@Injectable({ providedIn: 'root' })
export class EnderecoService {
  apiUrl: String = environment.apiUrl;
  
  constructor(
    private http: HttpClient,
    private messageS: MessageServiceService
  ) {}

  addEndereco(user_id: string, enderecoData: any): Observable<any> {
    return this.http
      .post(`${this.apiUrl}address/${user_id}`, enderecoData)
      .pipe(
        tap((Response) => {
          this.messageS.showSuccessMessage('Endereço adicionado com sucesso!');
          
        })
      );
  }

  getUserEndereco(user_id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}address/user/${user_id}`);
  }

  deleteUserEndereco(address_id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}address/user/${address_id}`).pipe(
      tap((Response) => {
        this.messageS.showSuccessMessage('Endereço removido com sucesso!');
        
      })
    );;
  }


}
