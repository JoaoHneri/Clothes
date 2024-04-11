import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  click = false;
  
  constructor() { }

  clickHistory(): void {
    this.click = !this.click;
  }
  ngOnInit(): void {
  }

}
