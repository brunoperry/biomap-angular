import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { SiteService } from 'src/services/site.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  public siteData: any = {};
  public reviewsData: any[] = [];
  public hasContacts: boolean = false;
  public isReviewsColapse: boolean = false;

  constructor(
    private siteService: SiteService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.siteData = this.siteService.getSiteById(params.get('id') || '');
      this.reviewsData = this.siteService.getSiteReviews(this.siteData.id);

      const c = this.siteData.contacts;
      if (c.email || c.phone || c.instagram || c.facebook || c.twitter)
        this.hasContacts = true;
      else this.hasContacts = false;
    });
  }

  onShareClick(ev: any): void {
    console.log('share site id:', this.siteData.id);
  }
}
