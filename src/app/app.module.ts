import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { myFirebaseAuthConfig, myFirebaseConfig } from '../environments/environment';
import { OsdeSaludoAngular2RoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { InformacionComponent } from './informacion/informacion.component';
import { LoginComponent } from './login/login.component';
import { MenuFiltrosComponent } from './menu-filtros/menu-filtros.component';
import { MenuComponent } from './menu/menu.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { NuevoProyectoComponent } from './nuevo-proyecto/nuevo-proyecto.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { ProyectoWizardComponent } from './proyecto-wizard/proyecto-wizard.component';
import { WizardPaso1Component } from './proyecto-wizard/wizard-paso1/wizard-paso1.component';
import { WizardPaso2Component } from './proyecto-wizard/wizard-paso2/wizard-paso2.component';
import { WizardPaso3Component } from './proyecto-wizard/wizard-paso3/wizard-paso3.component';
import { WizardResumenComponent } from './proyecto-wizard/wizard-resumen/wizard-resumen.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { RegistroComponent } from './registro/registro.component';
import { ResumenComponent } from './resumen/resumen.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { VerProyectoComponent } from './ver-proyecto/ver-proyecto.component';



@NgModule({
  declarations: [
    AppComponent,
    NuevoProyectoComponent,
    MenuComponent,
    LoginComponent,
    NavbarComponent,
    ProyectosComponent,
    PerfilUsuarioComponent,
    RegistroComponent,
    InformacionComponent,
    MenuFiltrosComponent,
    VerProyectoComponent,
    ProyectoWizardComponent,
    CalendarioComponent,
    MultiSelectComponent,
    WizardPaso1Component,
    WizardPaso2Component,
    WizardPaso3Component,
    WizardResumenComponent,
    ResumenComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    OsdeSaludoAngular2RoutingModule,
    AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig),
    MaterialModule.forRoot(),
 //   SelectModule
  ],
  providers: [OsdeSaludoAngular2RoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
