import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Util } from 'src/app/utils';

@Component({
  selector: 'app-site-title',
  templateUrl: './site-title.component.html',
  styleUrls: ['./site-title.component.css'],
})
export class SiteTitleComponent implements OnInit {
  @Input() titleData: any = {
    title: 'missing title',
    type: '',
  };

  constructor(private sanitizer: DomSanitizer) {}

  icon: SafeHtml = '';

  ngOnInit(): void {
    this.icon = this.sanitizer.bypassSecurityTrustHtml(
      Util.getTypeIcon(this.titleData.type, { align: 'start' })
    );
  }
}
