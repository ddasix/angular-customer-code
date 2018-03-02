import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCodeComponent } from './customer-code.component';

describe('CustomerCodeComponent', () => {
  let component: CustomerCodeComponent;
  let fixture: ComponentFixture<CustomerCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
