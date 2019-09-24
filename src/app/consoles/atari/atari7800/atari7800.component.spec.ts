import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Atari7800Component } from './atari7800.component';

describe('Atari7800Component', () => {
  let component: Atari7800Component;
  let fixture: ComponentFixture<Atari7800Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Atari7800Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Atari7800Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
