import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferSuccess } from './transfer-success';

describe('TransferSuccess', () => {
  let component: TransferSuccess;
  let fixture: ComponentFixture<TransferSuccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferSuccess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferSuccess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
