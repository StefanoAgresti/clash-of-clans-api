import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSummaryComponent } from './player.component';

describe('PlayerSummaryComponent', () => {
  let component: PlayerSummaryComponent;
  let fixture: ComponentFixture<PlayerSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerSummaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
