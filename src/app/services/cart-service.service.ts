import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable, catchError, tap, throwError } from 'rxjs';
import { MessageServiceService } from './message-service.service';
import { CartItemResponse } from '../interfaces/cartItemResponse';

@Injectable({ providedIn: 'root' })
export class CartServiceService {
  constructor(
    private httpClient: HttpClient,
    private messageS: MessageServiceService
  ) {}

  addCart(user_id: string, idProd: string): Observable<CartItemResponse> {
    // Defina os dados a serem enviados no corpo da solicitação
    const data = { idProd };


    return this.httpClient
      .post<CartItemResponse>(`http://localhost:3334/cart/${user_id}`, data)
      .pipe(
        tap((response) => {
          if (response) {
            this.messageS.showSuccessMessage('Item adicionado ao carrinho');
          } else {
            this.messageS.showErrorMessage(
              'Erro desconhecido ao adicionar item ao carrinho'
            );
          }
        }),
        catchError((error) => {
          let errorMessage =
            'Erro ao adicionar item ao carrinho. Por favor, tente novamente mais tarde.';
          if (error && error.error && error.error.message) {
            errorMessage = error.error.message;
          }
          this.messageS.showErrorMessage(errorMessage);
          return throwError(error);
        })
      );
  }

  getCart(user_id: string): Observable<CartItemResponse> {
    // Verificar se user_id é válido
    if (user_id === "null") {
      // Retorna um Observable vazio, já que o user_id não está disponível
      return EMPTY;
    }
    
    // Caso contrário, fazer a chamada HTTP para recuperar o carrinho do usuário
    return this.httpClient.get<CartItemResponse>(
      `http://localhost:3334/cart/${user_id}`
    );
  }
  
}
