import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-cards',
  templateUrl: './category-cards.component.html',
  styleUrls: ['./category-cards.component.css']
})
export class CategoryCardsComponent implements OnInit {
  @Input() src!: string;
  @Input() title!: string;
  @Input() link!: string;
  @Input() category!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
