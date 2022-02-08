import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor() {}

  public results: any[] = [];

  ngOnInit(): void {}

  onSearchInputChange(value: any): void {
    console.log(value.data);
  }
}
