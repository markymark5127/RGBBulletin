import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JaguarComponent } from './jaguar.component';

describe('JaguarComponent', () => {
  let component: JaguarComponent;
  let fixture: ComponentFixture<JaguarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JaguarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JaguarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
