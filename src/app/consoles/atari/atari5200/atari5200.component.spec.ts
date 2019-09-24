import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Atari5200Component } from './atari5200.component';

describe('Atari5200Component', () => {
  let component: Atari5200Component;
  let fixture: ComponentFixture<Atari5200Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Atari5200Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Atari5200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
