import { Component, OnInit, Input } from '@angular/core';
import { ProjectDetailService } from '../services/project-detail.service'
import { Project } from '../model/project';
import { ProjectDetail } from '../model/project-detail';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
  providers: [ProjectDetailService],
})
export class ProyectosComponent implements OnInit {
  @Input() project: Project;
  private details: ProjectDetail;

  //En base a algún calculo futuro :: estado: 'bien', 'regular', 'mal'
  private estado: string = 'bien';


  constructor(private _projectDetailService: ProjectDetailService) { }

  ngOnInit() {
    console.log( this.project.name + " : " + this.project._id );
    /*
    this._projectDetailService.getByName( this.project.name ).subscribe(r => this.details = r);
    console.log( this.project._id )
    console.log( this.details )
    */
  }

}
