import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediatorDiplomatMiniFormComponent } from './mediator-diplomat-mini-form.component';

describe('MediatorDiplomatMiniFormComponent', () => {
  let component: MediatorDiplomatMiniFormComponent;
  let fixture: ComponentFixture<MediatorDiplomatMiniFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediatorDiplomatMiniFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediatorDiplomatMiniFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
