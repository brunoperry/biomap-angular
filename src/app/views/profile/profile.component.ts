import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SiteService } from 'src/services/site.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public profileData: any = {
    sitesAdded: [],
  };
  constructor(
    private siteService: SiteService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const user = this.siteService.getUserByID(params.get('id') || '');
      this.profileData.sitesAdded = this.siteService.getSitesByID(user.sites);
      this.profileData = Object.assign(user, this.profileData);

      console.log(this.profileData);

      // console.log(params.get(this.profileData));

      // this.reviewsData = this.siteService.getSiteReviews(this.siteData.id);

      // const c = this.siteData.contacts;
      // if (c.email || c.phone || c.instagram || c.facebook || c.twitter)
      //   this.hasContacts = true;
      // else this.hasContacts = false;
    });
  }
}
