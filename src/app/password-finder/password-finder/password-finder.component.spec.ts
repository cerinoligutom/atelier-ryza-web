import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordFinderComponent } from './password-finder.component';

describe('PasswordFinderComponent', () => {
  let component: PasswordFinderComponent;
  let fixture: ComponentFixture<PasswordFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordFinderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
