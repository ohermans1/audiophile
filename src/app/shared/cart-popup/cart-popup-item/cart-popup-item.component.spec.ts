import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPopupItemComponent } from './cart-popup-item.component';

describe('CartPopupItemComponent', () => {
  let component: CartPopupItemComponent;
  let fixture: ComponentFixture<CartPopupItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartPopupItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPopupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
