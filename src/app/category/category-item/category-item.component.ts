import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product.model';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
})
export class CategoryItemComponent implements OnInit {
  @Input() productInfo!: Product;
  @Input() count!: number;
  product: string = '';

  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.product = this.productInfo.header;
  }

  isEven() {
    if (window.innerWidth < 801) {
      return;
    }
    if (this.count % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  setProduct() {
    this.productService.clickedProduct = this.product;
  }
}
