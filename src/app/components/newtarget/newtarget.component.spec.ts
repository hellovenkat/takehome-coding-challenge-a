import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtargetComponent } from './newtarget.component';

describe('NewtargetComponent', () => {
  let component: NewtargetComponent;
  let fixture: ComponentFixture<NewtargetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewtargetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
