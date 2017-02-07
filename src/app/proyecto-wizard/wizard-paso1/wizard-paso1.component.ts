import { ProyectoWizardComponent } from '../proyecto-wizard.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProjectDetail } from '../../model/project-detail';
import { Application } from '../../model/application';
import { ClientRelation } from '../../model/enums/client-relation.enum';


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

  //input nombre lider cliente
  private clientNameInput: string;

  //select relacien con cliente
  private clientRelation: number;

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
    console.log(">>>>>" + this.dateToInput)
  }

  setFromDateValue(date: Date) {
    this.dateFromInput = date.toLocaleString().split(',')[0];
    console.log(">>>>>" + this.dateFromInput)
  }

  // Manejo del campo de app y tecnologias
  addApp(tecs) {
    let app = { nombre: this.appNombreInput, tecnologias: tecs.tecs.reduce((a, b) => a + ',' + b) };
    tecs.clrTecs();
    //this.appNombreInput = '';
    this.apps.push(app);
  }

  removeApp(appname) {
    this.apps = this.apps.filter(a => a.nombre !== appname);
  }


  populateProjectWithStepDetails(){
    this.projectDetail.clientLeaderName = this.clientNameInput;
    this.projectDetail.dateFrom = new Date( Date.parse(this.dateFromInput) ) ;
    console.log(">>>>>" + this.dateToInput)
    this.projectDetail.dateTo = new Date( Date.parse(this.dateToInput) ) ;
    console.log(">>>>>" + this.projectDetail.dateTo)
    this.projectDetail.clientRelation = this.clientRelation;
    /*
    if ( this.clientRelation == 0 ) {
        this.projectDetail.clientRelation = ClientRelation.NICE;
    } else if ( this.clientRelation == 1 ) {
      this.projectDetail.clientRelation = ClientRelation.VERY_GOOD;
    } else if ( this.clientRelation == -1 ) {
      this.projectDetail.clientRelation = ClientRelation.VERY_BAD;
    }*/
    let applications: Application[] = [];
    this.apps.forEach(function(app) {
        applications.push( new Application(app.nombre, app.tecnologias) );
    });
    this.projectDetail.applications = applications;
  }
}
