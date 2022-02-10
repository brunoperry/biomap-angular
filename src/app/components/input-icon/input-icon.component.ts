import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-icon',
  templateUrl: './input-icon.component.html',
  styleUrls: ['./input-icon.component.css'],
})
export class InputIconComponent implements OnInit {
  @Input() icon: string = '';
  @Input() iconFill: string = '';
  @Input() iconStroke: string = '';
  @Input() placeholder: string = '';

  @Output() onInputEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  onInput(val: any): void {
    this.onInputEvent.emit(val);
  }
}
