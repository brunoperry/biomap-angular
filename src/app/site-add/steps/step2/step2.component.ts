import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {

  private title:string = '';
  private description:string ='';
  toggleType:string = '';

  form!:FormGroup;
  @Output() onChange:EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, [Validators.required, Validators.maxLength(200)]),
      type: new FormControl(null, Validators.required),
    })
  }

  onTitleInput(event:any):void {
    this.title = event.target.value;
    this.validate();
  } 

  onDescriptionInput(event:any) :void {
    this.description = event.target.value;
    this.validate();
  }

  onRadioButtonClick(type : string) : void {
    this.toggleType = type;
    this.validate();
  }

  validate() {
    this.title && this.description && this.toggleType ?
    this.onChange.emit({
        title: this.title,
        description: this.description,
        type: this.toggleType
      }) :
    this.onChange.emit(null);
  }
}
