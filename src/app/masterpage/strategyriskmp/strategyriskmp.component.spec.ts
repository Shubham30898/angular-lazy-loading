import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyriskmpComponent } from './strategyriskmp.component';

describe('StrategyriskmpComponent', () => {
  let component: StrategyriskmpComponent;
  let fixture: ComponentFixture<StrategyriskmpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StrategyriskmpComponent]
    });
    fixture = TestBed.createComponent(StrategyriskmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
