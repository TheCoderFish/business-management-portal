import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPortComponent } from './test-port.component';

describe('TestPortComponent', () => {
  let component: TestPortComponent;
  let fixture: ComponentFixture<TestPortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
