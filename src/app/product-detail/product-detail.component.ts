import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cartHandler.service';
import { Product } from '../shared/product.model';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  goBack() {
    history.back();
  }

  numberWithCommas(value: number) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  product!: Product;

  constructor(
    public productService: ProductService,
    public cartService: CartService
  ) {}

  ngOnInit(): void {
    this.product = this.productService.exportSingleProduct()[0];
  }
}
