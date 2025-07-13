import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChantierDashboard } from './chantier-dashboard';

describe('ChantierDashboard', () => {
  let component: ChantierDashboard;
  let fixture: ComponentFixture<ChantierDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChantierDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChantierDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
