import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  constructor() { }


   // Exibe uma mensagem de sucesso
   showSuccessMessage(message: string) {
    Swal.fire({
      icon: 'success',
      title: 'Sucesso',
      text: message,
      timer: 2000, // Tempo em milissegundos
      timerProgressBar: true,
      toast: true,
      position: 'top-end'
    });
  }

  // Exibe uma mensagem de erro
  showErrorMessage(message: string) {
    Swal.fire({
      icon: 'error',
      title: 'Erro',
      text: message,
      timer: 3000, // Tempo em milissegundos
      timerProgressBar: true,
      toast: true,
      position: 'top-end'
    });
  }

  // Exibe uma mensagem de confirmação
  showConfirmationMessage(message: string): Promise<boolean> {
    return Swal.fire({
      icon: 'question',
      title: 'Confirmação',
      text: message,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      return result.isConfirmed;
    });
  }

}
