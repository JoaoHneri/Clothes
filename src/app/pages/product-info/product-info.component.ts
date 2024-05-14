import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  constructor() { }

  produto: any = {
    titulo: 'Camiseta Masculina',
    descricao: 'Descrição do produto...',
    preco: 49.99,
    tamanhos: ['P', 'M', 'G', 'GG'],
    quantidade: 1
  };

  ngOnInit(): void {
  }

  incrementarQuantidade(): void {
    this.produto.quantidade++;
    this.atualizarPreco();
  }

  decrementarQuantidade(): void {
    if (this.produto.quantidade > 1) {
      this.produto.quantidade--;
      this.atualizarPreco();
    }
  }

  atualizarPreco(): void {
    // Atualiza o preço multiplicando o preço unitário pela quantidade
    this.produto.preco = 49.99 * this.produto.quantidade;
  }

  adicionarAoCarrinho(): void {
    console.log('Produto adicionado ao carrinho:', this.produto);
  }
}
