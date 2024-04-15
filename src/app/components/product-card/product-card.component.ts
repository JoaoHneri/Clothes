import { Component, Input, OnInit } from '@angular/core';
import { AuthServicesService } from 'src/app/services/auth-services.service';
import { MessageServiceService } from 'src/app/services/message-service.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() titulo: string ="";
  @Input() descricao: string = "";
  @Input() preco: string = "";
  isLoggedIn?: boolean;

  constructor(private authS: AuthServicesService, private messageS: MessageServiceService) { }
  
  ngOnInit(): void {
    this.authS.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  addCart(){
    if(this.isLoggedIn){
      null;
    }else{
      this.messageS.showErrorMessage('Logue primeiro para adicionar itens ao carrinho');
    }
  }

}
