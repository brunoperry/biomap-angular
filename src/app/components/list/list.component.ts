import {
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() listData: any = {};
  @Input() title: string | null = null;
  @ContentChild(TemplateRef) itemTemplate: TemplateRef<any> | null = null;
  constructor() {}

  ngOnInit(): void {}

  onCloseClick(): void {
    console.log('close overlay');
  }
}
