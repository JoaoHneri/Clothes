import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OrderPayment } from '../interfaces/OrderPayment';

@Injectable({providedIn: 'root'})
export class ProdPaymentsService {
  ApiUrl = environment.apiUrl
  constructor(private http: HttpClient) { }

  dicionarProdutosAoCarrinho(userId: string, produtos: any[]): Observable<any> {
    const Url = `${this.ApiUrl}payment/${userId}`
    return this.http.post<any>(Url, produtos);
  }

  getProdutosCarrinho(userId: string): Observable<any> {
    const Url = `${this.ApiUrl}payment/${userId}`
    return this.http.get<any>(Url);
  }


  getProdutosPorStatus(userId: string, status: string): Observable<any> {
    const url = `${this.ApiUrl}payment/status/${userId}/${status}`;

    return this.http.get<any>(url).pipe(
      tap((response) => {
        if (response) {
          console.log('Existe');
        } else {
          console.log(
            'Não Existe'
          );
        }
      }),
      catchError((error) => {
        let errorMessage =
          'Erro ao adicionar item ao carrinho. Por favor, tente novamente mais tarde.';
        if (error && error.error && error.error.message) {
          errorMessage = error.error.message;
        }
       console.log(errorMessage);
        return throwError(error);
      })
  )}


  addProdToPay(orderPayment: OrderPayment): Observable<OrderPayment>{
    const url = `${this.ApiUrl}createOrder`;
    return this.http.post<OrderPayment>(url, orderPayment).pipe(tap((response) => {
      if (response) {
        if(response.init_point) {
          setTimeout(()=>{
            alert("Aguarde...")
          }, 3000)
        window.location.href = response.init_point}
      } else {
        console.log(
          'Não Existe'
        );
      }
    }));
  }


  updateBuyedProduct(user_id: string, _id: string): Observable<any> {
    const url = `${this.ApiUrl}success-payment/${user_id}/${_id}`;
    return this.http.get<any>(url);
  }
  
}