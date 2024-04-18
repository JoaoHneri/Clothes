import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  component:String = "overview";

  constructor() { }

  showComponent(component: String){
    this.component = component;
  }

  ngOnInit(): void {
  }

}
