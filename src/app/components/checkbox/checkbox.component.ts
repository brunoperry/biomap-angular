import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  @Input() title:string = '';
  @Input() checked:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  onCheckboxClick() {
    // this.checked = !this.checked;
  }
}
