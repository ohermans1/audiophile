import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cartHandler.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  vat: number = Math.round(this.cartService.totalCost * 0.2);
  total: number = Math.round(this.cartService.totalCost + 50);
  cash: boolean = true;
  showPopup: boolean = false;

  goBack() {
    history.back();
  }

  recieveValue(value: string) {
    if (value === 'Cash') {
      this.cash = true;
    } else {
      this.cash = false;
    }
  }

  numberWithCommas(value: number) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  checkout() {
    this.showPopup = true;
  }
  constructor(public cartService: CartService) {}

  ngOnInit(): void {}
}
