import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GbadvancedComponent } from './gbadvanced.component';

describe('GbadvancedComponent', () => {
  let component: GbadvancedComponent;
  let fixture: ComponentFixture<GbadvancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GbadvancedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GbadvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
