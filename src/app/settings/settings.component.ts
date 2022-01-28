import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/models/user.model';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  public settings:any = {
    notifications: true,
    location: true,
    newsletter: true,
    language: 'pt',
    mapStyle: 'graphic'
  }
  initialized:boolean = false;

  public showLangList:boolean = false;

  constructor(private userModel:UsersService) {
  }

  ngOnInit(): void {

    const set:any = this.userModel.getUserSettings();
    if(set) {
      this.settings = set;
      this.initialized = true;
      console.log('1');
      
    } else {
      this.userModel.usersChangedEvent.subscribe((user:UserModel) => {
        this.settings = this.userModel.getUserSettings();
        this.initialized = true;
      console.log('2');
      })
    }
  }

  onNotificationClick(e:any):void {
    this.settings.notifications = !this.settings.notifications;
  }

  onLocationClick(e:any):void {
    this.settings.location = !this.settings.location;
  }

  onNewsletterClick(e:any):void {
    this.settings.newsletter = !this.settings.newsletter;
  }

  onLangClick():void {
    this.showLangList = true;
  }

  onLangListBackgroundClick():void {
    this.showLangList = false;
  }

  onLangListClick(lang:string):void {
    this.showLangList = false;
    this.settings.language = lang;
  }

  onMapStyleClick(type:string):void {
    console.log(type);
    
    this.settings.mapStyle = type;
  }

  async onRefreshClick() {

    await this.userModel.saveUserSettings(this.settings);
    window.location.reload();
  }
}
