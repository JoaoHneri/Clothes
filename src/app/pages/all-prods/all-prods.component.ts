import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-all-prods',
  templateUrl: './all-prods.component.html',
  styleUrls: ['./all-prods.component.css']
})
export class AllProdsComponent implements OnInit {
  produtos!: any;
  constructor(private produtoS: ProdutosService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.produtoS.getProdutos().subscribe(data => {
      this.produtos = data;
      console.log(this.produtos)
    })
  }

  changeEvent(event: any) {
    this.getData();
    console.log(event);
  }
}
