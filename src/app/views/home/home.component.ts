import { Component, OnInit } from '@angular/core';
import { Util } from 'src/app/utils';
import { SiteService } from 'src/services/site.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public sitesData: any[] = [];

  public filtersData: any[] = ['farm', 'restaurant', 'market', 'other'];

  public modeXPos: string = '0%';
  public isOverlay: boolean = false;

  constructor(private siteService: SiteService) {}

  ngOnInit(): void {
    this.sitesData = this.siteService.dummyData;
  }

  onHomeBarClick(action: any): void {
    switch (action) {
      case 'list':
        this.modeXPos = 'translateX(0%)';
        break;
      case 'map':
        this.modeXPos = 'translateX(-50%)';
        break;
      case 'filter':
        this.isOverlay = true;
        break;

      default:
        break;
    }
  }

  onButtonToggleClick(ev: any): void {
    console.log(ev);
  }

  onOverlayClick(): void {
    this.isOverlay = false;
  }
}
