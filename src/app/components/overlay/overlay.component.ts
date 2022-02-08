import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css'],
})
export class OverlayComponent implements OnInit {
  @Input() title: string = 'no title';
  @ContentChild(TemplateRef) contentTemplate: TemplateRef<any> | null = null;
  @Output() onOverlay: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onCloseClick(): void {
    this.onOverlay.emit('close');
  }
}
