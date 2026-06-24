import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileRecharge } from './mobile-recharge';

describe('MobileRecharge', () => {
  let component: MobileRecharge;
  let fixture: ComponentFixture<MobileRecharge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileRecharge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileRecharge);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
