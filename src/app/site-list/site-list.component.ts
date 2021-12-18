import { Component, OnInit } from '@angular/core';
import { SiteModel } from 'src/models/site.model';
import { SiteService } from 'src/services/site.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.css']
})
export class SiteListComponent implements OnInit {

  currentMode:string = 'list';
  sitesData:SiteModel[] = [];
  mapsData:any[] = [];
  initialized:boolean = false;

  constructor(private siteListService:SiteService, private router:Router) { }

  ngOnInit():void {
    this.sitesData = this.siteListService.getSites();
    this.mapsData = this.siteListService.getMapData();
    this.initialized = true;
  }

  onModeClick(mode:string):void {
    this.currentMode = mode;
  }
  onFilterClick():void {
    console.log('lkqjd')
  }

  onCardClick(cardID:number):void {
    this.router.navigate(['/site-detail/', cardID]);
  }
}
