import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderBaseTrophiesComponent } from './builder-base-trophies.component';

describe('BuilderBaseTrophiesComponent', () => {
  let component: BuilderBaseTrophiesComponent;
  let fixture: ComponentFixture<BuilderBaseTrophiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuilderBaseTrophiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuilderBaseTrophiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
