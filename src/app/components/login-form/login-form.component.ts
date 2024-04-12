import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  @Output() switchToRegisterEvent = new EventEmitter<void>();
  @Output() switchComponent = new EventEmitter<string>();

  constructor() { }



}
