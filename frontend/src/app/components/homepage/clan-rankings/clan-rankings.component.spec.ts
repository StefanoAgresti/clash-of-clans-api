import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanRankingsComponent } from './clan-rankings.component';

describe('ClanRankingsComponent', () => {
  let component: ClanRankingsComponent;
  let fixture: ComponentFixture<ClanRankingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClanRankingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClanRankingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
