import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmLeaveEmpComponent } from './adm-leave-emp.component';

describe('AdmLeaveEmpComponent', () => {
  let component: AdmLeaveEmpComponent;
  let fixture: ComponentFixture<AdmLeaveEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmLeaveEmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmLeaveEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
