import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmAttHomeComponent } from './adm-att-home.component';

describe('AdmAttHomeComponent', () => {
  let component: AdmAttHomeComponent;
  let fixture: ComponentFixture<AdmAttHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmAttHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmAttHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
