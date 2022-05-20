import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureBannerComponent } from './feature-banner.component';

describe('FeatureBannerComponent', () => {
  let component: FeatureBannerComponent;
  let fixture: ComponentFixture<FeatureBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
