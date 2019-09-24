import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { N3dsComponent } from './n3ds.component';

describe('N3dsComponent', () => {
  let component: N3dsComponent;
  let fixture: ComponentFixture<N3dsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ N3dsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(N3dsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
