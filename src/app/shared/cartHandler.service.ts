import { Injectable, Output } from '@angular/core';
import { CartItem } from './cartItem.model';
import { ProductService } from './product.service';

@Injectable({ providedIn: 'root' })
export class CartService {
  displayCart: boolean = false;
  displayCount: boolean = false;
  items!: CartItem[];
  name!: string;
  count: number = 0;
  totalCost!: number;
  totalCartItems: number = 0;

  constructor(public productService: ProductService) {
    this.populateItems();
  }

  

  countTotal() {
    this.totalCartItems = 0;
    this.items.forEach((item) => {
      this.totalCartItems = this.totalCartItems + item.count;
    });
  }

  addData(items: any) {
    this.items.push(items);
  }

  addName(name: string) {
    this.name = name;
  }

  populateItems() {
    let tempList: CartItem[] = [];
    this.productService.products.forEach((product) => {
      let tempItem = new CartItem(
        false,
        0,
        product.cost,
        product.header,
        product.cartImage
      );
      tempList.push(tempItem);
    });
    this.items = tempList;
  }

  addToCart(name: string, count: number) {
    this.items.forEach((item) => {
      if (item.header === name) {
        item.count = count;
      }
    });
  }

  submitToCart(name: string) {
    this.items.forEach((item) => {
      if (item.header === name) {
        if (item.count > 0) {
          item.addedToCart = true;
        } else if (item.count === 0 || item.count === undefined) {
          item.addedToCart = false;
        }
      }
    });
  }
  sendCount = () => {
    this.items.forEach((item): any => {
      if (item.header === this.name) {
        this.count = item.count;
      }
    });
    return this.count;
  };

  removeFromCart(name: string) {
    if (name === 'all') {
      this.items.forEach((item) => {
        item.count = 0;
        item.addedToCart = false;
      });
      return;
    }
    this.items.forEach((item) => {
      if (item.header === name && item.count === 0) {
        item.addedToCart = false;
      }
    });
    return;
  }
}
