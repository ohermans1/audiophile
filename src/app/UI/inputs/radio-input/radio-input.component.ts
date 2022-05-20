import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-radio-input',
  templateUrl: './radio-input.component.html',
  styleUrls: ['./radio-input.component.scss'],
})
export class RadioInputComponent implements OnInit {
  @Input() type!: string;

  @Output() sendValue = new EventEmitter();
  constructor() {}

  onSelected() {
    this.sendValue.emit(this.type);
  }

  ngOnInit(): void {}
}
