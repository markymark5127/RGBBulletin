import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegaComponent } from './sega.component';

describe('SegaComponent', () => {
  let component: SegaComponent;
  let fixture: ComponentFixture<SegaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
