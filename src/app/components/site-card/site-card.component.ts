import { Component, Input, OnInit } from '@angular/core';
import { SiteModel } from '../../../models/site.model';

@Component({
  selector: 'app-site-card',
  templateUrl: './site-card.component.html',
  styleUrls: ['./site-card.component.css'],
})
export class SiteCardComponent implements OnInit {

  @Input() siteData?: SiteModel;

  constructor() {}

  ngOnInit(): void {

  }
}
