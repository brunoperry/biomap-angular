import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { observeOn } from 'rxjs';
import { ReviewModel } from 'src/models/review.model.';
import { SiteModel } from 'src/models/site.model';
import { BackendService } from 'src/services/backend.service';
import { SiteService } from 'src/services/site.service';

@Component({
  selector: 'app-site-detail',
  templateUrl: './site-detail.component.html',
  styleUrls: ['./site-detail.component.css']
})
export class SiteDetailComponent implements OnInit {

  @Input() detailData: SiteModel = new SiteModel();
  reviewsData:ReviewModel[]=[];
  reviewsOpened:boolean = false;
  initialized:boolean = false;

  constructor(private siteService:SiteService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {

    this.route.params.subscribe((params:Params) => {
      if(params['index']) {

        const data = this.siteService.getSiteDetail(params['index']);
        this.detailData = data.site;
        this.reviewsData = data.reviews;
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
