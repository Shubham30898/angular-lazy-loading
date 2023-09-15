import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyCard4Component } from './strategy-card4.component';

describe('StrategyCard4Component', () => {
  let component: StrategyCard4Component;
  let fixture: ComponentFixture<StrategyCard4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StrategyCard4Component]
    });
    fixture = TestBed.createComponent(StrategyCard4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
