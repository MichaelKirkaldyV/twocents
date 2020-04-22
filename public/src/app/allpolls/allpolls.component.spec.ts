import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpollsComponent } from './allpolls.component';

describe('AllpollsComponent', () => {
  let component: AllpollsComponent;
  let fixture: ComponentFixture<AllpollsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllpollsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllpollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
