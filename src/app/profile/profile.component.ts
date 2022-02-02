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

  private userID:string = '';
  userData:UserModel = new UserModel();
  sitesData:any[] = [];
  isEditable:boolean = false;
  initialized:boolean = false;

  constructor(private userService:UsersService, private siteService:SiteService, private route:ActivatedRoute) { 
    
    this.route.params.subscribe((params:Params) => {

      this.userID = params['index'] || '';
      // if(params['index']) {
      //   this.initializeUser(params['index']);
      // } else {
      //   this.initializeCurrentUser();
      //   this.isEditable = true;
      // }
    })
  }

  ngOnInit() {

    if(this.userID) {
      this.initializeUser(this.userID);
    } else {
      this.initializeCurrentUser();
    }
  }

  private initializeCurrentUser():void {
    const data = this.userService.currentUser;
    if(!data.name) {
      
      this.userService.usersChangedEvent.subscribe(() => {
        this.userData = this.userService.currentUser;

        console.log('lajsd',this.userData);
        this.setSitesData();
      });
    } else {
      this.userData = data;
      this.setSitesData();
    }
    this.isEditable = true;
  }

  private async initializeUser(userID:string) {
    const data = await this.userService.getUserByID(userID);

    if(data) {
      this.userData = data;
      
      
    } else {
      this.userService.usersChangedEvent.subscribe(() => {
        this.userData = this.userService.currentUser;
      });
    }
    this.setSitesData();

    console.log(this.userData);
    
  }
  private setSitesData():void {

    const data = this.siteService.getSitesByID(this.userData.sites);
    
    if(data.length==0) {
      this.siteService.sitesChangedEvent.subscribe(() => {
        this.sitesData = this.siteService.getSitesByID(this.userData.sites);
        this.initialized = true;
      });
    } else {
      this.sitesData = data;
      this.initialized = true;
    }
  }

  onChangeAvatarClick() :void {
    console.log('change avatar');
  }
}
