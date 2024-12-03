import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalCardComponent } from './principal-card.component';

describe('PrincipalCardComponent', () => {
  let component: PrincipalCardComponent;
  let fixture: ComponentFixture<PrincipalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
