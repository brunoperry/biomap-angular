import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { SiteService } from 'src/services/site.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() isOpen:boolean = false;

  constructor(private siteService:SiteService, private router:Router) { }

  ngOnInit(): void {
  }

  onBackgroundClick():void {
    this.isOpen = false;
  }

  onMenuButtonClick():void {
    this.isOpen = !this.isOpen;
  }

  onMenuItemClick(value:string):void {
    this.isOpen = false;
    this.router.navigate([value]);
  }

  onSaveClick():void {
    this.siteService.saveData();
  }
}
