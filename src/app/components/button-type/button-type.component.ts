import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Util } from 'src/app/utils';

@Component({
  selector: 'app-button-type',
  templateUrl: './button-type.component.html',
  styleUrls: ['./button-type.component.css'],
})
export class ButtonTypeComponent implements OnInit {
  @Input() type: string = '';
  @Input() text: string = '';
  @Input() fontBaseColor: string = 'var(--white)';
  @Input() fontToggleColor: string = 'var(--green-a)';
  @Input() baseColor: string = 'var(--pink)';
  @Input() toggleColor: string = 'var(--pink)';

  public icontemplate: SafeHtml = '';
  public isToggled: boolean = false;
  public strokeColor: string | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.icontemplate = this.sanitizer.bypassSecurityTrustHtml(
      Util.getTypeIcon(this.type)
    );

    if (this.type === 'other') {
      this.strokeColor = 'var(--pink)';
    }
  }

  onClick(): void {
    this.isToggled = !this.isToggled;
  }
}
