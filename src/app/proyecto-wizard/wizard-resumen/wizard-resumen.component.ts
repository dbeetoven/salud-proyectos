import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wizard-resumen',
  templateUrl: './wizard-resumen.component.html',
  styleUrls: ['./wizard-resumen.component.css']
})
export class WizardResumenComponent implements OnInit {

  @Input() proyectoId;

  constructor() { }

  ngOnInit() {
  }

}
