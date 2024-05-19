import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServicesService } from 'src/app/services/auth-services.service';
import { ProdPaymentsService } from 'src/app/services/prod-payments.service';
import { ProdutosService } from 'src/app/services/produtos.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-process',
  templateUrl: './product-process.component.html',
  styleUrls: ['./product-process.component.css']
})
export class ProductProcessComponent implements OnInit {

  produtos: any[] = [];
  selectedProduto: any;
  url = environment.apiUrl


  constructor(private produtosService: ProdPaymentsService,private router: Router  ) { }

  ngOnInit(): void {

    this.produtosService.getProdutosPorStatusSend("Aguardando Envio").subscribe(data => {
      this.produtos = data;
    });
  }

  selectProduto(produto: any): void {
    this.selectedProduto = produto;
  }

  sendToDelivery(_id: string): void {
    this.router.navigate([`sendProds/${_id}`])
  }

}
