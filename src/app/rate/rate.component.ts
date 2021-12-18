import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {
  @Input() rating?: number;
  @Input() enabled?: boolean;
  @Output() onChange = new EventEmitter();

  rates:number[] = [0,0,0,0,0];
  constructor() {}

  ngOnInit(): void {
    if(!this.rating) this.rating = 0;
    for (let i = 0; i < this.rates.length; i++) {
      if(this.rating > i) this.rates[i] = 1;   
    }
  }

  onRateClick(i:Number) :void {
    this.onChange.emit(i);
  }
}
