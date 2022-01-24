import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-steps-controller',
  templateUrl: './steps-controller.component.html',
  styleUrls: ['./steps-controller.component.css']
})
export class StepsControllerComponent implements OnInit {


  @Input() isEnd:boolean = false;
  currIndex:number=0;
  disableNext:boolean = true;
  steps:any[] = [
    {
      id: 0,
      title:'edit location',
      state: true
    },
    {
      id: 1,
      title:'edit information',
      state: true
    },
    {
      id: 2,
      title:'edit contacts',
      state: true
    },
    {
      id: 3,
      title:'edit media',
      state: true
    },
    {
      id: 3,
      title:'review',
      state: true
    }
  ];
  initialized:boolean = false;

  constructor() { }

  ngOnInit(): void {

    this.initialized = true;
    
  }

  onNextClick():void {

  }

  onPrevClick():void {

  }

  get currentStep():any {
    return this.steps[this.currIndex];
  }

}
