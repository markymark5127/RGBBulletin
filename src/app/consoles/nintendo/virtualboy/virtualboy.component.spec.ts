import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualboyComponent } from './virtualboy.component';

describe('VirtualboyComponent', () => {
  let component: VirtualboyComponent;
  let fixture: ComponentFixture<VirtualboyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualboyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualboyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
