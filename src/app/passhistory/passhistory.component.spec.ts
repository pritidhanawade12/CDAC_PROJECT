import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasshistoryComponent } from './passhistory.component';

describe('PasshistoryComponent', () => {
  let component: PasshistoryComponent;
  let fixture: ComponentFixture<PasshistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasshistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasshistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
