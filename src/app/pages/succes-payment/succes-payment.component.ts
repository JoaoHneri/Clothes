import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { MessageServiceService } from 'src/app/services/message-service.service';
import { ProdPaymentsService } from 'src/app/services/prod-payments.service';

@Component({
  selector: 'app-success-payment',
  templateUrl: './succes-payment.component.html',
  styleUrls: ['./succes-payment.component.css']
})
export class SuccesPaymentComponent implements OnInit {
  user_id!: string;
  _id!: string;

  constructor(
    private route: ActivatedRoute, 
    private prodPay: ProdPaymentsService, 
    private router: Router, 
    private messageS: MessageServiceService
  ) {
    // Prevent navigation back to this component
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (event.url === this.router.url) {
          this.router.navigate(['/some-other-page']);
        }
      }
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.user_id = params['user_id'];
      this._id = params['_id'];
      // Verificar se user_id e _id existem e são válidos, e passá-los para a função
      if (this.user_id && this._id) {
        this.prodPay.updateBuyedProduct(this.user_id, this._id).subscribe(
          response => {
            // Faça algo com a resposta, se necessário
            console.log('Resposta do servidor:', response);
          },
          error => {
            console.error('Erro ao chamar a API:', error);
          }
        );
      } else {
        console.log('Parâmetros inválidos');
      }
    });

    // Replace state to prevent back navigation
    window.history.replaceState({}, '', '/some-other-page');

    this.messageS.showSuccessMessage("Você Será Redirecionado Para Sua Página De Conta em Alguns Segundos...");
    setTimeout(() => {
      this.router.navigate([`/account/${this.user_id}`]);
    }, 10000);
  }

  @HostListener('window:beforeunload', ['$event'])
  handleBeforeUnload(event: Event): void {
    event.preventDefault();
    event.returnValue = false;
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'F5' || (event.ctrlKey && event.key === 'r')) {
      event.preventDefault();
    }
  }

  goToAccount(): void {
    this.router.navigate([`/account/${this.user_id}`]);
  }
}
