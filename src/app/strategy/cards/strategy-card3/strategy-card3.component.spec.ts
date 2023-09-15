import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyCard3Component } from './strategy-card3.component';

describe('StrategyCard3Component', () => {
  let component: StrategyCard3Component;
  let fixture: ComponentFixture<StrategyCard3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StrategyCard3Component]
    });
    fixture = TestBed.createComponent(StrategyCard3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
