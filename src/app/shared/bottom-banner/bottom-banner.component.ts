import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-banner',
  templateUrl: './bottom-banner.component.html',
  styleUrls: ['./bottom-banner.component.scss'],
})
export class BottomBannerComponent implements OnInit {
  image!: string;

  @HostListener('window:resize', ['$event'])
  responsiveImage() {
    if (window.innerWidth > 800) {
      this.image = './../../../assets/shared/desktop/image-best-gear.jpg';
    } else {
      this.image = './../../../assets/shared/tablet/image-best-gear.jpg';
    }
  }

  constructor() {
    this.responsiveImage();
  }

  ngOnInit(): void {}
}
