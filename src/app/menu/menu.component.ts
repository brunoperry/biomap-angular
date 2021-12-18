import { Component, OnInit} from '@angular/core';
import { SiteService } from 'src/services/site.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isOpen:boolean = false;

  constructor(private siteService:SiteService) { }

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
  }

  onSaveClick():void {
    this.siteService.saveData();
  }
}
