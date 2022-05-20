import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'audiophile';
  checkout: boolean = false;

  constructor(public router: Router) {}

  ngDoCheck(): void {
    if (this.router.url === '/checkout') {
      this.checkout = true;
    } else {
      this.checkout = false;
    }
  }
}
