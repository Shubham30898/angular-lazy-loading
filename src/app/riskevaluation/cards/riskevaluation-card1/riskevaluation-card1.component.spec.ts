import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskevaluationCard1Component } from './riskevaluation-card1.component';

describe('RiskevaluationCard1Component', () => {
  let component: RiskevaluationCard1Component;
  let fixture: ComponentFixture<RiskevaluationCard1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiskevaluationCard1Component]
    });
    fixture = TestBed.createComponent(RiskevaluationCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
