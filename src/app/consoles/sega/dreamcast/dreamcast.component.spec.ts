import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamcastComponent } from './dreamcast.component';

describe('DreamcastComponent', () => {
  let component: DreamcastComponent;
  let fixture: ComponentFixture<DreamcastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DreamcastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DreamcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
