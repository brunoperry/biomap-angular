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
  private rawSitesData:SiteModel[] = [];
  mapsData:any[] = [];
  initialized:boolean = false;
  isFiltersOpen:boolean = false;

  constructor(private siteListService:SiteService, private router:Router) { }

  ngOnInit():void {
    this.rawSitesData = this.siteListService.getSites();
    this.sitesData = this.rawSitesData;
    this.mapsData = this.siteListService.getMapData();
    this.initialized = true;
  }

  onModeClick(mode:string):void {
    this.currentMode = mode;
  }
  onFilterClick():void {
    this.isFiltersOpen = true;
  }
  onFilterTypeClick(type:string):void {

    const filterData:SiteModel[] = this.rawSitesData.filter(s=>s.type===type);
    filterData.length > 0 ? this.sitesData = filterData : this.sitesData = this.rawSitesData;
    this.mapsData = this.siteListService.getFilterMapData(this.sitesData);
    this.isFiltersOpen = false;
  }
  onFilterBackgroundClick():void{
    this.isFiltersOpen = false;
  }

  onCardClick(cardID:number):void {
    this.router.navigate(['/site-detail/', cardID]);
  }
}
