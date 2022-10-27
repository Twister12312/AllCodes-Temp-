import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmAttEmpComponent } from './adm-att-emp.component';

describe('AdmAttEmpComponent', () => {
  let component: AdmAttEmpComponent;
  let fixture: ComponentFixture<AdmAttEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmAttEmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmAttEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
