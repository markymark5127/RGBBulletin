import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NecComponent } from './nec.component';

describe('NecComponent', () => {
  let component: NecComponent;
  let fixture: ComponentFixture<NecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
