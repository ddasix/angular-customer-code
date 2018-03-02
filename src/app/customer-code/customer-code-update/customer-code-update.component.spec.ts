import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCodeUpdateComponent } from './customer-code-update.component';

describe('CustomerCodeUpdateComponent', () => {
  let component: CustomerCodeUpdateComponent;
  let fixture: ComponentFixture<CustomerCodeUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCodeUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCodeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
