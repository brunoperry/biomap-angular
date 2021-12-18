import { Component, OnInit } from '@angular/core';
import { LatLng } from 'leaflet';
import { SiteModel } from 'src/models/site.model';
import { SiteService } from 'src/services/site.service';

@Component({
  selector: 'app-site-add',
  templateUrl: './site-add.component.html',
  styleUrls: ['./site-add.component.css']
})
export class SiteAddComponent implements OnInit {

  initialized:boolean = false;
  steps:any[] = [
    {
      id: 0,
      title:'select type',
      state: false
    },
    {
      id: 1,
      title:'set location',
      state: false
    },
    {
      id: 2,
      title:'info',
      state: false
    },
    {
      id: 3,
      title:'review',
      state: false
    }
  ];
  currIndex:number=0;
  disableNext:boolean = true;
  currentSiteData:SiteModel = new SiteModel();

  constructor(private siteService:SiteService) { }

  ngOnInit(): void {
    this.initialized = true;
  }

  onPrevClick():void {
    this.currIndex--;

  }
  onNextClick():void {
    this.currIndex++;
  }

  onStep1Click(type:string):void {
    this.currentStep.state = true;
    this.currentSiteData.type = type;
  }
  onStep2Change(coords:number[] | undefined) {
    coords ? this.currentStep.state = true : this.currentStep.state = false;
    this.currentSiteData.coords = coords;
  }

  get currentStep():any {
    return this.steps[this.currIndex];
  }
}
