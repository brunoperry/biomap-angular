import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.css'],
})
export class ButtonIconComponent implements OnInit {
  @Input() iconName: string = '';
  @Input() width: number = 32;
  @Input() height: number = 32;
  @Input() stroke: string = 'none';
  @Input() fill: string = 'none';

  @Input() image: string | null = null;

  constructor() {}

  ngOnInit(): void {}
}
