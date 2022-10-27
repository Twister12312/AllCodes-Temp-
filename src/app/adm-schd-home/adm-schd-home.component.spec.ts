import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmSchdHomeComponent } from './adm-schd-home.component';

describe('AdmSchdHomeComponent', () => {
  let component: AdmSchdHomeComponent;
  let fixture: ComponentFixture<AdmSchdHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmSchdHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmSchdHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
