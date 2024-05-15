import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css']
})
export class OrderCardComponent implements OnInit {
    @Input() prodImg!: string;
    @Input() prodName!: string;
    @Input() prodSize!: string;
    @Input() prodPrice!: number;
    @Input() prodQnt!: number;
    @Input() statusBtn!: string | null;
    btnText!: string | null;
    apiUrl = environment.apiUrl

  constructor() { }

  ngOnInit(): void {
    switch(this.statusBtn){
      case 'Aguardando Pagamento':
        this.btnText = 'Efetuar Pagamento';
        break;
      case 'Enviado':
        this.btnText = 'Confirmar Entrega'
        break;
      case 'Aguardando Envio':
        this.btnText = 'Ver Rastreio'
        break;
    }
  }

}
