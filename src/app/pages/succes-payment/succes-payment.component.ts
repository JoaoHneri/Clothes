import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdPaymentsService } from 'src/app/services/prod-payments.service';

@Component({
  selector: 'app-succes-payment',
  templateUrl: './succes-payment.component.html',
  styleUrls: ['./succes-payment.component.css']
})
export class SuccesPaymentComponent implements OnInit {
  user_id!: string;
  _id!: string;

  constructor(private route: ActivatedRoute, private prodPay: ProdPaymentsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.user_id = params['user_id'];
      this._id = params['_id'];
      // Verificar se user_id e _id existem e são válidos, e passá-los para a função
      if (this.user_id && this._id) {
        this.prodPay.updateBuyedProduct(this.user_id, this._id).subscribe(
          response => {
            // Faça algo com a resposta, se necessário
            console.log('Resposta do servidor:', response);
          },
          error => {
            console.error('Erro ao chamar a API:', error);
          }
        );
      } else {
        console.log('Parâmetros inválidos');
      }
    });
  }
}
