import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {

  form!:FormGroup;
  @Output() onChange:EventEmitter<any> = new EventEmitter<any>();

  private phone:string = '';
  private address:string = '';
  private email:string = '';
  private website:string = '';
  private networks:string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      phone: new FormControl(null),
      address: new FormControl(null),
      email: new FormControl(null),
      website: new FormControl(null),
    })
  }

  onPhoneInput(e:any):void {
    this.phone = e.target.value;
    this.validate();
  }

  onAddressInput(e:any):void {
    this.address = e.target.value;
    this.validate();
  }

  onEmailInput(e:any):void {
    this.email = e.target.value;
    this.validate();
  }

  onWebsiteInput(e:any):void {
    this.website = e.target.value;
    this.validate();
  }

  onNetworkInput(type:string, e:any) :void {
    let currNT:number;
    switch (type) {
      case 'facebook':
      default:
        currNT = 0;
        break;
      case 'instagram':
        currNT = 1;
        break;
      case 'twitter':
        currNT = 2;
        break;
    }
    this.networks[currNT] = e.target.value;
    this.validate();
  }

  validate():void {
    
    this.onChange.emit({
      phone: this.phone,
      address: this.address,
      email: this.email,
      website: this.website,
      networks: this.networks,
    })
  }
}
