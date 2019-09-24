import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ps2Component } from './ps2.component';

describe('Ps2Component', () => {
  let component: Ps2Component;
  let fixture: ComponentFixture<Ps2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ps2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ps2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
