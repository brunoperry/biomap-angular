import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {

  form!:FormGroup;
  @Output() onChange:EventEmitter<any> = new EventEmitter<any>();
  @Input() siteData:any = null;

  private phone:string = '';
  private address:string = '';
  private email:string = '';
  private website:string = '';
  private networks:any = {
    facebook: null,
    instagram: null,
    twitter: null
  };

  constructor() { }

  ngOnInit(): void {

    this.form = new FormGroup({
      phone: new FormControl(null),
      address: new FormControl(null),
      email: new FormControl(null),
      website: new FormControl(null),
      facebook: new FormControl(null),
      instagram: new FormControl(null),
      twitter: new FormControl(null),
    });
    
    if(this.siteData){
      this.phone = this.siteData.phone;
      this.address = this.siteData.address;
      this.email = this.siteData.email;
      this.website = this.siteData.website;
      this.networks = this.siteData.networks;

      this.form.get('phone')?.setValue(this.phone);
      this.form.get('address')?.setValue(this.address);
      this.form.get('email')?.setValue(this.email);
      this.form.get('website')?.setValue(this.website);
      this.form.get('facebook')?.setValue(this.networks.facebook);
      this.form.get('instagram')?.setValue(this.networks.instagram);
      this.form.get('twitter')?.setValue(this.networks.twitter);
    }
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
    switch (type) {
      case 'facebook':
        this.networks.facebook = e.target.value;
        break;
      case 'instagram':
        this.networks.instagram = e.target.value;
        break;
      case 'twitter':
        this.networks.twitter = e.target.value;
        break;
      default:
        break;
    }
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
