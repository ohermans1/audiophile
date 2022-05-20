import { Component, DoCheck, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-category-header',
  templateUrl: './category-header.component.html',
  styleUrls: ['./category-header.component.scss'],
})
export class CategoryHeaderComponent implements OnInit, DoCheck {
  title: string = '';

  constructor(public productService: ProductService) {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.title = this.productService.clickedLink;
  }
}
