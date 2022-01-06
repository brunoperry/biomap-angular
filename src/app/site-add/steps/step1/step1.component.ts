import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {

  form!: FormGroup;
  @Input() siteData:any = null;
  @Output() onChange:EventEmitter<number[]> = new EventEmitter<number[]>();

  constructor() { }

  ngOnInit(): void {
    
  }

  onMapChange(mapData:any):void {

    this.onChange.emit(mapData);
  }
}
