import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css']
})
export class Step4Component implements OnInit {

  numImages:number = 0;
  images:any[] = [];

  @Output() onChange:EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onAttachImage():void {

  }

  onTakePic():void {

  }
  onFileSelected(e:any) :void {

    this.onChange.emit({
      type: 'file',
      data:e.target.files
    });

    const reader = new FileReader();
    reader.onload = (ev:any) => {
      this.images.push(ev.target.result);
      this.numImages = this.images.length;
      this.onChange.emit({
        type:'thumb',
        data:this.images
      });
    }
    reader.readAsDataURL(e.target.files[0]);
  }

  onDeleteThumbnailClick(i:number):void {
    this.images.splice(i, 1);
    this.numImages = this.images.length;
    this.onChange.emit({
      type: 'delete',
      index: i
    });
  }
}
