import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyCard6Component } from './strategy-card6.component';

describe('StrategyCard6Component', () => {
  let component: StrategyCard6Component;
  let fixture: ComponentFixture<StrategyCard6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StrategyCard6Component]
    });
    fixture = TestBed.createComponent(StrategyCard6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
