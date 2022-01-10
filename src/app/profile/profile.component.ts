import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SiteModel } from 'src/models/site.model';
import { UserModel } from 'src/models/user.model';
import { SiteService } from 'src/services/site.service';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userData:UserModel = new UserModel();
  sitesData:any[] = [];
  isEditable:boolean = false;
  initialized:boolean = false;

  constructor(private userService:UsersService, private siteService:SiteService, private route:ActivatedRoute) { 

    this.siteService.sitesChangedEvent.subscribe(() => {
      this.sitesData = this.siteService.getSitesByID(this.userData.sites);
      
    });
    this.userService.usersChangedEvent.subscribe(() => {
      this.userData = this.userService.currentUser;
      this.sitesData = this.siteService.getSitesByID(this.userData.sites);
      
    });
  }

  ngOnInit(): void {

    this.route.params.subscribe((params:Params) => {
      if(params['index']) {
        const data = this.userService.getUserByID(params['index']);
        if(data) {
          this.userData = data;
        }
      } else {
        this.userData = this.userService.currentUser;
      }

      this.isEditable = this.userData.id === this.userService.currentUser.id;
      this.sitesData = this.siteService.getSitesByID(this.userData.sites);
    })
    this.initialized = true;
  }
  onChangeAvatarClick() :void {
    console.log('change avatar');
  }
}
