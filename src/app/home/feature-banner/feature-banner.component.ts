import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-feature-banner',
  templateUrl: './feature-banner.component.html',
  styleUrls: ['./feature-banner.component.scss'],
})
export class FeatureBannerComponent implements OnInit {
  product: string = 'XX99 Mark II Headphones';

  constructor(public productService: ProductService) {}

  ngOnInit(): void {}

  setProduct() {
    this.productService.clickedProduct = this.product;
  }
}
