import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.css'],
})
export class ButtonToggleComponent implements OnInit {
  @Input() toggled: boolean = false;
  @Input() icon: string = '';
  @Input() text: string = 'no title';
  @Input() fontWeight: number = 500;

  @Output() onChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
    if (this.toggled) this.fontWeight = 700;
  }

  onClick(): void {
    this.toggled = !this.toggled;
    if (this.toggled) this.fontWeight = 700;
    else this.fontWeight = 500;

    this.onChange.emit({
      value: this.toggled,
      text: this.text,
    });
  }
}
