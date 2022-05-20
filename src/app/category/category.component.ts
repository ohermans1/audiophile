import { Component, DoCheck, OnInit } from '@angular/core';
import { Product } from '../shared/product.model';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit, DoCheck {
  products!: Product[];

  constructor(public productService: ProductService) {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.products = this.productService.exportProducts();
  }
}
