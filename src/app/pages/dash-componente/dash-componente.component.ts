import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { AuthServicesService } from 'src/app/services/auth-services.service';


@Component({
  selector: 'app-dash-componente',
  templateUrl: './dash-componente.component.html',
  styleUrls: ['./dash-componente.component.css']
})
export class DashComponenteComponent implements OnInit {

  
  userId = String(this.admService.checkUserId());
  orders: number = 0;
  rent: number = 0;
  userName: string = '';
  usersLength: number = 0;
  totalOrders: number = 0;


  constructor(private admService: AdminService) {
   }

  ngOnInit(): void {
    this.admService.getUserAdmin(this.userId).subscribe((response)=>{
        this.orders = response.Orders;
        this.rent = response.Rent;
        this.userName = response.userName;
        this.usersLength = response.usersLength;
        this.totalOrders = response.totalOrders;
    })
  }
}


