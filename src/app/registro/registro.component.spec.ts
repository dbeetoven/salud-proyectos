/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RegistroComponent } from './registro.component';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';

describe('Component: Registro', () => {
  it('should create an instance', inject([Router,AngularFire],(router:Router,af:AngularFire) => {
    let component = new RegistroComponent(router,af);
    expect(component).toBeTruthy();
  }));
});
