import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameboycolorComponent } from './gameboycolor.component';

describe('GameboycolorComponent', () => {
  let component: GameboycolorComponent;
  let fixture: ComponentFixture<GameboycolorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameboycolorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameboycolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
