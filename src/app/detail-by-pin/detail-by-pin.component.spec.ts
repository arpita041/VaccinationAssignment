import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailByPinComponent } from './detail-by-pin.component';

describe('DetailByPinComponent', () => {
  let component: DetailByPinComponent;
  let fixture: ComponentFixture<DetailByPinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailByPinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailByPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
