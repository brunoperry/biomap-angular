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
  siteData:SiteModel = new SiteModel();
  isEnd:boolean = false;

  private context:string = 'edit';

  siteEditForm:FormGroup = new FormGroup({})

  constructor(private siteService:SiteService, private route:ActivatedRoute) { 
    document.documentElement.style.setProperty('--num-steps', this.steps.length.toString());

    this.route.params.subscribe(async (params:Params) => {

      const detailID = params['index'];
      if(!detailID) {
        this.context = 'new';
        this.siteEditForm = new FormGroup({
          location: new FormGroup({
            coordinates: new FormControl(''),
            mapImg: new FormControl('')
          }),
          information: new FormGroup({
            title: new FormControl(''),
            description: new FormControl(''),
            type: new FormControl('')
          }),
          contacts: new FormGroup({
            address: new FormControl(''),
            phone: new FormControl(''),
            email: new FormControl(''),
            website: new FormControl(''),
            networks: new FormGroup({
              facebook: new FormControl(''),
              instagram: new FormControl(''),
              twitter: new FormControl(''),
            }),
            media: new FormControl('')
          })
        })
        return;
      }
      let data:SiteModel | undefined;
      if(this.siteService.getSites().length === 0) {
        this.siteService.sitesChangedEvent.subscribe((sites:SiteModel[]) => {
          data = this.siteService.getSiteById(detailID);
          if(data) {
            this.siteData = data;
            this.siteEditForm = new FormGroup({
              location: new FormGroup({
                coordinates: new FormControl(data.coords)
              }),
              information: new FormGroup({
                title: new FormControl(data.title),
                description: new FormControl(data.description),
                type: new FormControl(data.type)
              }),
              contacts: new FormGroup({
                address: new FormControl(data.address),
                phone: new FormControl(data.phone),
                email: new FormControl(data.email),
                website: new FormControl(data.website),
                networks: new FormGroup({
                  facebook: new FormControl(data.networks.facebook),
                  instagram: new FormControl(data.networks.instagram),
                  twitter: new FormControl(data.networks.twitter),
                }),
                media: new FormControl(data.media)
              })
            })
          }
        })
      } else {
          data = this.siteService.getSiteById(detailID);
          if(data) {
            
            this.siteData = data;
            this.siteEditForm = new FormGroup({
              location: new FormGroup({
                coordinates: new FormControl(data.coords)
              }),
              information: new FormGroup({
                title: new FormControl(data.title),
                description: new FormControl(data.description),
                type: new FormControl(data.type)
              }),
              contacts: new FormGroup({
                address: new FormControl(data.address),
                phone: new FormControl(data.phone),
                email: new FormControl(data.email),
                website: new FormControl(data.website),
                networks: new FormGroup({
                  facebook: new FormControl(data.networks.facebook),
                  instagram: new FormControl(data.networks.instagram),
                  twitter: new FormControl(data.networks.twitter),
                }),
                media: new FormControl(data.media)
              })
            })
          }
          
      }
    })
  }

  ngOnInit(): void {
    this.initialized = true;
  }

  onSubmit():void {

    console.log('kjh');

    console.warn(this.siteEditForm.value);
  }

  checkSteps() {
    console.log('check step', this.currentStep);



    // console.log('update coords', e)

    // if(e.coords.length === 0) {
    //   console.log('disable next');
      
    // } else {
    //   console.log('enble next');
      
    // }
    
  }

  onMapChange(e:any) {

    this.siteEditForm.patchValue({
      location: {
        coordinates: e.coords.toString()
      }
    })

    this.currentStep.state = this.siteEditForm.get('location.coordinates');

    console.log(this.currentStep);
    

    this.checkSteps()
  }

  onPrevClick():void {
    this.currIndex--;
    this.isEnd = this.currIndex >= this.steps.length - 1;
  }
  async onNextClick() {

    if(this.isEnd) {
      return await this.siteService.updateSite(this.siteData);
    }
    this.currIndex++;
    this.isEnd = this.currIndex >= this.steps.length - 1;
  }

  onStep1Change(coords:number[]):void {

    console.log('likjd', coords)
    coords ? this.currentStep.state = true : this.currentStep.state = false;
    this.siteData.coords = coords;
  }
  onStep2Change(data:any):void {

    if(!data) {
      this.currentStep.state = false;
      return;
    }

    this.siteData = Object.assign({}, this.siteData, data);
    this.currentStep.state = true;
  }

  onStep3Change(data:any):void {
    this.siteData = Object.assign({}, this.siteData, data);
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
