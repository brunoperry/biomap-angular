import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnChanges {
  @Input() currentView: string = '';
  @Input() mainFill: string = 'var(--green-a)';
  public isVisible: boolean = false;

  constructor() {}

  ngOnChanges() {
    this.isVisible = this.currentView !== 'add';

    if (this.isVisible) {
      this.mainFill =
        this.currentView === 'search' ? 'var(--green-d)' : 'var(--green-a)';
    }
  }
}
