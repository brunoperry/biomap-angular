import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
})
export class DateComponent implements OnInit {
  @Input() date: number = 0;
  public formatedDate: string = '';

  constructor() {}

  ngOnInit(): void {
    this.formatedDate = new Intl.DateTimeFormat('default', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(this.date);
  }
}
