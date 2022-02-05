import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnChanges {
  @Input() currentView: string = '';
  public isVisible: boolean = false;

  constructor() {}

  ngOnChanges() {
    this.isVisible = this.currentView !== 'add';
  }
}
