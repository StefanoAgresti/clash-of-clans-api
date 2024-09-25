import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbArmyComponent } from './bb-army.component';

describe('BbArmyComponent', () => {
  let component: BbArmyComponent;
  let fixture: ComponentFixture<BbArmyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BbArmyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BbArmyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
