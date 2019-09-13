import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnhancedPlanComponent } from './enhanced-plan.component';

describe('EnhancedPlanComponent', () => {
  let component: EnhancedPlanComponent;
  let fixture: ComponentFixture<EnhancedPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnhancedPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnhancedPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
