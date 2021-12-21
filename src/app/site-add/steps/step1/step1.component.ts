import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {

  form!: FormGroup;
  @Output() onChange:EventEmitter<number[]> = new EventEmitter<number[]>();

  constructor() { }

  ngOnInit(): void {
  }

  onMapChange(coords:number[] | undefined):void {
    this.onChange.emit(coords);
  }
}