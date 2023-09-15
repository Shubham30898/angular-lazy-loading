import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyCard2Component } from './strategy-card2.component';

describe('StrategyCard2Component', () => {
  let component: StrategyCard2Component;
  let fixture: ComponentFixture<StrategyCard2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StrategyCard2Component]
    });
    fixture = TestBed.createComponent(StrategyCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
