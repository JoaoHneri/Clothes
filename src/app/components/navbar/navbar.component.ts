import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginFormComponent } from '../login-form/login-form.component';
import { AuthServicesService } from 'src/app/services/auth-services.service';
import { CarrinhoOffcanvasComponent } from '../carrinho-offcanvas/carrinho-offcanvas.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnChanges {
  click = false;
  showModal: boolean = false;
  isDropdownOpen: boolean = false;
  isAuthenticated = false;
  userId = this.authS.checkUserId();
  isAdmin!: boolean;
  isVisible = false;
  private CarrinhoOffcanvasComponet!: CarrinhoOffcanvasComponent;

  constructor(private authS: AuthServicesService) {}
  
  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.userId = this.authS.checkUserId();
  }

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

  ngOnInit(): void {
    this.authS.isAuthenticated$().subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
    });

    this.isAdmin = Boolean(sessionStorage.getItem('isAdmin'));
  }

  logOut(){
    this.authS.logout();
  }
  
}
