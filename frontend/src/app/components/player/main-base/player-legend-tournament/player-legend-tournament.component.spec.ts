import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerLegendTournamentComponent } from './player-legend-tournament.component';

describe('PlayerLegendTournamentComponent', () => {
  let component: PlayerLegendTournamentComponent;
  let fixture: ComponentFixture<PlayerLegendTournamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerLegendTournamentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerLegendTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
