import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCodeModalComponent } from './customer-code-modal.component';

describe('CustomerCodeModalComponent', () => {
  let component: CustomerCodeModalComponent;
  let fixture: ComponentFixture<CustomerCodeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCodeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCodeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
