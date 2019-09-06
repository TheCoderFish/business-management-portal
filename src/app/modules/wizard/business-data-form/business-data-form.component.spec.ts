import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessDataFormComponent } from './business-data-form.component';

describe('BusinessDataFormComponent', () => {
  let component: BusinessDataFormComponent;
  let fixture: ComponentFixture<BusinessDataFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessDataFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
