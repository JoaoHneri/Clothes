import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { AuthServicesService } from 'src/app/services/auth-services.service';
import { ProdutosService } from 'src/app/services/produtos.service';
import { environment } from 'src/environments/environment';
import { TotalPrice } from 'src/app/interfaces/TotalPrice';
import { CartItemResponse } from 'src/app/interfaces/cartItemResponse';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-card-cart',
  templateUrl: './card-cart.component.html',
  styleUrls: ['./card-cart.component.css']
})
export class CardCartComponent implements OnInit {
  @Input() item!: Product;
  route: string = environment.apiUrl;
  productPrice!: number;
  quantity: number = 1;

  constructor(private prodS: ProdutosService) { }


  ngOnInit(): void {
    this.productPrice = this.item.productPrice;
    }


  }
  


