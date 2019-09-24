import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { N64Component } from './n64.component';

describe('N64Component', () => {
  let component: N64Component;
  let fixture: ComponentFixture<N64Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ N64Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(N64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
