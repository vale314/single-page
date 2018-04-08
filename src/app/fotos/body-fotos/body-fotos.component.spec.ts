import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyFotosComponent } from './body-fotos.component';

describe('BodyFotosComponent', () => {
  let component: BodyFotosComponent;
  let fixture: ComponentFixture<BodyFotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyFotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
