import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { swap } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [swap],
})
export class AppComponent {
  title = 'biomap';
  currentView: string = '';
  constructor(router: Router) {
    router.events
      .pipe(filter((e: any) => e instanceof NavigationEnd))
      .subscribe((ev: any) => {
        this.currentView = ev.url.split('/')[1];
      });
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
