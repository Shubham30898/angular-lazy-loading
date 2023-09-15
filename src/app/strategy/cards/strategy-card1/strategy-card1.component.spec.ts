import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyCard1Component } from './strategy-card1.component';

describe('StrategyCard1Component', () => {
  let component: StrategyCard1Component;
  let fixture: ComponentFixture<StrategyCard1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StrategyCard1Component]
    });
    fixture = TestBed.createComponent(StrategyCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
