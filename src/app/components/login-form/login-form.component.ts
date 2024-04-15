import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServicesService } from 'src/app/services/auth-services.service';
import { MessageServiceService } from 'src/app/services/message-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{

  @Output() switchToRegisterEvent = new EventEmitter<void>();
  @Output() switchComponent = new EventEmitter<string>();
  @Output() loginSuccess = new EventEmitter<void>();

  loginForm!: FormGroup;

  constructor(private authService: AuthServicesService, private messageS: MessageServiceService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      userPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  get userEmail(): string {
    return this.loginForm.get('userEmail')!.value;
  }

  get userPassword(): string {
    return this.loginForm.get('userPassword')!.value;
  }

  async login(){
    const formData = new FormData();
    formData.append('userEmail', this.userEmail);
    formData.append('userPassword', this.userPassword);
    
    await this.authService.login(formData).subscribe(() => {
      this.loginSuccess.emit(); 
    });
  }

}
  

