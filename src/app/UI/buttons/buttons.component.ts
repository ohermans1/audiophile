import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {
  @Input() class: string = '';
  @Input() content: string = '';
  @Input() arrowVisible = false;
  @Input() routerLink = '';
  @Input() product = '';

  constructor() {}

  ngOnInit(): void {
    window.scrollTo({ top: 0 });
  }
}
