import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskevaluationCard2Component } from './riskevaluation-card2.component';

describe('RiskevaluationCard2Component', () => {
  let component: RiskevaluationCard2Component;
  let fixture: ComponentFixture<RiskevaluationCard2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiskevaluationCard2Component]
    });
    fixture = TestBed.createComponent(RiskevaluationCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
