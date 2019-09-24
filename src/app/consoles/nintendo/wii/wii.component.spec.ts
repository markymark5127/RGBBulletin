import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WiiComponent } from './wii.component';

describe('WiiComponent', () => {
  let component: WiiComponent;
  let fixture: ComponentFixture<WiiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
