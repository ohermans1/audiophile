import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedProductMainComponent } from './featured-product-main.component';

describe('FeaturedProductMainComponent', () => {
  let component: FeaturedProductMainComponent;
  let fixture: ComponentFixture<FeaturedProductMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedProductMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedProductMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
