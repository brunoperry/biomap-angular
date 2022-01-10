import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SiteModel } from 'src/models/site.model';
import { BackendService } from 'src/services/backend.service';
import { SiteService } from 'src/services/site.service';


@Component({
  selector: 'app-site-edit',
  templateUrl: './site-edit.component.html',
  styleUrls: ['./site-edit.component.css']
})
export class SiteEditComponent implements OnInit {
  initialized:boolean = false;
  steps:any[] = [
    {
      id: 0,
      title:'edit location',
      state: true
    },
    {
      id: 1,
      title:'edit information',
      state: true
    },
    {
      id: 2,
      title:'edit contacts',
      state: true
    },
    {
      id: 3,
      title:'edit media',
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

  constructor(private siteService:SiteService, private route:ActivatedRoute, private backendService:BackendService) { 
    document.documentElement.style.setProperty('--num-steps', this.steps.length.toString());
  }

  ngOnInit(): void {

    this.route.params.subscribe((params:Params) => {
      if(params['index']) {
        this.currentSiteData = this.siteService.getSiteById(params['index']);
      }
    })
    this.initialized = true;
  }

  onPrevClick():void {
    this.currIndex--;
    this.isEnd = this.currIndex >= this.steps.length - 1;
  }
  async onNextClick() {

    if(this.isEnd) {
      return await this.siteService.updateSite(this.currentSiteData);
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
    console.log('step4 change, deal with media', data);
  }

  onStep5Change(data:any):void {
    
    console.log('step5 change, just confirm..', data);
  }

  get currentStep():any {
    return this.steps[this.currIndex];
  }
}
