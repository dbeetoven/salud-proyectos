/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFire } from 'angularfire2';
import { OsdeSaludoAngular2RoutingModule } from '../app-routing.module';
import { MaterialModule } from '@angular/material';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { myFirebaseConfig, myFirebaseAuthConfig } from '../../environments/environment';

describe('Component: Login', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [{ provide: Router, useClass: OsdeSaludoAngular2RoutingModule }],
      imports: [
        FormsModule,
        MaterialModule.forRoot()      ]
    });
  })

  it('should create an instance', inject([Router], (router: Router, Nan) => {
    let component = new LoginComponent(router, Nan);
    expect(component).toBeTruthy();
  }));
});
