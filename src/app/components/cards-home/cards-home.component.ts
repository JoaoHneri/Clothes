import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-home',
  templateUrl: './cards-home.component.html',
  styleUrls: ['./cards-home.component.css']
})
export class CardsHomeComponent implements OnInit {
  @Input()title: String = '';
  @Input()src: String = '';
  constructor() { }

  ngOnInit(): void {
  }

}
