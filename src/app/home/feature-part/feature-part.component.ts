import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-feature-part',
  templateUrl: './feature-part.component.html',
  styleUrls: ['./feature-part.component.scss'],
})
export class FeaturePartComponent implements OnInit {
  product: string = 'YX1 Wireless Earphones';

  constructor(public productService: ProductService) {}

  ngOnInit(): void {}

  setProduct() {
    this.productService.clickedProduct = this.product;
  }
}
