import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediatorDashboardComponent } from './mediator-dashboard.component';

describe('MediatorDashboardComponent', () => {
  let component: MediatorDashboardComponent;
  let fixture: ComponentFixture<MediatorDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediatorDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediatorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
