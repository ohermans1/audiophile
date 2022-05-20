import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGroupLinkComponent } from './product-group-link.component';

describe('ProductGroupLinkComponent', () => {
  let component: ProductGroupLinkComponent;
  let fixture: ComponentFixture<ProductGroupLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductGroupLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGroupLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
