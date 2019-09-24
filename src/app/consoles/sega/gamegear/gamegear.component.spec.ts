import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamegearComponent } from './gamegear.component';

describe('GamegearComponent', () => {
  let component: GamegearComponent;
  let fixture: ComponentFixture<GamegearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamegearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamegearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
