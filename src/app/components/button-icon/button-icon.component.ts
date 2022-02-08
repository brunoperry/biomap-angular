import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Util } from 'src/app/utils';

@Component({
  selector: 'app-button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.css'],
})
export class ButtonIconComponent implements OnInit {
  @Input() icon: string | null = null;
  @Input() image: string | null = null;
  @Input() width: number = 32;
  @Input() height: number = 32;
  @Input() color: string = '';

  element: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    let elem: any;

    if (this.icon) {
      elem = Util.getIcon(this.icon, this.width, this.height, this.color);
    } else if (this.image) {
      elem = Util.getImage(this.image, this.width, this.height, '50%');
    }

    if (elem) this.element = this.sanitizer.bypassSecurityTrustHtml(elem);
  }
}
