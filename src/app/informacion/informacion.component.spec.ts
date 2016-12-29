/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InformacionComponent } from './informacion.component';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';
import { OsdeSaludoAngular2RoutingModule } from '../app-routing.module';
import { MaterialModule } from '@angular/material';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { myFirebaseConfig, myFirebaseAuthConfig } from '../../environments/environment';

describe('Component: Informacion', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformacionComponent],
      providers: [{ provide: Router, useClass: OsdeSaludoAngular2RoutingModule }],
      imports: [
        MaterialModule.forRoot(),
        AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig),
      ]
    });
  })

  it('should create an instance',
    inject([Router, AngularFire], (router: Router, af: AngularFire) => {
      let component = new InformacionComponent(new ActivatedRoute(), router, af);
      expect(component).toBeTruthy();
    }
    ));
});
