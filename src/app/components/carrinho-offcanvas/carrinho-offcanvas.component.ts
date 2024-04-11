import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-carrinho-offcanvas',
  templateUrl: './carrinho-offcanvas.component.html',
  styleUrls: ['./carrinho-offcanvas.component.css']
})
export class CarrinhoOffcanvasComponent implements OnInit {
  @Input() isClicked = false;
  @Output() isClickedChange = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  toggleOffCanvas() {
    this.isClicked = !this.isClicked;
    this.isClickedChange.emit(this.isClicked);
  }

  closeOffCanvas() {
    this.isClicked = false;
    this.isClickedChange.emit(this.isClicked);
  }
}
