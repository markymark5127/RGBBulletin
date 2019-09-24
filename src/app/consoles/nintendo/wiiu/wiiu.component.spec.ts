import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WiiuComponent } from './wiiu.component';

describe('WiiuComponent', () => {
  let component: WiiuComponent;
  let fixture: ComponentFixture<WiiuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiiuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WiiuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
