import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerArmyComponent } from './player-army.component';

describe('PlayerArmyComponent', () => {
  let component: PlayerArmyComponent;
  let fixture: ComponentFixture<PlayerArmyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerArmyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerArmyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
