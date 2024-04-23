import { Component, Input, OnInit } from '@angular/core';
import { AuthServicesService } from 'src/app/services/auth-services.service';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { MessageServiceService } from 'src/app/services/message-service.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() titulo: string ="";
  @Input() descricao: string = "";
  @Input() preco: string = "";
  @Input() src: string = "";
  @Input() id: string = "";
  route: String = environment.apiUrl


  isAuthenticated= false;

  constructor(private authS: AuthServicesService, private messageS: MessageServiceService, private CartS: CartServiceService) { }
  
  ngOnInit(): void {
    this.authS.isAuthenticated$().subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
    });
  }

  addCart(){
    if(this.isAuthenticated){
      const userId = String(this.authS.checkUserId()) ;
      this.CartS.addCart(userId, this.id).subscribe()
    }else{
      this.messageS.showErrorMessage('Logue primeiro para adicionar itens ao carrinho');
    }
  }


}
