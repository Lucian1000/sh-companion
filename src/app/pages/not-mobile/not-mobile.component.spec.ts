import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotMobileComponent } from './not-mobile.component';

describe('NotMobileComponent', () => {
  let component: NotMobileComponent;
  let fixture: ComponentFixture<NotMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
