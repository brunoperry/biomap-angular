import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-card-mini',
  templateUrl: './site-card-mini.component.html',
  styleUrls: ['./site-card-mini.component.css'],
})
export class SiteCardMiniComponent implements OnInit {
  @Input() siteData: any = {};
  constructor() {}

  ngOnInit(): void {
    console.log(this.siteData);
  }
}
