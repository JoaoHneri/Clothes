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
  


  ngOnInit(): void {}


  
}
