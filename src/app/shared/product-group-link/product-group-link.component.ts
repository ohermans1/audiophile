import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-group-link',
  templateUrl: './product-group-link.component.html',
  styleUrls: ['./product-group-link.component.scss'],
})
export class ProductGroupLinkComponent implements OnInit {
  linkClick(e: any) {
    this.productService.linkClicked(e);
  }

  products = [
    {
      heading: 'Headphones',
      imageURL: 'image-category-thumbnail-headphones',
    },
    {
      heading: 'Speakers',
      imageURL: 'image-category-thumbnail-speakers',
    },
    {
      heading: 'Earphones',
      imageURL: 'image-category-thumbnail-earphones',
    },
  ];

  constructor(public productService: ProductService) {}

  ngOnInit(): void {}
}
