import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  @Input() rating: number = 0;
  @Input() showLabel: boolean = false;
  @Input() starSize: number = 18;
  @Input() enabled: boolean = false;
  @Output() onRateChange = new EventEmitter();

  public color: string = '';
  public rates: string[] = ['', '', '', '', ''];

  private baseColor: string = 'var(--green-b)';
  constructor() {}

  ngOnInit(): void {
    if (this.enabled) this.baseColor = 'var(--green-a)';
    this.setRate();
  }

  onStarClicked(value: number): void {
    this.rating = value;
    this.setRate();
    this.onRateChange.emit(value);
  }

  private setRate(): void {
    for (let i = 0; i < this.rates.length; i++) {
      if (this.rating === 0) {
        this.rates[i] = this.baseColor;
      } else {
        if (i < this.rating) this.rates[i] = 'var(--yellow)';
        else this.rates[i] = this.baseColor;
      }
    }
  }
}
