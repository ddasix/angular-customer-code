import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCodeCreateComponent } from './customer-code-create.component';

describe('CustomerCodeCreateComponent', () => {
  let component: CustomerCodeCreateComponent;
  let fixture: ComponentFixture<CustomerCodeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCodeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCodeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
