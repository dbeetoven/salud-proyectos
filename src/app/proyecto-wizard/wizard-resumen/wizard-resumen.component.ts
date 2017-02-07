import { Component, OnInit, Input } from '@angular/core';
import { ProjectDetail } from '../../model/project-detail';
import { Application } from '../../model/application';


@Component({
  selector: 'app-wizard-resumen',
  templateUrl: './wizard-resumen.component.html',
  styleUrls: ['./wizard-resumen.component.css']
})
export class WizardResumenComponent implements OnInit {

  @Input() proyectoId;
  @Input() projectDetail: ProjectDetail;

  private apps: Application[];

  constructor() {
    //this.apps = this.projectDetail.applications;
  }

  ngOnInit() {

  }

}
