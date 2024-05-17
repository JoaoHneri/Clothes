import { Component, Input, OnInit } from '@angular/core';
import { OrderPayment } from 'src/app/interfaces/OrderPayment';
import { AuthServicesService } from 'src/app/services/auth-services.service';
import { ProdPaymentsService } from 'src/app/services/prod-payments.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css']
})
export class OrderCardComponent implements OnInit {
  @Input() prodImg!: string;
  @Input() prodName!: string;
  @Input() _id!: string;
  @Input() prodSize!: string;
  @Input() prodPrice!: number;
  @Input() prodQnt!: number;
  @Input() statusBtn!: string | null;
  btnText!: string | null;
  apiUrl = environment.apiUrl;
  OrderPayment!: OrderPayment;

  constructor(
    private authS: AuthServicesService,
    private prodPay: ProdPaymentsService
  ) {}

  ngOnInit(): void {
    const userId = String(this.authS.checkUserId());
    switch (this.statusBtn) {
      case 'Aguardando Pagamento':
        this.btnText = 'Efetuar Pagamento';
        break;
      case 'Enviado':
        this.btnText = 'Confirmar Entrega';
        break;
      case 'Aguardando Envio':
        this.btnText = 'Ver Rastreio';
        break;
    }

    this.OrderPayment = {
      title: this.prodName,
      quantity: this.prodQnt,
      unitPrice: this.prodPrice / this.prodQnt,
      _id: this._id,
      user_id: userId,
    };

    // Log the object directly
    console.log("Aqui está ", this.OrderPayment);

  }


  goToPay(){
    this.prodPay.addProdToPay(this.OrderPayment).subscribe()
  }
}
