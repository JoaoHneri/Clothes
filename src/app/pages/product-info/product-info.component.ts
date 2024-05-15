import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from 'src/app/services/produtos.service';
import { environment } from 'src/environments/environment';
import { ProductReceiver } from 'src/app/interfaces/ProductReceiver';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  prod!: ProductReceiver;
  url = environment.apiUrl;
  precoUnitarioOriginal: number = 0; // Armazena o preço unitário original
  produtoSelecionado: string = '';
  myQuantity: number = 1;

  constructor(private ProdS: ProdutosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.ProdS.getProdutoPorId(id).subscribe((prod) => {
      this.prod = prod;
      this.precoUnitarioOriginal = prod.productPrice; // Armazena o preço unitário original
    });
  }

  incrementarQuantidade(): void {
    if(this.myQuantity < this.prod.productQuantity)
    this.myQuantity++;
    this.atualizarPreco();
  }

  decrementarQuantidade(): void {
    if (this.myQuantity > 1) {
      this.myQuantity--;
      this.atualizarPreco();
    }
  }

  atualizarPreco(): void {
    // Atualiza o preço total usando o preço unitário original e a quantidade atual
    this.prod.productPrice = this.precoUnitarioOriginal * this.myQuantity;
    console.log(this.precoUnitarioOriginal)
  }

  adicionarAoCarrinho(): void {
    console.log('Produto adicionado ao carrinho:', this.prod.productQuantity);
  }
}
