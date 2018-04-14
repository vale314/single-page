import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPComponent } from './show-p.component';

describe('ShowPComponent', () => {
  let component: ShowPComponent;
  let fixture: ComponentFixture<ShowPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
