import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServicesService } from 'src/app/services/auth-services.service';
import { EnderecoService } from 'src/app/services/endereco.service';

@Component({
  selector: 'app-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.css']
})
export class DeliveryFormComponent implements OnInit, OnChanges {
  addEndereco = false;
  enderecoForm: FormGroup;
  user_id!: string;
  hasAdd: boolean = false;
  address: any | null = null;

  constructor(
    private fb: FormBuilder,
    private AuthS: AuthServicesService,
    private router: Router,
    private enderecoService: EnderecoService
  ) {
    this.enderecoForm = this.fb.group({
      endereco: ['', Validators.required],
      bairro: ['', Validators.required],
      numero: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      cep: ['', Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getUserAdd();
  }

  ngOnInit(): void {
    this.user_id = String(this.AuthS.checkUserId());
    this.getUserAdd();
  }

  getUserAdd(): void {
    this.enderecoService.getUserEndereco(this.user_id).subscribe((response) => {
      if (response && response.length > 0) {
        this.hasAdd = true;
        this.address = response[0];
      } else {
        this.hasAdd = false;
        this.address = null; // Certifique-se de limpar o endereço se não houver nenhum
      }
    });
  }

  addForm(): void {
    this.addEndereco = !this.addEndereco;
  }

  onSubmit(): void {
    if (this.enderecoForm.valid) {
      this.enderecoService.addEndereco(this.user_id, this.enderecoForm.value).subscribe(
        response => {
          console.log('Endereço adicionado com sucesso:', response);
          this.getUserAdd(); // Atualiza a lista de endereços após adicionar
          this.addEndereco = false; // Fecha o formulário após adicionar
        },
        error => {
          console.error('Erro ao adicionar endereço:', error);
        }
      );
    }
  }

  deleteAddresses(): void {
    if (this.address && this.address._id) {
      this.enderecoService.deleteUserEndereco(this.address._id).subscribe(
        () => {
          console.log('Endereço removido com sucesso');
          this.getUserAdd(); // Atualiza a lista de endereços após remover
        },
        error => {
          console.error('Erro ao remover endereço:', error);
        }
      );
    }
  }
}
