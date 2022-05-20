import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-featured-product-main',
  templateUrl: './featured-product-main.component.html',
  styleUrls: ['./featured-product-main.component.scss'],
})
export class FeaturedProductMainComponent implements OnInit {
  product: string = 'ZX9 Speaker';

  constructor(public productService: ProductService) {}

  ngOnInit(): void {}

  setProduct() {
    this.productService.clickedProduct = this.product;
  }
}
