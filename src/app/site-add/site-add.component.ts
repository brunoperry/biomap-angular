import { Component, OnInit } from '@angular/core';
import { SiteModel } from 'src/models/site.model';
import { BackendService } from 'src/services/backend.service';
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
      title:'set location',
      state: false
    },
    {
      id: 1,
      title:'information',
      state: false
    },
    {
      id: 2,
      title:'contacts',
      state: true
    },
    {
      id: 3,
      title:'media',
      state: true
    },
    {
      id: 3,
      title:'review',
      state: true
    }
  ];
  currIndex:number=0;
  disableNext:boolean = true;
  currentSiteData:SiteModel = new SiteModel();
  isEnd:boolean = false;
  currentThumbs:any[] = [];

  constructor(private siteService:SiteService, private backendService:BackendService) { 
    document.documentElement.style.setProperty('--num-steps', this.steps.length.toString());
  }

  ngOnInit(): void {
    this.initialized = true;
  }

  onPrevClick():void {
    this.currIndex--;
    this.isEnd = this.currIndex >= this.steps.length - 1;
  }
  onNextClick():void {
    if(this.isEnd) {
      this.siteService.addSite(this.currentSiteData);
      return;
    }

    this.currIndex++;
    this.isEnd = this.currIndex >= this.steps.length - 1;
  }

  onStep1Change(data:any):void {
    data ? this.currentStep.state = true : this.currentStep.state = false;
    this.currentSiteData.coords = data.coords;
    this.currentSiteData.mapImg = data.mapImg;
  }
  onStep2Change(data:any):void {

    if(!data) {
      this.currentStep.state = false;
      return;
    }

    this.currentSiteData = Object.assign({}, this.currentSiteData, data);
    this.currentStep.state = true;
  }

  onStep3Change(data:any):void {
    this.currentSiteData = Object.assign({}, this.currentSiteData, data);
    this.currentStep.state = true;
  }

  onStep4Change(change:any):void {

    switch (change.type) {
      case 'file':
        this.currentSiteData.media = change.data;
        break;
      case 'thumbnail':
        this.currentThumbs.push(change.data)
        break;
      case 'delete':
        this.currentThumbs.splice(change.index, 1);
        break;
      default:
        break;
    }
  }

  onStep5Change(data:any):void {
    console.log('step5 change, just confirm..', data);
  }

  get currentStep():any {
    return this.steps[this.currIndex];
  }
}
