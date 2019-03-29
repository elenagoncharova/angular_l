import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingInComponent } from './routing-in.component';

describe('RoutingInComponent', () => {
  let component: RoutingInComponent;
  let fixture: ComponentFixture<RoutingInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
