import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmLeaveHomeComponent } from './adm-leave-home.component';

describe('AdmLeaveHomeComponent', () => {
  let component: AdmLeaveHomeComponent;
  let fixture: ComponentFixture<AdmLeaveHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmLeaveHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmLeaveHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
