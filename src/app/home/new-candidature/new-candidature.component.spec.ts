import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCandidatureComponent } from './new-candidature.component';

describe('NewCandidatureComponent', () => {
  let component: NewCandidatureComponent;
  let fixture: ComponentFixture<NewCandidatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCandidatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCandidatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
