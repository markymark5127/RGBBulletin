import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhillipsComponent } from './phillips.component';

describe('PhillipsComponent', () => {
  let component: PhillipsComponent;
  let fixture: ComponentFixture<PhillipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhillipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhillipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
