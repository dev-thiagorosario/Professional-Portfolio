import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestmonialsComponent } from './testmonials.component';

describe('TestmonialsComponent', () => {
  let component: TestmonialsComponent;
  let fixture: ComponentFixture<TestmonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestmonialsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestmonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
