import { keyframes } from '@angular/animations';
import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  @Input() isSearch:boolean = true;

  constructor(private router:Router, private location:Location) {

    this.router.events.subscribe((ev: any) => {
      if(ev instanceof NavigationEnd) {
        this.isSearch = ev.url.includes('site-list');
      }
    });
  }

  ngOnInit(): void {
  }
 
  onBack():void {
    this.location.back();
  }
  onSearch(ev:Event):void {

    ev.preventDefault();
    ev.stopPropagation();

    console.log(ev)
  }

  onSearchInput(value:string):void {
    console.log(value);
  }
}

