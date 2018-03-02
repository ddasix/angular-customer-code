import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanipComponent } from './banip.component';

describe('BanipComponent', () => {
  let component: BanipComponent;
  let fixture: ComponentFixture<BanipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
