import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  click = false;
  showModal: boolean = false;
  isDropdownOpen: boolean = false;

  constructor() {}

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
  clickHistory(): void {
    this.click = !this.click;
  }
  

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selecionarOpcao(opcao: string) {
    console.log('Opção selecionada:', opcao);
    // Aqui você pode adicionar a lógica para lidar com a seleção da opção
  }

  ngOnInit(): void {}


  
}
