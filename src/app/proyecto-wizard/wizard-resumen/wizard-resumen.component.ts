import { Component, OnInit, Input } from '@angular/core';
import { ProjectDetail } from '../../model/project-detail';

@Component({
  selector: 'app-wizard-resumen',
  templateUrl: './wizard-resumen.component.html',
  styleUrls: ['./wizard-resumen.component.css']
})
export class WizardResumenComponent implements OnInit {

  @Input() proyectoId;
  @Input() projectDetail: ProjectDetail;

  constructor() {

  }

  ngOnInit() {
    console.log( this.projectDetail.getDateFrom() );
    console.log( this.projectDetail.getDateTo() );
  }

}
