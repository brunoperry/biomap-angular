import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'biomap';
  hideAddButton:boolean = true;
  isMenuOpen:boolean = false;

  constructor(private router:Router) {

    this.router.events.subscribe((ev: any) => {
      if(ev instanceof NavigationEnd) {
        this.hideAddButton = ev.url.includes('site-add');
      }
    });
  }

  onAddClick() {
    this.isMenuOpen = false;
    this.router.navigate(['/site-add/'])
  }
}
