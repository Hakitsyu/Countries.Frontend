import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraceRouteCountryComponent } from './trace-route-country.component';

describe('TraceRouteCountryComponent', () => {
  let component: TraceRouteCountryComponent;
  let fixture: ComponentFixture<TraceRouteCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraceRouteCountryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraceRouteCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
