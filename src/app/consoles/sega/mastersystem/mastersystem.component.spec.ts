import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MastersystemComponent } from './mastersystem.component';

describe('MastersystemComponent', () => {
  let component: MastersystemComponent;
  let fixture: ComponentFixture<MastersystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastersystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MastersystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
