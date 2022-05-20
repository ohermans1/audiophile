import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MightLikeCardComponent } from './might-like-card.component';

describe('MightLikeCardComponent', () => {
  let component: MightLikeCardComponent;
  let fixture: ComponentFixture<MightLikeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MightLikeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MightLikeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
