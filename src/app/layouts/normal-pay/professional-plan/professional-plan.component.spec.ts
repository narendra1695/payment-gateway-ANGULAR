import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalPlanComponent } from './professional-plan.component';

describe('ProfessionalPlanComponent', () => {
  let component: ProfessionalPlanComponent;
  let fixture: ComponentFixture<ProfessionalPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
