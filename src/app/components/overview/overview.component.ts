import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServicesService } from 'src/app/services/auth-services.service';
import { ProdPaymentsService } from 'src/app/services/prod-payments.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export  class OverviewComponent implements OnInit {

  constructor(private authS: AuthServicesService,
    private Pay: ProdPaymentsService,
    private router: Router) { }
    prods: any[]| null = null;;
    selectedStatus: string | null = null;

  ngOnInit(): void {
    this.getByStatus("Aguardando Pagamento")
    this.selectedStatus = "Aguardando Pagamento"
  }

  getByStatus(status: string): void {
    const userId = String(this.authS.checkUserId());
    this.Pay.getProdutosPorStatus(userId, status).subscribe(
      res => {
        this.prods = res;
        console.log(res);
      },
      error => {
        console.error('Erro ao buscar produtos:', error);
        this.prods = null; // Define como null em caso de erro
      }
    );
  }

  selectStatus(status: string) {
    this.selectedStatus = status;
  }
}
