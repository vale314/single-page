import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFotosComponent } from './header-fotos.component';

describe('HeaderFotosComponent', () => {
  let component: HeaderFotosComponent;
  let fixture: ComponentFixture<HeaderFotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderFotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
