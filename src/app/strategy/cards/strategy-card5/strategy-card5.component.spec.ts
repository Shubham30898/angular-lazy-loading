import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyCard5Component } from './strategy-card5.component';

describe('StrategyCard5Component', () => {
  let component: StrategyCard5Component;
  let fixture: ComponentFixture<StrategyCard5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StrategyCard5Component]
    });
    fixture = TestBed.createComponent(StrategyCard5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
