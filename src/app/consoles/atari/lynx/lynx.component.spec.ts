import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LynxComponent } from './lynx.component';

describe('LynxComponent', () => {
  let component: LynxComponent;
  let fixture: ComponentFixture<LynxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LynxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LynxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
