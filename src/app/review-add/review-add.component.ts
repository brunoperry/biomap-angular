import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-review-add',
  templateUrl: './review-add.component.html',
  styleUrls: ['./review-add.component.css']
})
export class ReviewAddComponent implements OnInit {

  private siteID:number = -1;
  initialized:boolean = false;
  constructor(private route:ActivatedRoute, private location:Location) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      if(params['index']) {
        this.siteID = parseInt(params['index']);
        console.log('siteID', this.siteID);
      }
    })
    this.initialized = true;
  }

  onCancelClick() {
    this.location.back();
  }

  onSaveClick() {
    
  }
}
