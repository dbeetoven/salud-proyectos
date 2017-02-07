import { Component, OnInit, Input } from '@angular/core';
import { ProjectDetail } from '../../model/project-detail';
import { Activity } from '../../model/activity';
import { Risk } from '../../model/risk';



@Component({
  selector: 'app-wizard-paso3',
  templateUrl: './wizard-paso3.component.html',
  styleUrls: ['../proyecto-wizard.component.css'],
})
export class WizardPaso3Component implements OnInit {

  @Input() proyectoId;
  @Input() projectDetail: ProjectDetail;

  private dateIssue = 'hide';
  private dateIssueInput;

  private issues: any[] = [];
  private accionIssue;
  private descIssue;
  private gdmIssue;

  private actividades: String[] = [];

  constructor() { }

  ngOnInit() {
  }

  // Manejo de datePicker del vencimiento de issue
  setIssueDate(date) {
    this.dateIssueInput = date.toLocaleString().split(',')[0];
  }

  // Manejo del campo actividad
  addActividad(actividad) {
    this.actividades.push(actividad.value);
    actividad.value = '';
  }

  removeActividad(actividad) {
    this.actividades = this.actividades.filter(a => a !== actividad);
  }

  addIssue() {
    let issue = { descripcion: this.descIssue, accion: this.accionIssue, fecha: this.dateIssueInput, gdm: this.gdmIssue };
    this.issues.push(issue);
    this.descIssue = '';
    this.accionIssue = '';
    this.dateIssueInput = '';
    this.gdmIssue = '';
  }

  //callbackfn: (value: String, index: number, array: String[]) => void, thisArg?: anyfunction(actividad)
  populateProjectWithStepDetails(){
    let activities: Activity[] = [];
    this.actividades.forEach(function(actividad: string) {
        activities.push( new Activity(actividad, new Date()) );
    });
    this.projectDetail.activities = activities;

    var risks: Risk[] = [];
    this.issues.forEach(function(riesgo) {
        let fecha = new Date( Date.parse( riesgo.fecha) );
        risks.push( new Risk(riesgo.descripcion, riesgo.accion, fecha, riesgo.gdm) );
    });
    this.projectDetail.risks = risks;
  }
}
