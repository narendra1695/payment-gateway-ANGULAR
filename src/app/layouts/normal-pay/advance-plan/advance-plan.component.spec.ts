import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancePlanComponent } from './advance-plan.component';

describe('AdvancePlanComponent', () => {
  let component: AdvancePlanComponent;
  let fixture: ComponentFixture<AdvancePlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancePlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
