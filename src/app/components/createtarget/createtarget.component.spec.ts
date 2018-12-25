import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetargetComponent } from './createtarget.component';

describe('CreatetargetComponent', () => {
  let component: CreatetargetComponent;
  let fixture: ComponentFixture<CreatetargetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatetargetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
