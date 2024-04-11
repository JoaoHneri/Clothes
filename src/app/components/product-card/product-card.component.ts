import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() titulo: string ="";
  @Input() descricao: string = "";
  @Input() preco: string = "";
  constructor() { }
  
  ngOnInit(): void {
    

  }

}
