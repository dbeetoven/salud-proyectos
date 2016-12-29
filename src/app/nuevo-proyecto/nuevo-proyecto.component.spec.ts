/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NuevoProyectoComponent } from './nuevo-proyecto.component';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';
import { FormsModule } from '@angular/forms';
import { OsdeSaludoAngular2RoutingModule } from '../app-routing.module';
import { MaterialModule } from '@angular/material';

describe('Component: NuevoProyecto', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoProyectoComponent],
      providers: [{ provide: Router, useClass: OsdeSaludoAngular2RoutingModule }],
      imports: [
        FormsModule,
        MaterialModule.forRoot()      ]
    });
  })

  it('should create an instance', inject([Router], (router: Router, NaN) => {
    let component = new NuevoProyectoComponent(router, NaN);
    expect(component).toBeTruthy();
  }));
});
