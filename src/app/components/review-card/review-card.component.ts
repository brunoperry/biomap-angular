import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReviewModel } from 'src/models/review.model.';
import { SiteService } from 'src/services/site.service';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.css']
})
export class ReviewCardComponent implements OnInit {

  @Input() reviewID:any;
  reviewData?:ReviewModel;

  constructor(private siteService:SiteService, private router:Router) { }

  ngOnInit(): void {
    this.init();
  }

  async init() {
    this.reviewData = await this.siteService.getReviewById(this.reviewID);
  }

  onAvatarClick():void {
    if(!this.reviewData) return;
    this.router.navigate(['/profile', this.reviewData.userID]);
  }
}
