import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent implements OnInit {
  @Input() class: string = 'input text-input__input';
  @Input() name!: string;
  @Input() type: string = 'text';
  constructor() {}

  lowerCase(input: string) {
    return input.toLowerCase();
  }

  ngOnInit(): void {}
}
