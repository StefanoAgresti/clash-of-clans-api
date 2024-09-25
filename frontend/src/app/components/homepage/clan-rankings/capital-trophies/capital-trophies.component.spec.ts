import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalTrophiesComponent } from './capital-trophies.component';

describe('CapitalTrophiesComponent', () => {
  let component: CapitalTrophiesComponent;
  let fixture: ComponentFixture<CapitalTrophiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapitalTrophiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapitalTrophiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
