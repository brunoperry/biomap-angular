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

    this.route.params.subscribe(async (params:Params) => {
      this.detailID = params['index'];
      this.siteService.sitesChangedEvent.subscribe(() => {
        this.detailData = this.siteService.getSiteById(this.detailID);
      });
    });
  }

  ngOnInit(): void {

    if(this.siteService.getSites().length > 0) this.detailData = this.siteService.getSiteById(this.detailID);
    
    this.initialized = true;
  }

  onShareClick():void {
    console.log('share this');
  }

  onMapButtonClick():void {
    const c:any = this.detailData.coordinates;
    window.open(`https://www.google.com/maps/search/?api=1&query=${c[0]},${c[1]}`, '_blank');
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
