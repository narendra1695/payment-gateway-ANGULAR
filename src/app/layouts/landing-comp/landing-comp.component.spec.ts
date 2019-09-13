import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingCompComponent } from './landing-comp.component';

describe('LandingCompComponent', () => {
  let component: LandingCompComponent;
  let fixture: ComponentFixture<LandingCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
