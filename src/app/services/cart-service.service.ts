import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { MessageServiceService } from './message-service.service';

@Injectable({providedIn: 'root'})

export class CartServiceService {

  constructor(private httpClient: HttpClient, private messageS: MessageServiceService) { }


  addCart(user_id:String, idProd: String):Observable<any> {
    return this.httpClient.post<any>(`http://localhost:3334/cart/${user_id}`, idProd).pipe(tap((response) => {
      if (response) {
        this.messageS.showSuccessMessage("Item adicionado ao carrinho")
      } else {
        this.messageS.showErrorMessage(response.message || 'Erro desconhecido ao adicionar item ao carrinho')
      }
    }),
    catchError((error) => {
      let errorMessage = 'Erro ao adicionar item ao carrinho. Por favor, tente novamente mais tarde.';
      if (error && error.error && error.error.message) {
        errorMessage = error.error.message;
      }
      this.messageS.showErrorMessage(errorMessage);
      return throwError(error);
    })
  );
  }
}