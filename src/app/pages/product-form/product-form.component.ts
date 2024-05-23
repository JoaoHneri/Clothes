import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  productName: string = '';
  productPrice: number = 0;
  productSizes: string = '';
  productCategory: string = '';
  productDescription: string = '';
  productQuantity: number = 0;
  imageFile: File | null = null; // Alteração: Usando um tipo File para armazenar o arquivo
  imagePreview!: string | ArrayBuffer;

  constructor(private produtosService: ProdutosService) {}

  submitForm() {
    if (!this.imageFile) {
      console.error('Nenhum arquivo selecionado.');
      return;
    }
  
    const novoProduto: Product = {
      productName: this.productName,
      productPrice: this.productPrice,
      productSizes: this.productSizes.split(',').map(size => ({ size: size.trim() })),
      productCategory: this.productCategory,
      productDescription: this.productDescription,
      productQuantity: this.productQuantity,
      src: this.imageFile // Usando o arquivo diretamente como src
    };
    
    const formData = new FormData();
    formData.append('productName', novoProduto.productName);
    formData.append('productPrice', novoProduto.productPrice.toString());
    novoProduto.productSizes.forEach((size, index) => {
      formData.append(`productSizes[${index}][size]`, size.size); // Adicionando cada tamanho individualmente
    });
    formData.append('productCategory', novoProduto.productCategory);
    formData.append('productDescription', novoProduto.productDescription);
    formData.append('productQuantity', novoProduto.productQuantity.toString());
    formData.append('file', this.imageFile);
  
    this.produtosService.addProduto(formData).subscribe(
      (resposta:any) => {
        console.log('Novo produto adicionado:', resposta);
        // Aqui você pode realizar qualquer outra lógica após adicionar o produto
        // Por exemplo, limpar os campos do formulário
        this.limparCampos();
      },
      (erro: any) => {
        console.error('Erro ao adicionar produto:', erro);
      }
    );
  }
  
  onFileSelected(event: any) {
    this.imageFile = event.target.files[0];
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader!.result!;
    };
    reader.readAsDataURL(file);
  }


  limparCampos() {
    this.productName = '';
    this.productPrice = 0;
    this.productSizes = '';
    this.productCategory = '';
    this.productDescription = '';
    this.productQuantity = 0;
    this.imageFile = null;
  }
}
