import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { ScrollToTopService } from './services/scroll-to-top.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private scrollToTopService: ScrollToTopService){}
  ngOnInit(): void {
     this.scrollToTopService.enableScrollToTop();
    AOS.init()
  }
  title = 'Clothes-Angular';
}
