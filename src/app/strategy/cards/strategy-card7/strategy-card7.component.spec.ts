import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyCard7Component } from './strategy-card7.component';

describe('StrategyCard7Component', () => {
  let component: StrategyCard7Component;
  let fixture: ComponentFixture<StrategyCard7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StrategyCard7Component]
    });
    fixture = TestBed.createComponent(StrategyCard7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
