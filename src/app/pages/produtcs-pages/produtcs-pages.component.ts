import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtcs-pages',
  templateUrl: './produtcs-pages.component.html',
  styleUrls: ['./produtcs-pages.component.css']
})
export class ProdutcsPagesComponent implements OnInit {

  produtos: any;
  categoria: String = "";
  constructor(
    private route: ActivatedRoute,
    private produtosS: ProdutosService
  ) {}

  ngOnInit(): void {
    const category = String(this.route.snapshot.paramMap.get('category'));

    category ==  "feminina" ? this.categoria = "Moda Feminina" : null;
    category ==  "masculina" ? this.categoria = "Moda Masculina" : null;
    category == "acessorios" ? this.categoria = "Acessórios" : null;
    category == "tenis" ? this.categoria = "Tênis" : null;

    this.produtosS.getProdutosPorCategoria(category).subscribe((item)=> {
      this.produtos = item;
    });
  }
}
