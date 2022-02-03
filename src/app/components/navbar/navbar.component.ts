import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public currentView: string = 'home';
  public initialized: boolean = false;
  constructor(location: Location, router: Router) {
    router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentView = location.path().replace('/', '');
        console.log(this.currentView);
      });
  }

  ngOnInit(): void {
    // this.currentView = location.path().replace('/', '');
    // console.log(val);
  }

  onButtonClick(type: string): void {
    this.currentView = type;
    switch (type) {
      case 'home':
        break;
      case 'search':
        break;
      case 'add':
        break;
      case 'profile':
        break;
    }
  }
}
