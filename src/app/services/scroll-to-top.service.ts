import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrollToTopService {

  constructor(private router: Router) { }


  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

  enableScrollToTop(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.scrollToTop();
      }
    });
}
}
