import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmSalEmpComponent } from './adm-sal-emp.component';

describe('AdmSalEmpComponent', () => {
  let component: AdmSalEmpComponent;
  let fixture: ComponentFixture<AdmSalEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmSalEmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmSalEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
