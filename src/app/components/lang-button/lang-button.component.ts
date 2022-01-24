import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lang-button',
  templateUrl: './lang-button.component.html',
  styleUrls: ['./lang-button.component.css']
})
export class LangButtonComponent implements OnInit {

  @Input() title:string='';
  @Input() lang:string='pt';

  constructor() { }

  ngOnInit(): void {
  }
}
