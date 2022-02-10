import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Util } from 'src/app/utils';

@Component({
  selector: 'app-label-icon',
  templateUrl: './label-icon.component.html',
  styleUrls: ['./label-icon.component.css'],
})
export class LabelIconComponent implements OnInit {
  @Input() icon: string = '';
  @Input() text: string = 'no text';
  @Input() fontSize: string = '1em';
  @Input() fontColor: string = 'var(--font-color)';
  @Input() fontWeight: number = 500;
  @Input() iconFill: string = 'var(--pink)';
  @Input() iconSize: number = 32;

  public icontemplate: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.icontemplate = this.sanitizer.bypassSecurityTrustHtml(
      Util.getIcon(this.icon, this.iconSize, this.iconSize)
    );
  }
}
