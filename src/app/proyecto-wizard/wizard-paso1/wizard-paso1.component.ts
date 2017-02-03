import { ProyectoWizardComponent } from '../proyecto-wizard.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProjectDetail } from '../../model/project-detail'
import { Application } from '../../model/application'


@Component({
  selector: 'app-wizard-paso1',
  templateUrl: './wizard-paso1.component.html',
  styleUrls: ['../proyecto-wizard.component.css']
})
export class WizardPaso1Component implements OnInit {

  @Input() proyectoId;
  @Input() projectDetail: ProjectDetail;
  //@Output() next = new EventEmitter();

  private datosBasicos;

  // input fecha desde
  private dateFromInput: string;
  private dateFrom: string = 'hide';

  // input fecha hasta
  private dateToInput: string;
  private dateTo: string = 'hide';

  private apps: any[] = [];
  private appNombreInput: string;
  // private tecs: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  getDatos(): any {
    return this.datosBasicos;
  }

  // Manejo de los datePicker

  setToDateValue(date: Date) {
    this.dateToInput = date.toLocaleString().split(',')[0];
    this.projectDetail.setDateFrom( date );
  }

  setFromDateValue(date: Date) {
    this.dateFromInput = date.toLocaleString().split(',')[0];
    this.projectDetail.setDateTo( date );
  }

  // Manejo del campo de app y tecnologias
  addApp(tecs) {
    let app = { nombre: this.appNombreInput, tecnologias: tecs.tecs.reduce((a, b) => a + ',' + b) };
    tecs.clrTecs();
    this.appNombreInput = '';
    this.apps.push(app);
  }

  removeApp(appname) {
    this.apps = this.apps.filter(a => a.nombre !== appname);
  }

  populateProjectWithStepDetails(){
    console.log( this.dateFromInput );
    this.projectDetail.setDateFrom( new Date( Date.parse(this.dateFromInput) ) );
    console.log( this.dateToInput );
    this.projectDetail.setDateTo( new Date( Date.parse(this.dateToInput) ) );
/*
    this.apps.forEach(function(){
      let application : Application;
      application = new Application("", [""]);
    });
*/
  }
}
