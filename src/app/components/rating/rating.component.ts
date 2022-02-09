import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  @Input() rating: number = 0;
  @Input() showLabel: boolean = false;
  @Output() onRateChange = new EventEmitter();

  public color: string = '';
  public rates: string[] = ['', '', '', '', ''];
  constructor() {}

  ngOnInit(): void {
    this.setRate();
  }

  onStarClicked(value: number): void {
    this.rating = value;
    this.setRate();
    this.onRateChange.emit(value);
  }

  private setRate(): void {
    for (let i = 0; i < this.rates.length; i++) {
      if (i < this.rating) this.rates[i] = 'var(--yellow)';
      else this.rates[i] = 'var(--green-b)';
    }
  }
}