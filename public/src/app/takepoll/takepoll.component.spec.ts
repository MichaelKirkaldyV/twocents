import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakepollComponent } from './takepoll.component';

describe('TakepollComponent', () => {
  let component: TakepollComponent;
  let fixture: ComponentFixture<TakepollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakepollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakepollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
