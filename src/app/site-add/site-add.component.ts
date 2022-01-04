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
      this.backendService.saveData();
      return;
    }
    this.currIndex++;
    this.isEnd = this.currIndex >= this.steps.length - 1;
  }

  onStep1Change(coords:number[] | undefined):void {
    coords ? this.currentStep.state = true : this.currentStep.state = false;
    this.currentSiteData.coords = coords;
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

  onStep4Change(data:any):void {
    this.currentSiteData.images = data;
  }

  onStep5Change(data:any):void {
    console.log('step5 change, just confirm..', data);
  }

  get currentStep():any {
    return this.steps[this.currIndex];
  }
}
