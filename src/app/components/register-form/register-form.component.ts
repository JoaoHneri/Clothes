import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  @Output() switchComponent = new EventEmitter<string>();

  constructor() { }


  ngOnInit(): void {
  }

}
