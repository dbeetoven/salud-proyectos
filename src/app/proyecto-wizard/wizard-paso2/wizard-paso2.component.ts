import { Component, OnInit, Input } from '@angular/core';
import { ProjectDetail } from '../../model/project-detail';

@Component({
  selector: 'app-wizard-paso2',
  templateUrl: './wizard-paso2.component.html',
  styleUrls: ['../proyecto-wizard.component.css']
})
export class WizardPaso2Component implements OnInit {

  @Input() proyectoId;
  @Input() projectDetail: ProjectDetail;


  constructor() { }

  ngOnInit() {
  }

}
