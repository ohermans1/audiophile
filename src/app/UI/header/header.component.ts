import { Component, DoCheck, HostListener, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/cartHandler.service';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, DoCheck {
  displayCart: boolean = this.cartService.displayCart;
  displayCounter: boolean = this.showCount();
  showMenu: boolean = false;

  @HostListener('window:click', ['$event'])
  toggleMenu(e: PointerEvent) {
    let className = (e.target as Element).className;
    if (className === 'header__menu') {
      this.showMenu = !this.showMenu;
    } else {
      this.showMenu = false;
    }
    if (
      className.includes('cart-popup') &&
      !className.includes('cart-popup__button')
    ) {
      return;
    }
    this.displayCounter = this.showCount();
    if (className === 'header__cart-img') {
      this.cartService.displayCart = !this.cartService.displayCart;
    } else {
      this.cartService.displayCart = false;
    }
  }

  linkClick(e: any) {
    this.productService.linkClicked(e.target.innerText);
  }

  showCount() {
    if (this.cartService.count > 0) {
      return true;
    } else {
      return false;
    }
  }

  showCart() {
    return this.displayCart;
  }

  constructor(
    public productService: ProductService,
    public cartService: CartService
  ) {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.displayCart = this.cartService.displayCart;
    this.displayCounter = this.showCount();
  }
}
