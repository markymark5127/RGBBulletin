import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectscarlettComponent } from './projectscarlett.component';

describe('ProjectscarlettComponent', () => {
  let component: ProjectscarlettComponent;
  let fixture: ComponentFixture<ProjectscarlettComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectscarlettComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectscarlettComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
