import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServicesService } from 'src/app/services/auth-services.service';
import { EnderecoService } from 'src/app/services/endereco.service';
import { MessageServiceService } from 'src/app/services/message-service.service';
import { ProdPaymentsService } from 'src/app/services/prod-payments.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-send-prods',
  templateUrl: './send-prods.component.html',
  styleUrls: ['./send-prods.component.css'],
})
export class SendProdsComponent implements OnInit {
  _id!: string;
  url = environment.apiUrl;
  product: any;
  address: any;
  prod_id!: string;
  userid: string = '';
  urlApi: string = environment.apiUrl;
  codigoRastreio: string = '';

  constructor(
    private authS: AuthServicesService,
    private route: ActivatedRoute,
    private prodPay: ProdPaymentsService,
    private messageS: MessageServiceService,
    private Router: Router
  ) {}

  ngOnInit(): void {
    this._id = String(this.authS.checkUserId());
    this.prod_id = String(this.route.snapshot.paramMap.get('_id'));
    this.getProductDetails(this.prod_id);
  }

  async getProductDetails(productId: string | null): Promise<void> {
    if (productId) {
      this.prodPay.getProdutos(productId).subscribe((data) => {
        this.product = data.prod;
        this.address = data.address;
      });
    }
  }

  sendAndCode(): void {
    if (!this.codigoRastreio) {
      this.messageS.showErrorMessage("Digite o código de rastreio")
      return;
    }
    this.prodPay.sendAndCode(this.prod_id, String(this.codigoRastreio), this._id).subscribe(() => {
      setTimeout(()=>{
        this.Router.navigate(['/prodProcess'])
      }, 1400)
      this.codigoRastreio = ''; // Limpa o campo do código de rastreio após o envio bem-sucedido
    });
  }
}
