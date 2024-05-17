import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServicesService } from 'src/app/services/auth-services.service';
import { MessageServiceService } from 'src/app/services/message-service.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  userEmail: string = '';
  userPassword: string = '';

  constructor(private authService: AuthServicesService, private router: Router, private messageS: MessageServiceService) { }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  login(): void {
    this.authService.loginAdmin(this.userEmail, this.userPassword)
      .subscribe(response => {
        
      }, error => {
        console.error('Erro ao fazer login:', error);
          this.messageS.showErrorMessage("Não foi possível logar agora, tente novamente mais tarde");
      });
  }

}
