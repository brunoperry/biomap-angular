import { Component, OnInit } from '@angular/core';

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

  public showLangList:boolean = false;

  constructor() { }

  ngOnInit(): void {
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

  onRefreshClick() :void {
    console.log('refresh');
    
  }
}
