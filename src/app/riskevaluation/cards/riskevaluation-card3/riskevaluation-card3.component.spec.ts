import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskevaluationCard3Component } from './riskevaluation-card3.component';

describe('RiskevaluationCard3Component', () => {
  let component: RiskevaluationCard3Component;
  let fixture: ComponentFixture<RiskevaluationCard3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiskevaluationCard3Component]
    });
    fixture = TestBed.createComponent(RiskevaluationCard3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
