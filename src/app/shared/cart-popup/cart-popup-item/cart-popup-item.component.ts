import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from '../../cartItem.model';

@Component({
  selector: 'app-cart-popup-item',
  templateUrl: './cart-popup-item.component.html',
  styleUrls: ['./cart-popup-item.component.scss'],
})
export class CartPopupItemComponent implements OnInit {
  @Input() item!: CartItem;
  @Input() displayCounter: boolean = true;
  @Input() classSmall = '';

  constructor() {}

  numberWithCommas(value: number) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  ngOnInit(): void {}
}
