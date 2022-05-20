import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/cartHandler.service';

@Component({
  selector: 'app-checkout-popup',
  templateUrl: './checkout-popup.component.html',
  styleUrls: ['./checkout-popup.component.scss'],
})
export class CheckoutPopupComponent implements OnInit {
  constructor(public cartService: CartService) {}

  ngOnInit(): void {}
}
