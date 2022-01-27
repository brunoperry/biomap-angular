import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  @Input() images:any[] = [];

  ngOnInit(): void {
    // console.log(this.images);
  }

  onNextClick():void {
    console.log('next');
  }

  onPrevClick():void {
    console.log('previous');
  }
}
