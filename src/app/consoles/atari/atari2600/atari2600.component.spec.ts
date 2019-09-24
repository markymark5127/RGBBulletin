import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Atari2600Component } from './atari2600.component';

describe('Atari2600Component', () => {
  let component: Atari2600Component;
  let fixture: ComponentFixture<Atari2600Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Atari2600Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Atari2600Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
