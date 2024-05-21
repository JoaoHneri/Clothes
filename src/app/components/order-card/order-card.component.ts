import { Component, Input, OnInit } from '@angular/core';
import { OrderPayment } from 'src/app/interfaces/OrderPayment';
import { AuthServicesService } from 'src/app/services/auth-services.service';
import { MessageServiceService } from 'src/app/services/message-service.service';
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
  @Input() codeRastreio?: string | null;
  btnText!: string | null;
  apiUrl = environment.apiUrl;
  OrderPayment!: OrderPayment;
  code: string = "noCode";

  constructor(
    private authS: AuthServicesService,
    private prodPay: ProdPaymentsService,
    private messageS: MessageServiceService,

  ) {}

  ngOnInit(): void {
    const userId = String(this.authS.checkUserId());
    console.log(this.statusBtn);  
    switch (this.statusBtn) {
      case 'Aguardando Pagamento':
        this.btnText = 'Efetuar Pagamento';
        break;
      case 'Enviado':
        this.btnText = 'Confirmar Entrega';
        break;
      case 'Aguardando Envio':
        this.btnText = 'Aguarde o Envio';
        break;
      case 'Concluído':
        this.btnText = 'Concluído';
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

  transformCode(){
    if(this.code === "noCode"){
      this.code = "seeCode";
    }else{
      this.code = "noCode";
    }
  }

  copyCode(){
    navigator.clipboard.writeText(String(this.codeRastreio))
    this.messageS.showSuccessMessage("Rastreio Copiado")
    this.transformCode();
  }

  handleButtonClick(): void {
    if (this.btnText === 'Efetuar Pagamento') {
      this.goToPay();
    } else if (this.btnText === 'Confirmar Entrega') {
      this.confirmPay(this._id);
      alert("Entrega COnfirmada")
    }
  }
  

  confirmPay(_id: string): void {
    this.prodPay.concludPay(_id).subscribe(()=>{
      window.location.reload();
    })
  }
}
