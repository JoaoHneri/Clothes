import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServicesService } from 'src/app/services/auth-services.service';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { ProdPaymentsService } from 'src/app/services/prod-payments.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  component:String = "delivery";
 
  constructor(private cartS: CartServiceService,
    private authS: AuthServicesService,
    private Pay: ProdPaymentsService,
    private router: Router) { }

  showComponent(component: String){
    this.component = component;
  }

  ngOnInit(): void {

  }

  


}
