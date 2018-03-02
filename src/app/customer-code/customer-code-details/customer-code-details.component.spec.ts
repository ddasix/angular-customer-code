import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCodeDetailsComponent } from './customer-code-details.component';

describe('CustomerCodeDetailsComponent', () => {
  let component: CustomerCodeDetailsComponent;
  let fixture: ComponentFixture<CustomerCodeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCodeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCodeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
