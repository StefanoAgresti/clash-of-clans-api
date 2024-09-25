import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalStatisticsComponent } from './capital-statistics.component';

describe('CapitalStatisticsComponent', () => {
  let component: CapitalStatisticsComponent;
  let fixture: ComponentFixture<CapitalStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapitalStatisticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapitalStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
