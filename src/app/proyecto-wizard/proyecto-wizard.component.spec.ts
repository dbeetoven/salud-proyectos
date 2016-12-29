/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProyectoWizardComponent } from './proyecto-wizard.component';
import { ActivatedRoute } from '@angular/router';
import { AngularFire } from 'angularfire2';
import { MdIconRegistry } from '@angular/material';

describe('Component: ProyectoWizard', () => {
  it('should create an instance', inject([ActivatedRoute,MdIconRegistry],(ar:ActivatedRoute,mdi:MdIconRegistry) => {
    let component = new ProyectoWizardComponent(ar,mdi);
    expect(component).toBeTruthy();
  }));
});
