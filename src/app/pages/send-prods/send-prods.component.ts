import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthServicesService } from 'src/app/services/auth-services.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-send-prods',
  templateUrl: './send-prods.component.html',
  styleUrls: ['./send-prods.component.css']
})
export class SendProdsComponent implements OnInit {
  _id!: string;
  url = environment.apiUrl
  constructor(private authS:AuthServicesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this._id = String(this.authS.checkUserId())
    const prod_id = this.route.snapshot.paramMap.get('_id');
  }

}
