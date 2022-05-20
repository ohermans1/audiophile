import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-might-like',
  templateUrl: './might-like.component.html',
  styleUrls: ['./might-like.component.scss'],
})
export class MightLikeComponent implements OnInit {
  relatedProduct: object[] = [
    {
      title: 'XX99 Mark II Headphones',
      url: './../../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg',
    },
    {
      title: 'XX99 Mark I Headphones',
      url: './../../../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg',
    },
    {
      title: 'XX59 Headphones',
      url: './../../../assets/product-xx59-headphones/desktop/image-product.jpg',
    },
    {
      title: 'ZX9 Speaker',
      url: './../../../assets/product-zx9-speaker/desktop/image-product.jpg',
    },
    {
      title: 'ZX7 Speaker',
      url: './../../../assets/product-zx7-speaker/desktop/image-product.jpg',
    },
    {
      title: 'YX1 Wireless Earphones',
      url: './../../../assets/product-yx1-earphones/desktop/image-product.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.relatedProduct.sort((a, b) => 0.5 - Math.random());
    this.relatedProduct = this.relatedProduct.slice(0, 3);
  }
}
