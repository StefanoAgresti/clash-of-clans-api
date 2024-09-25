import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerDonationsAttacksComponent } from './player-donations-attacks.component';

describe('PlayerDonationsAttacksComponent', () => {
  let component: PlayerDonationsAttacksComponent;
  let fixture: ComponentFixture<PlayerDonationsAttacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerDonationsAttacksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerDonationsAttacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
