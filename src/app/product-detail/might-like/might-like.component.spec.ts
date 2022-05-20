import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MightLikeComponent } from './might-like.component';

describe('MightLikeComponent', () => {
  let component: MightLikeComponent;
  let fixture: ComponentFixture<MightLikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MightLikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MightLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
