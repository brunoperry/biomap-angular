import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public sitesData: any[] = [
    {
      type: 'farm',
      title: 'quinta das azenhagazinhas',
      rating: 2,
      reviews: [{}, {}],
      media: ['http://e2value.com/wp-content/uploads/2014/01/farm11.jpg'],
      description: 'qwjdkqjwhkqjhwe qkwjhekqjwhe qwjkhekqjwhe',
    },
    {
      type: 'other',
      title: 'oitavos',
      rating: 4,
      reviews: [],
      media: [
        'https://www.glencorgolf.com/wp-content/uploads/2014/12/oitavos-dunes-2-.jpg',
      ],
      description: 'qwjdkqjwhkqjhwe qkwjhekqjwhe qwjkhekqjwhe',
    },
  ];

  public filtersData: any[] = ['farm', 'restaurant', 'market', 'other'];

  public modeXPos: string = '0%';
  public isOverlay: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onHomeBarClick(action: any): void {
    switch (action) {
      case 'list':
        this.modeXPos = 'translateX(0%)';
        break;
      case 'map':
        this.modeXPos = 'translateX(-50%)';
        break;
      case 'filter':
        this.isOverlay = true;
        break;

      default:
        break;
    }
  }

  onButtonToggleClick(ev: any): void {
    console.log(ev);
  }

  onOverlayClick(): void {
    this.isOverlay = false;
  }
}
