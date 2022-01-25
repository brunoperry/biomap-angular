import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { SiteModel } from 'src/models/site.model';
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
      isReady: false
    },
    {
      id: 1,
      title:'edit information',
      isReady: false
    },
    {
      id: 2,
      title:'edit contacts',
      isReady: true
    },
    {
      id: 3,
      title:'edit media',
      isReady: true
    },
    {
      id: 4,
      title:'review',
      isReady: true
    }
  ];
  currIndex:number=0;

  detailID:string = '';
  private context:string = 'new';

  disableNext:boolean = true;
  siteData:SiteModel = new SiteModel();
  isEnd:boolean = false;

  siteEditForm:FormGroup = new FormGroup({})

  constructor(private siteService:SiteService, private route:ActivatedRoute) { 
    document.documentElement.style.setProperty('--num-steps', this.steps.length.toString());

    this.siteEditForm = new FormGroup({
      coordinates: new FormControl(''),
      mapImg: new FormControl(''),
      title: new FormControl(''),
      description: new FormControl(''),
      type: new FormControl(''),
      address: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      website: new FormControl(''),
      facebook: new FormControl(''),
      instagram: new FormControl(''),
      twitter: new FormControl(''),
      media: new FormControl('')
    })

    this.route.params.subscribe((params:Params) => {
      this.detailID = params['index'];
      if(this.detailID) this.context = 'edit';
    })
  }

  ngOnInit(): void {
    if(!this.detailID) {
        this.initializeForm();
    } else if(this.siteService.getSites().length === 0) {
      this.siteService.sitesChangedEvent.subscribe((sites:SiteModel[]) => {
        this.initializeForm(this.siteService.getSiteById(this.detailID))
        
      })
    } else {
      this.initializeForm(this.siteService.getSiteById(this.detailID))
    }
    this.initialized = true;
  }

  initializeForm(formData:SiteModel = new SiteModel()):void {

        // console.log('lij',formData);
    this.siteData = formData;

    this.siteEditForm.patchValue({
      coordinates: this.siteData.coordinates,
      mapImg: this.siteData.mapImg,
      title: this.siteData.title,
      description: this.siteData.description,
      type: this.siteData.type,
      phone: this.siteData.phone,
      address: this.siteData.address,
      email: this.siteData.email,
      website: this.siteData.website,
      facebook: this.siteData.facebook,
      instagram: this.siteData.instagram,
      twitter: this.siteData.twitter,
      media: this.siteData.media
    })

    if(this.siteData.title) this.steps[0].isReady = this.steps[1].isReady = true;
  }

  async submitSite():Promise<void> {
    

    if(this.context === 'edit') {
      return await this.siteService.updateSite(this.siteEditForm.value as SiteModel);
    } else {
      return await this.siteService.addSite(this.siteEditForm.value as SiteModel);
    }
  }

  onPrevClick():void {
    this.currIndex--;
    this.isEnd = this.currIndex >= this.steps.length - 1;
  }
  async onNextClick() {

    if(this.isEnd) {
      return await this.submitSite(); 
    } else {
      this.currIndex++;
      this.isEnd = this.currIndex >= this.steps.length - 1;
    }
  }

  onStep1Change(event:any):void {

    this.siteEditForm.patchValue({
      coordinates: event.coordinates,
      mapImg: event.mapImg
    })
    this.siteEditForm.get('coordinates')?.value ? this.currentStep.isReady = true : this.currentStep.isReady = false;
    this.siteData = this.siteEditForm.value;
  }
  onStep2Change(event:any, type:string):void {
    this.siteEditForm.value[type] = event.target.value;
    const titleData = this.siteEditForm.get('title')?.value;
    const descData = this.siteEditForm.get('description')?.value;
    const typeData = this.siteEditForm.get('type')?.value;
    titleData && descData && typeData ? this.currentStep.isReady = true : this.currentStep.isReady = false;

    this.siteData = this.siteEditForm.value;
  }

  onStep3Change(event:any, type:string):void {
    this.siteEditForm.value[type] = event.target.value;

    this.siteData = this.siteEditForm.value;
  }

  onStep4Change(data:any):void {
    console.log('step4 change, deal with media', data);

    this.siteData = this.siteEditForm.value;
  }

  get currentStep():any {
    return this.steps[this.currIndex];
  }
}
