import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamecubeComponent } from './gamecube.component';

describe('GamecubeComponent', () => {
  let component: GamecubeComponent;
  let fixture: ComponentFixture<GamecubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamecubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamecubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
