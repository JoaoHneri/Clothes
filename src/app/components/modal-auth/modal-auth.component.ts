import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-modal-auth',
  templateUrl: './modal-auth.component.html',
  styleUrls: ['./modal-auth.component.css']
})
export class ModalAuthComponent implements OnInit {
  @Output() closeModalEvent = new EventEmitter<boolean>();

  currentComponent = 'login';

  constructor(){
  }

  ngOnInit(): void {
  }

  switchComponent(componentName: string) {
    this.currentComponent = componentName;
  }
  closeModal() {
    this.closeModalEvent.emit(true);
  }
}
