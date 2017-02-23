import { Component, OnInit, HostListener } from '@angular/core';
import { SeguridadComponent } from '../shared/seguridad.component';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';
import { ProyectoService } from '../services/proyecto.service'
import { Project } from '../model/project';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [SeguridadComponent, ProyectoService],
})
export class MenuComponent extends SeguridadComponent implements OnInit {

  private proys: Project[];
  private proysView: Project[];
  private proysSource;
  private colNumber: number = 5;
  constructor(public router: Router, public af: AngularFire, private _proyectoService: ProyectoService) {
    super(router, af);
    if (window.innerWidth >= 1200) {
      this.colNumber = 5;
    } else if (window.innerWidth >= 940) {
      this.colNumber = 4;
    } else if (window.innerWidth >= 720) {
      this.colNumber = 3;
    } else if (window.innerWidth >= 576) {
      this.colNumber = 2;
    } else {
      this.colNumber = 1;
    }
  }

  ngOnInit() {
    //this.proys = this.proysSource;
    this._proyectoService.getAll().subscribe(r => this.proysView=this.proys = r);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth >= 1200) {
      this.colNumber = 5;
    } else if (event.target.innerWidth >= 940) {
      this.colNumber = 4;
    } else if (event.target.innerWidth >= 720) {
      this.colNumber = 3;
    } else if (event.target.innerWidth >= 576) {
      this.colNumber = 2;
    } else {
      this.colNumber = 1;
    }
  }

//TODO refactor del filtro, todo a partir del modelo.

  filtrar(filtro) {
    console.log(filtro);
  /*  this.proysview = this.proys.filter(proy => {
      if (filtro.estado === '') {
        return true;
      } else {
        return filtro.estado === proy.;
      }
    });*/
    this.proysView = this.proys.filter(proy => {
      if (filtro.tipo === '') {
        return true;
      } else {
        return filtro.tipo === proy.type;
      }
    });
  }

}
