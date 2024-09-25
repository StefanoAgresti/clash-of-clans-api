import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerClanInfoComponent } from './player-clan-info.component';

describe('PlayerClanInfoComponent', () => {
  let component: PlayerClanInfoComponent;
  let fixture: ComponentFixture<PlayerClanInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerClanInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerClanInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
