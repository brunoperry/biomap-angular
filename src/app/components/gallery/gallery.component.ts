import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  @Input() images:any[] = [];
  hasControls:boolean = false;
  currentImageIndex:number = 0;

  ngOnInit(): void {

    this.hasControls = this.images.length > 0;
    // console.log(this.images);
  }

  onNextClick():void {
    console.log('next');
    
    this.currentImageIndex++;
    if(this.currentImageIndex >= this.images.length) this.currentImageIndex = 0;
  }

  onPrevClick():void {

    console.log('prev');
    
    this.currentImageIndex--;
    if(this.currentImageIndex < 0) this.currentImageIndex = this.images.length - 1;
  }
}
