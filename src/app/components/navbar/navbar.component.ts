import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginFormComponent } from '../login-form/login-form.component';
import { AuthServicesService } from 'src/app/services/auth-services.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  click = false;
  showModal: boolean = false;
  isDropdownOpen: boolean = false;
  isLoggedIn?: boolean;
  userId:  string | null = null;


  constructor(private authS: AuthServicesService) {}

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
    this.authS.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });

    this.authS.userId$.subscribe((userId) => {
      this.userId = userId;
    });
  }

  logOut(){
    this.authS.logout();
  }
  
}
