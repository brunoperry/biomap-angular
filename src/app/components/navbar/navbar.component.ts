import { Location } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { PreviousRouteService } from 'src/services/previous-route.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnChanges {
  @Input() currentView: string = '';
  @Input() mainFill: string = 'var(--green-a)';
  public isVisible: boolean = false;
  public isBack: boolean = false;

  private isInitialized: boolean = false;

  constructor(
    private location: Location,
    private previousRoute: PreviousRouteService
  ) {}

  onBackClick(): void {
    this.location.back();
  }

  ngOnInit(): void {}
  ngOnChanges() {
    this.isVisible = this.currentView !== 'add';

    if (!this.isInitialized || !this.previousRoute.getPreviousUrl()) {
      this.isBack = false;
      this.isInitialized = true;
    } else {
      this.currentView === 'home'
        ? (this.isBack = false)
        : (this.isBack = true);
    }
    console.log(this.isBack, this.previousRoute.getPreviousUrl());

    if (this.isVisible) {
      this.mainFill =
        this.currentView === 'search' ? 'var(--green-d)' : 'var(--green-a)';
    }
  }
}
