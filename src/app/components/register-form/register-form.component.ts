import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServicesService } from 'src/app/services/auth-services.service';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  @Output() switchComponent = new EventEmitter<string>();
  @Output() registerSuccess = new EventEmitter<void>();
  registerForm!: FormGroup;

  constructor(private authService: AuthServicesService) { }

  
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      userPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  get userName(): string {
    return this.registerForm.get('userName')!.value;
  }

  get userEmail(): string {
    return this.registerForm.get('userEmail')!.value;
  }

  get userPassword(): string {
    return this.registerForm.get('userPassword')!.value;
  }


  async register(){
    const formData = new FormData();
    formData.append('userName', this.userName);
    formData.append('userEmail', this.userEmail);
    formData.append('userPassword', this.userPassword);
    
    await this.authService.register(formData).subscribe(() => {
      alert("User registration")
      this.registerSuccess.emit();
    });


  }

  

}
