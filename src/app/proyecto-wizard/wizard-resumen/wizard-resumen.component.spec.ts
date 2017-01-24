/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WizardResumenComponent } from './wizard-resumen.component';

describe('WizardResumenComponent', () => {
  let component: WizardResumenComponent;
  let fixture: ComponentFixture<WizardResumenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardResumenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
