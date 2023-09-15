import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskevaluationCard4Component } from './riskevaluation-card4.component';

describe('RiskevaluationCard4Component', () => {
  let component: RiskevaluationCard4Component;
  let fixture: ComponentFixture<RiskevaluationCard4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiskevaluationCard4Component]
    });
    fixture = TestBed.createComponent(RiskevaluationCard4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
