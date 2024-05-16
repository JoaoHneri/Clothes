import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from 'src/app/services/produtos.service';
import { environment } from 'src/environments/environment';
import { ProductReceiver } from 'src/app/interfaces/ProductReceiver';
import { AuthServicesService } from 'src/app/services/auth-services.service';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { MessageServiceService } from 'src/app/services/message-service.service';
import { Renderer2 } from '@angular/core';

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
  isAuthenticated= false;
  mySrcId: string = "";

  constructor(private ProdS: ProdutosService, private route: ActivatedRoute, private authS: AuthServicesService, private CartS: CartServiceService, private messageS: MessageServiceService,private renderer: Renderer2) { }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.ProdS.getProdutoPorId(id).subscribe((prod) => {
      this.prod = prod;
      this.mySrcId = String(prod.src)
      this.precoUnitarioOriginal = prod.productPrice; // Armazena o preço unitário original
    });
    this.authS.isAuthenticated$().subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
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

  addCart() {
    if (this.produtoSelecionado === "") {
      const labels = document.querySelectorAll('.radio-label');
      labels.forEach(label => {
        label.classList.add('flash-border');
      });
      setTimeout(() => {
        labels.forEach(label => {
          label.classList.remove('flash-border');
        });
      }, 1000);
  
      this.messageS.showErrorMessage('Selecione uma opção de tamanho');
      return;
    }
  
    if (this.isAuthenticated) {
      const userId = String(this.authS.checkUserId());
      this.CartS.addCart(userId, this.prod._id!, this.prod.productName, this.prod.productPrice, this.produtoSelecionado, this.myQuantity, this.mySrcId).subscribe();
    } else {
      this.messageS.showErrorMessage('Logue primeiro para adicionar itens ao carrinho');
    }
  }
  


  
}
