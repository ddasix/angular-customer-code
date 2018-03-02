import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCodeListComponent } from './customer-code-list.component';

describe('CustomerCodeListComponent', () => {
  let component: CustomerCodeListComponent;
  let fixture: ComponentFixture<CustomerCodeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCodeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCodeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
