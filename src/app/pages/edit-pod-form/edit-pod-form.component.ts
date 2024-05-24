import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { MessageServiceService } from 'src/app/services/message-service.service';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-edit-pod-form',
  templateUrl: './edit-pod-form.component.html',
  styleUrls: ['./edit-pod-form.component.css']
})
export class EditPodFormComponent implements OnInit {
  productName: string = '';
  productPrice: number = 0;
  productSizes: string = '';
  productCategory: string = '';
  productDescription: string = '';
  productQuantity: number = 0;
  imageFile: File | null = null;
  imagePreview!: string | ArrayBuffer;
  id!: string;

  constructor(private produtosService: ProdutosService, private route: ActivatedRoute, private messageS: MessageServiceService) {}

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('_id'));
    this.produtosService.getProdutoPorId(this.id).subscribe(data => {
      this.productName = data.productName;
      this.productPrice = data.productPrice;
      this.productSizes = data.productSizes.map(size => size.size).join(', ');
      this.productCategory = data.productCategory;
      this.productDescription = data.productDescription;
      this.productQuantity = data.productQuantity;
      
    });
  }

  submitForm() {
    const formData = new FormData();
    formData.append('productName', this.productName);
    formData.append('productPrice', this.productPrice.toString());
    this.productSizes.split(',').forEach((size, index) => {
      formData.append(`productSizes[${index}]`, size.trim());
    });
    formData.append('productCategory', this.productCategory);
    formData.append('productDescription', this.productDescription);
    formData.append('productQuantity', this.productQuantity.toString());
    if (this.imageFile) {
      formData.append('file', this.imageFile);
    }else{
      this.messageS.showErrorMessage("Adicione uma imagem")
    }
  
    this.produtosService.updateProduto(this.id, formData).subscribe(
      (resposta: any) => {
        console.log('Produto atualizado:', resposta);
        this.limparCampos();
      },
      (erro: any) => {
        console.error('Erro ao atualizar produto:', erro);
      }
    );
  }

  onFileSelected(event: any) {
    this.imageFile = event.target.files[0];
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result!;
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
    this.imagePreview = '';
  }
}
