import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-action',
  templateUrl: './button-action.component.html',
  styleUrls: ['./button-action.component.css'],
})
export class ButtonActionComponent implements OnInit {
  @Input() text: string = '';
  @Input() icon: string = 'missing';
  @Input() iconSize: number = 18;
  @Input() iconFill: string = 'var(--pink)';
  @Input() iconStroke: string = 'var(--pink)';
  @Input() backgroundColor: string = 'var(--blue)';
  @Input() rotation: string = 'rotate(0deg)';

  constructor() {}

  ngOnInit(): void {
    console.log(this.icon);
  }
}
