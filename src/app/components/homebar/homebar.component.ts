import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homebar',
  templateUrl: './homebar.component.html',
  styleUrls: ['./homebar.component.css'],
})
export class HomebarComponent implements OnInit {
  public currentMode: string = 'list';

  public isFilter: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onModeClick(type: string): void {
    if (type !== 'filter') {
      this.currentMode = type;
      this.isFilter = false;
    } else {
      this.isFilter = true;
    }
  }

  openFilterMenu(): void {}
  closeFilterMenu(): void {}
}
