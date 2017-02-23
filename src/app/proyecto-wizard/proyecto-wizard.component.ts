import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { MdIconRegistry } from '@angular/material';
import { ProjectDetail } from '../model/project-detail';
import { WizardPaso1Component } from './wizard-paso1/wizard-paso1.component';
import { WizardPaso2Component } from './wizard-paso2/wizard-paso2.component';
import { WizardPaso3Component } from './wizard-paso3/wizard-paso3.component';
import { ProjectDetailService  } from '../services/project-detail.service'


@Component({
  selector: 'app-proyecto-wizard',
  templateUrl: './proyecto-wizard.component.html',
  styleUrls: ['./proyecto-wizard.component.css'],
  viewProviders: [MdIconRegistry,ProjectDetailService],
})
export class ProyectoWizardComponent implements OnInit {
  @ViewChild(WizardPaso1Component)
  private paso1Component: WizardPaso1Component;
  @ViewChild(WizardPaso2Component)
  private paso2Component: WizardPaso2Component;
  @ViewChild(WizardPaso3Component)
  private paso3Component: WizardPaso3Component;

  private id: string;
  private sub: any;
  private projectDetail: ProjectDetail;

  private paso1: string;
  private paso2: string;
  private paso3: string;
  private resumen: string;
  private progress: number = 0;
  siguiente = "siguiente"

  constructor(private activatedRoute: ActivatedRoute,
   mdIconRegistry: MdIconRegistry,
   private detailSerice:ProjectDetailService,
   private route:Router) {
    mdIconRegistry.registerFontClassAlias('emoji', 'em');
    this.paso1 = 'show';
    this.paso2 = 'hide';
    this.paso3 = 'hide';
    this.resumen = 'hide';
    this.projectDetail = new ProjectDetail();
  }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.projectDetail.name = this.id;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  cambiarPaso() {
    if (this.paso1 === 'showPaso') {
      this.paso1 = 'hidePaso';
      this.paso2 = 'showPaso';
      this.paso3 = 'hidePaso';
      this.resumen = 'hidePaso';
    } else if (this.paso2 === 'showPaso') {
      this.paso1 = 'hidePaso';
      this.paso2 = 'hidePaso';
      this.paso3 = 'showPaso';
      this.resumen = 'hidePaso';
    } else if (this.paso3 === 'showPaso') {
      this.paso1 = 'hidePaso';
      this.paso2 = 'hidePaso';
      this.paso3 = 'hidePaso';
      this.resumen = 'showPaso';
    } else {
      this.paso1 = 'showPaso';
      this.paso2 = 'hidePaso';
      this.paso3 = 'hidePaso';
      this.resumen = 'hidePaso';
    }
  }

  next() {
    this.progress += 1;
    console.log('paso');
    switch (this.progress) {
      case 1:
        this.siguiente = "Siguiente";
        this.paso1 = 'hide';
        this.paso2 = 'show';
        this.paso3 = 'hide';
        this.resumen = 'hide';
        this.paso1Component.populateProjectWithStepDetails();
        break;
      case 2:
        this.siguiente = "Siguiente";
        this.paso1 = 'hide';
        this.paso2 = 'hide';
        this.paso3 = 'show';
        this.resumen = 'hide';
        this.paso2Component.populateProjectWithStepDetails();
        break;
      case 3:
        this.siguiente = "Confirmar";
        this.paso1 = 'hide';
        this.paso2 = 'hide';
        this.paso3 = 'hide';
        this.resumen = 'show';
        this.paso3Component.populateProjectWithStepDetails();
        break;
    }

  }

  back() {
    this.progress -= 1;
    console.log('paso');
    switch (this.progress) {
      case 0:
        this.siguiente = "Siguiente";
        this.paso1 = 'show';
        this.paso2 = 'hide';
        this.paso3 = 'hide';
        this.resumen = 'hide';
        break;
      case 1:
        this.siguiente = "Siguiente";
        this.paso1 = 'hide';
        this.paso2 = 'show';
        this.paso3 = 'hide';
        this.resumen = 'hide';
        break;
      case 2:
        this.siguiente = "Siguiente";
        this.paso1 = 'hide';
        this.paso2 = 'hide';
        this.paso3 = 'show';
        this.resumen = 'hide';
        break;
    }
  }

  save(){
    this.detailSerice.create(this.projectDetail).subscribe(r=> this.route.navigate(['/proyecto', this.id ]));
  }
}
