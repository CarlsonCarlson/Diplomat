import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDiplomatMiniFormComponent } from './user-diplomat-mini-form.component';

describe('UserDiplomatMiniFormComponent', () => {
  let component: UserDiplomatMiniFormComponent;
  let fixture: ComponentFixture<UserDiplomatMiniFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDiplomatMiniFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDiplomatMiniFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
