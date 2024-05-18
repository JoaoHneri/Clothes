import { Component, OnInit } from '@angular/core';
import { AuthServicesService } from 'src/app/services/auth-services.service';

@Component({
  selector: 'app-dash-componente',
  templateUrl: './dash-componente.component.html',
  styleUrls: ['./dash-componente.component.css']
})
export class DashComponenteComponent implements OnInit {
  userId = String(this.authService.checkUserId());
  orders: number = 0;
  rent: number = 0;
  userName: string = '';
  usersLength: number = 0;
  totalOrders: number = 0;
  constructor(private authService: AuthServicesService) { }

  ngOnInit(): void {
    this.authService.getUserAdmin(this.userId).subscribe((response)=>{
        this.orders = response.Orders;
        this.rent = response.Rent;
        this.userName = response.userName;
        this.usersLength = response.usersLength;
        this.totalOrders = response.totalOrders;
    })
  }
}


