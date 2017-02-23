import { Component, OnInit, Input } from '@angular/core';
import {Project} from '../model/project'
import {ProjectDetail} from '../model/project-detail'
import {ProyectoService} from '../services/proyecto.service'
import {ProjectDetailService} from '../services/project-detail.service'

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css'],
  providers:[ProyectoService,ProjectDetailService]
})
export class ResumenComponent implements OnInit {

  constructor(private proyectoService:ProyectoService) { }

  @Input()
  public proyectoId:string;
  @Input()
  public resumen:ProjectDetail;

  private proyecto:Project;

  ngOnInit() {
    this.proyectoService.getById(this.proyectoId).subscribe(r=>
      {
        this.proyecto=r;
      }
    );
  }

  public dateFromTo():string{
    return this.resumen.dateFrom + "->" + this.resumen.dateTo;
  }

}
