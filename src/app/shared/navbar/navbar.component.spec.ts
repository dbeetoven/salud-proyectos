/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';

describe('Component: Navbar', () => {
  it('should create an instance', inject([Router, AngularFire], (router: Router, af: AngularFire) => {
    let component = new NavbarComponent(router, af);
    expect(component).toBeTruthy();
  }));
});
