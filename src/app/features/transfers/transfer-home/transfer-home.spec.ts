import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferHome } from './transfer-home';

describe('TransferHome', () => {
  let component: TransferHome;
  let fixture: ComponentFixture<TransferHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
