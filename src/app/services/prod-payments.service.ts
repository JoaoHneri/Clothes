import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class ProdPaymentsService {
  ApiUrl = environment.apiUrl
  constructor(private http: HttpClient) { }

  dicionarProdutosAoCarrinho(userId: string, produtos: any[]): Observable<any> {
    const Url = `${this.ApiUrl}/payment/${userId}`
    return this.http.post<any>(Url, produtos);
  }
  
}