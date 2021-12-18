import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { observeOn } from 'rxjs';
import { ReviewModel } from 'src/models/review.model.';
import { SiteModel } from 'src/models/site.model';
import { SiteService } from 'src/services/site.service';

@Component({
  selector: 'app-site-detail',
  templateUrl: './site-detail.component.html',
  styleUrls: ['./site-detail.component.css']
})
export class SiteDetailComponent implements OnInit {

  @Input() detailData?: SiteModel;
  reviewsData:ReviewModel[]=[];
  reviewsOpened:boolean = false;
  initialized:boolean = false;

  constructor(private siteService:SiteService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe((params:Params) => {
      if(params['index']) {
        this.detailData = this.siteService.getSite(parseInt(params['index']));
        this.reviewsData = this.siteService.getReviews(this.detailData?.reviews)
      }
    })
    this.initialized = true;
  }

  onMapButtonClick():void {
    console.log('map button click');
  }

  onNetworkClick(type:string):void {
    console.log('network clicked', type);
  }

  onExpandButtonClick():void {
    this.reviewsOpened = !this.reviewsOpened;
  }
  onWriteButtonClick():void {
    console.log('wire review clicked');
  }
}
