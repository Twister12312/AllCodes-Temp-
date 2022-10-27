import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmSalHomeComponent } from './adm-sal-home.component';

describe('AdmSalHomeComponent', () => {
  let component: AdmSalHomeComponent;
  let fixture: ComponentFixture<AdmSalHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmSalHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmSalHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
