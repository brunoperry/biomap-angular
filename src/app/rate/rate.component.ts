import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {
  @Input() rating: number | undefined = 0;
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

  onRateClick(i:number) :void {
    this.rating = i;
    console.log('fff', i);
    
    this.onChange.emit(i);
  }
  lessThan(valA:number):boolean {
    if(this.rating) return valA < this.rating;
    return false;
  }
}
