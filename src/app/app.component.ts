import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BackendService } from 'src/services/backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'biomap';
  hideAddButton:boolean = true;
  isMenuOpen:boolean = false;

  constructor(private router:Router, private backendService:BackendService) {

    this.router.events.subscribe((ev: any) => {
      if(ev instanceof NavigationEnd) {
        this.hideAddButton = ev.url.includes('site-add') || ev.url.includes('site-edit');
      }
    });

    this.backendService.fetchData();
  }

  onAddClick() {
    this.isMenuOpen = false;
    this.router.navigate(['/site-add/'])
  }
}
