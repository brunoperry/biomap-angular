import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-homebar',
  templateUrl: './homebar.component.html',
  styleUrls: ['./homebar.component.css'],
})
export class HomebarComponent implements OnInit {
  public currentMode: string = 'list';

  @Input() isFilter: boolean = false;
  @Output() homeBarEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onModeClick(type: string): void {
    if (type !== 'filter') {
      this.currentMode = type;
      this.isFilter = false;
    } else {
      this.isFilter = true;
    }

    this.homeBarEvent.emit(type);
  }
}
