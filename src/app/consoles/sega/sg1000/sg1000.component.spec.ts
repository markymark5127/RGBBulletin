import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sg1000Component } from './sg1000.component';

describe('Sg1000Component', () => {
  let component: Sg1000Component;
  let fixture: ComponentFixture<Sg1000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sg1000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sg1000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
