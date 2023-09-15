import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskmasterpageComponent } from './riskmasterpage.component';

describe('RiskmasterpageComponent', () => {
  let component: RiskmasterpageComponent;
  let fixture: ComponentFixture<RiskmasterpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiskmasterpageComponent]
    });
    fixture = TestBed.createComponent(RiskmasterpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
