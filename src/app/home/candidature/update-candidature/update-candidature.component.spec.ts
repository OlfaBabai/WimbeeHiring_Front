import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCandidatureComponent } from './update-candidature.component';

describe('UpdateCandidatureComponent', () => {
  let component: UpdateCandidatureComponent;
  let fixture: ComponentFixture<UpdateCandidatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCandidatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCandidatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
