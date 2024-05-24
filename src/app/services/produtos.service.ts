import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/product';
import { ProductReceiver } from '../interfaces/ProductReceiver';
import { MessageServiceService } from './message-service.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class ProdutosService {
  private ApiUrl = environment.apiUrl;
  
  constructor(private http: HttpClient, private messageS: MessageServiceService, private router: Router) { }

  getProdutosPorCategoria( categoria:String ): Observable<Product>{
    const Url = `${this.ApiUrl}products/category/${categoria.toLowerCase()}`
    return this.http.get<Product>(Url);
  }

  getProdutos():Observable<Product>{
    const Url = `${this.ApiUrl}products`
    return this.http.get<Product>(Url);
    
  }

  getProdutoPorId(idProd: String): Observable<Product>{
    const Url = `${this.ApiUrl}products/${idProd}`
    return this.http.get<Product>(Url);
  }


  addProduto(formData: FormData): Observable<ProductReceiver> {
    const url = `${this.ApiUrl}products`;
    return this.http.post<ProductReceiver>(url, formData).pipe(tap((response)=>{
      if(response){
        this.messageS.showSuccessMessage("Produto adicionado com sucesso!");
        this.router.navigate(['/dashboard']);
      }else{
        this.messageS.showErrorMessage("Erro desconhecido ao adicionar produto!");
      }
    }))
  }
  updateProduto(id: string, formData: FormData): Observable<any> {
    const url = `${this.ApiUrl}products/${id}`;
    return this.http.put<any>(url, formData).pipe(
      tap((response) => {
        if (response) {
          this.messageS.showSuccessMessage("Produto atualizado com sucesso!");
          this.router.navigate(['/dashboard']);
        } else {
          this.messageS.showErrorMessage("Erro desconhecido ao atualizar produto!");
        }
      })
    );
  }

  deleteItem(_id: String): Observable<any> {

    const url = `${this.ApiUrl}products/${_id}`;
    return this.http.delete<any>(url).pipe(tap((response)=>{
      this.messageS.showSuccessMessage("Produto Deletado");
      setTimeout(()=>{
        window.location.reload();
      },2000)
      
    }));
    
  }

  
  
}