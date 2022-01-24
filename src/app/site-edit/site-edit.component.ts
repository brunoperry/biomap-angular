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

  disableNext:boolean = true;
  siteData:SiteModel = new SiteModel();
  isEnd:boolean = false;

  siteEditForm:FormGroup = new FormGroup({})

  constructor(private siteService:SiteService, private route:ActivatedRoute) { 
    document.documentElement.style.setProperty('--num-steps', this.steps.length.toString());

    this.route.params.subscribe(async (params:Params) => {

      const detailID = params['index'];
      if(!detailID) {
        this.initializeForm();
      } else if(this.siteService.getSites().length === 0) {
        this.siteService.sitesChangedEvent.subscribe((sites:SiteModel[]) => {
          this.initializeForm(this.siteService.getSiteById(detailID))
        })
      } else {
        this.initializeForm(this.siteService.getSiteById(detailID))
      }
    })
  }

  ngOnInit(): void {
    this.initialized = true;

    console.log('init', this.siteData);
    
  }

  initializeForm(formData:SiteModel = new SiteModel()):void {

    this.siteData = formData;

    // this.siteEditForm = new FormGroup({
    //   location: new FormGroup({
    //     coordinates: new FormControl(''),
    //     mapImg: new FormControl('')
    //   }),
    //   information: new FormGroup({
    //     title: new FormControl(''),
    //     description: new FormControl(''),
    //     type: new FormControl('')
    //   }),
    //   contacts: new FormGroup({
    //     address: new FormControl(''),
    //     phone: new FormControl(''),
    //     email: new FormControl(''),
    //     website: new FormControl(''),
    //     facebook: new FormControl(''),
    //     instagram: new FormControl(''),
    //     twitter: new FormControl('')
    //   }),
    //   media: new FormControl('')
    // })

    console.log(formData);
    


    this.siteEditForm = new FormGroup({
      location: new FormGroup({
        coordinates: new FormControl(formData.coords),
        mapImg: new FormControl(formData.mapImg)
      }),
      information: new FormGroup({
        title: new FormControl(formData.title),
        description: new FormControl(formData.description),
        type: new FormControl(formData.type)
      }),
      contacts: new FormGroup({
        address: new FormControl(formData.address),
        phone: new FormControl(formData.phone),
        email: new FormControl(formData.email),
        website: new FormControl(formData.website),
        facebook: new FormControl(formData.networks.facebook),
        instagram: new FormControl(formData.networks.instagram),
        twitter: new FormControl(formData.networks.twitter)
      }),
      media: new FormControl('')
    })
  }

  async submitSite():Promise<void> {

    console.log(this.siteData);

    const req = await this.siteService.updateSite(this.siteData);

    console.warn(req);
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
      location: {
        coordinates: event.coords.toString(),
        mapImg: event.mapImg
      }
    })

    this.siteEditForm.get('location.coordinates')?.value ? this.currentStep.isReady = true : this.currentStep.isReady = false;
  }
  onStep2Change(event:any, type:string):void {
    this.siteEditForm.value.information[type] = event.target.value;
    const infoData = this.siteEditForm.get('information')?.value;
    infoData.title && infoData.description && infoData.type ? this.currentStep.isReady = true : this.currentStep.isReady = false;
  }

  onStep3Change(event:any, type:string):void {
    this.siteEditForm.value.contacts[type] = event.target.value;
  }

  onStep4Change(data:any):void {
    console.log('step4 change, deal with media', data);
  }

  get currentStep():any {
    return this.steps[this.currIndex];
  }
}
