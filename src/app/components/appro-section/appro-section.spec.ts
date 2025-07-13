import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproSection } from './appro-section';

describe('ApproSection', () => {
  let component: ApproSection;
  let fixture: ComponentFixture<ApproSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApproSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
