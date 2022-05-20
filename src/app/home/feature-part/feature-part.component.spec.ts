import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturePartComponent } from './feature-part.component';

describe('FeaturePartComponent', () => {
  let component: FeaturePartComponent;
  let fixture: ComponentFixture<FeaturePartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturePartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturePartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
