import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SiteService } from 'src/services/site.service';

@Component({
  selector: 'app-review-add',
  templateUrl: './review-add.component.html',
  styleUrls: ['./review-add.component.css']
})
export class ReviewAddComponent implements OnInit {

  private siteID:number = -1;
  private rating:number = 0;
  private reviewText:string = '';
  initialized:boolean = false;
  constructor(private route:ActivatedRoute, private location:Location,private siteService:SiteService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      if(params['index']) {
        this.siteID = parseInt(params['index']);
      }
    })
    this.initialized = true;
  }

  onRateChange(e:number):void{
    this.rating = e;
  }
  onReviewInput(e:any):void {
    e.value ? this.reviewText = e.value : this.reviewText = '';
  }

  onCancelClick() {
    this.location.back();
  }

  onSaveClick() {

    if(!this.reviewText) return;

    // this.siteService.addReview({
    //   siteID: this.siteID,
    //   rating: this.rating,
    //   review: this.reviewText
    // })
    this.location.back();
  }
}
