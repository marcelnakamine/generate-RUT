import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateRutComponent } from './generate-rut.component';

describe('GenerateRutComponent', () => {
  let component: GenerateRutComponent;
  let fixture: ComponentFixture<GenerateRutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateRutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateRutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
