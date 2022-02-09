import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteCardMiniComponent } from './site-card-mini.component';

describe('SiteCardMiniComponent', () => {
  let component: SiteCardMiniComponent;
  let fixture: ComponentFixture<SiteCardMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteCardMiniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteCardMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
