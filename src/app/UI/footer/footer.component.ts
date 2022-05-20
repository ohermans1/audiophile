import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  linkClick(e: any) {
    this.productService.linkClicked(e.target.innerText);
  }

  constructor(public productService: ProductService) {}

  ngOnInit(): void {}
}
