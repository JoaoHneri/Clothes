import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/product';


@Injectable({
  providedIn: 'root'
})

export class ProdutosService {
  private ApiUrl = environment.apiUrl;
  
  constructor(private http: HttpClient) { }

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
}