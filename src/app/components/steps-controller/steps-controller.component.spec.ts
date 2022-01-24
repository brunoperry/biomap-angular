import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsControllerComponent } from './steps-controller.component';

describe('StepsControllerComponent', () => {
  let component: StepsControllerComponent;
  let fixture: ComponentFixture<StepsControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepsControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
