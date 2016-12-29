/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PerfilUsuarioComponent } from './perfil-usuario.component';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';
import { OsdeSaludoAngular2RoutingModule } from '../app-routing.module';
import { MaterialModule } from '@angular/material';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { myFirebaseConfig, myFirebaseAuthConfig } from '../../environments/environment';

describe('Component: PerfilUsuario', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilUsuarioComponent],
      providers: [{ provide: Router, useClass: OsdeSaludoAngular2RoutingModule }],
      imports: [
        MaterialModule.forRoot(),
        AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig),
      ]
    });
  });

  it('should create an instance', inject([Router, AngularFire], (router: Router, af: AngularFire) => {
    let component = new PerfilUsuarioComponent(router, af);
    expect(component).toBeTruthy();
  }));
});
