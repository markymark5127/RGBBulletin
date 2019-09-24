import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XboxoneComponent } from './xboxone.component';

describe('XboxoneComponent', () => {
  let component: XboxoneComponent;
  let fixture: ComponentFixture<XboxoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XboxoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XboxoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
