import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/cartHandler.service';

@Component({
  selector: 'app-count-input',
  templateUrl: './count-input.component.html',
  styleUrls: ['./count-input.component.scss'],
})
export class CountInputComponent implements OnInit {
  itemCount: number;
  @Input() header!: string;

  constructor(public cartService: CartService, public router: Router) {
    this.itemCount = this.cartService.sendCount();
  }

  @HostListener('window:click', ['$event'])
  toggleMenu(e: PointerEvent) {
    let className = (e.target as Element).className;
    if (className.includes('addcart')) {
      this.itemCount = this.cartService.sendCount();
    }
  }

  ngOnInit(): void {
    this.cartService.addName(this.header);
  }

  ngDoCheck(): void {
    this.cartService.removeFromCart(this.header);
    this.itemCount = this.cartService.sendCount();
  }

  increaseCount() {
    this.itemCount++;
    this.cartService.addToCart(this.header, this.itemCount);
  }
  decreaseCount() {
    if (this.itemCount === 0) {
      return;
    }
    this.itemCount--;
    this.cartService.addToCart(this.header, this.itemCount);
  }
}
