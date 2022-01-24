import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-step5',
  templateUrl: './step5.component.html',
  styleUrls: ['./step5.component.css']
})
export class Step5Component implements OnInit {

  @Input() reviewData:any = {
    title:''
  };
  constructor() { }

  ngOnInit(): void {}
}
