import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteMiniCardComponent } from './site-mini-card.component';

describe('SiteMiniCardComponent', () => {
  let component: SiteMiniCardComponent;
  let fixture: ComponentFixture<SiteMiniCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteMiniCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteMiniCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
