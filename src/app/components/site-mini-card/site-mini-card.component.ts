import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-site-mini-card',
  templateUrl: './site-mini-card.component.html',
  styleUrls: ['./site-mini-card.component.css']
})
export class SiteMiniCardComponent implements OnInit {

  @Input() cardData:any;
  @Input() editable:boolean = false;
  constructor(private router:Router) { }

  ngOnInit(): void {

    
  }
  onSiteClick():void {
    this.router.navigate(['/site-detail/', this.cardData.id]);
  }
  onEditClick():void {
    this.router.navigate(['/site-edit/', this.cardData.id]);
  }
}
