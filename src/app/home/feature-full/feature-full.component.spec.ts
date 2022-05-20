import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureFullComponent } from './feature-full.component';

describe('FeatureFullComponent', () => {
  let component: FeatureFullComponent;
  let fixture: ComponentFixture<FeatureFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
