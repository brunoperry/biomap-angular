import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-card',
  templateUrl: './site-card.component.html',
  styleUrls: ['./site-card.component.css'],
})
export class SiteCardComponent implements OnInit {
  @Input() siteData: any;
  constructor() {}

  ngOnInit(): void {}
}
