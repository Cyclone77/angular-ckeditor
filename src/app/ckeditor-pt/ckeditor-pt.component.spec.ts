import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CkeditorPtComponent } from './ckeditor-pt.component';

describe('CkeditorPtComponent', () => {
  let component: CkeditorPtComponent;
  let fixture: ComponentFixture<CkeditorPtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CkeditorPtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CkeditorPtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
