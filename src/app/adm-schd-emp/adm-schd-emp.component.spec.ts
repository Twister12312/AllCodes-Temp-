import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmSchdEmpComponent } from './adm-schd-emp.component';

describe('AdmSchdEmpComponent', () => {
  let component: AdmSchdEmpComponent;
  let fixture: ComponentFixture<AdmSchdEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmSchdEmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmSchdEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
