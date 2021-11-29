import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegproModalComponent } from './regpro-modal.component';

describe('RegproModalComponent', () => {
  let component: RegproModalComponent;
  let fixture: ComponentFixture<RegproModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegproModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegproModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
