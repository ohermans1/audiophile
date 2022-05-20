import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-might-like-card',
  templateUrl: './might-like-card.component.html',
  styleUrls: ['./might-like-card.component.scss'],
})
export class MightLikeCardComponent implements OnInit {
  @Input() cardData!: any;
  product: string = '';
  routerLink!: string;

  constructor(public productService: ProductService, public router: Router) {}

  ngOnInit(): void {
    this.product = this.cardData.title;

    if (this.router.url === '/productDetail') {
      this.routerLink = 'productDetail1';
    } else {
      this.routerLink = 'productDetail';
    }
  }

  setProduct() {
    this.productService.clickedProduct = this.product;
  }
}
