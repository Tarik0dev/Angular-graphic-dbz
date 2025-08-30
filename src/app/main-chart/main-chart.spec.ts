import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainChart } from './main-chart';

describe('MainChart', () => {
  let component: MainChart;
  let fixture: ComponentFixture<MainChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
