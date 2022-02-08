import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Util } from 'src/app/utils';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.css'],
})
export class SvgComponent implements OnInit {
  @Input() iconName: string = '';
  @Input() width: number = 32;
  @Input() height: number = 32;

  public element: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.element = this.sanitizer.bypassSecurityTrustHtml(
      Util.getIcon(this.iconName, this.width, this.height)
    );
  }
}
