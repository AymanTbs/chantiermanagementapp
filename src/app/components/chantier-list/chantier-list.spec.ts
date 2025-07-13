import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChantierList } from './chantier-list';

describe('ChantierList', () => {
  let component: ChantierList;
  let fixture: ComponentFixture<ChantierList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChantierList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChantierList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
