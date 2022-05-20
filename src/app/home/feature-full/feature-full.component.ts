import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-feature-full',
  templateUrl: './feature-full.component.html',
  styleUrls: ['./feature-full.component.scss'],
})
export class FeatureFullComponent implements OnInit {
  product: string = 'ZX7 Speaker';

  constructor(public productService: ProductService) {}

  ngOnInit(): void {}

  setProduct() {
    this.productService.clickedProduct = this.product;
  }
}
