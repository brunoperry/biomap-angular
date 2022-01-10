import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ReviewModel } from 'src/models/review.model.';
import { SiteModel } from 'src/models/site.model';
import { SiteService } from 'src/services/site.service';

@Component({
  selector: 'app-site-detail',
  templateUrl: './site-detail.component.html',
  styleUrls: ['./site-detail.component.css']
})
export class SiteDetailComponent implements OnInit {

  private detailID:string = '';
  detailData: SiteModel = new SiteModel();
  reviewsData:ReviewModel[]=[];
  reviewsOpened:boolean = false;
  initialized:boolean = false;

  constructor(private siteService:SiteService, private route:ActivatedRoute, private router:Router) { 
  }

  ngOnInit(): void {

    this.route.params.subscribe(async (params:Params) => {

      if(!params['index']) return;


      this.detailID = params['index'];
      let data:SiteModel | undefined;
      if(this.siteService.getSites().length === 0) {
        this.siteService.sitesChangedEvent.subscribe((sites:SiteModel[]) => {
          data = this.siteService.getSiteById(this.detailID);
          if(data) this.detailData = data;
        })
      } else {
          data = this.siteService.getSiteById(this.detailID);
          if(data) this.detailData = data;
      }
    })
    this.initialized = true;
  }

  onShareClick():void {
    console.log('share this');
  }

  onMapButtonClick():void {
    console.log('map button click');
  }

  onNetworkClick(type:string | undefined):void {
    console.log('network clicked', type);
  }

  onExpandButtonClick():void {
    this.reviewsOpened = !this.reviewsOpened;
  }
  onWriteButtonClick():void {
    this.router.navigate(['review-add', this.detailData?.id])
  }
}
