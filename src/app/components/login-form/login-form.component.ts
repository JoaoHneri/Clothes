import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  @Output() closeModalEvent = new EventEmitter<boolean>();
  isRegisterModalOpen: boolean = true; 
  isLoginModalOpen: boolean = false; 

  constructor() { }

  setModal(type: string) {
    if (type === 'register') {
      this.isRegisterModalOpen = true;
      this.isLoginModalOpen = false;
    } else if (type === 'login') {
      this.isRegisterModalOpen = false;
      this.isLoginModalOpen = true;
    }
  }

  closeModal() {
    this.closeModalEvent.emit(true);
  }

}
