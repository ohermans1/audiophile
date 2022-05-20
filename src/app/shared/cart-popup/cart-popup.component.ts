import {
  Component,
  DoCheck,
  HostListener,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CartService } from '../cartHandler.service';

@Component({
  selector: 'app-cart-popup',
  templateUrl: './cart-popup.component.html',
  styleUrls: ['./cart-popup.component.scss'],
})
export class CartPopupComponent implements OnInit, DoCheck {
  totalCartItems: number = 0;
  totalCost: number = 0;
  noCartItems = true;

  

  constructor(public cartService: CartService) {}
  ngOnInit(): void {}

  ngDoCheck(): void {
    setTimeout(() => {
      this.checkPrice();
    });
  }

  numberWithCommas(value: number) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  checkPrice() {
    let check = 0;
    let tempCost = 0;
    let cartItems = 0;
    this.cartService.items.forEach((item) => {
      if (item.count > 0) {
        tempCost = tempCost + item.count * item.cost;
        cartItems = cartItems + item.count;
        this.noCartItems = false;
        check++;
      }
    });
    if (check === 0) {
      this.noCartItems = true;
    }
    this.totalCost = tempCost;
    this.totalCartItems = cartItems;
    this.cartService.totalCost = tempCost;
  }
}
