import { Component, OnInit } from '@angular/core';
import { SeguridadComponent } from '../shared/seguridad.component';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';
import { ProyectoService } from '../services/proyecto.service'
import { Leader } from '../model/leader'
import { Project } from '../model/project'

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css'],
  providers: [SeguridadComponent, ProyectoService],
})
export class NuevoProyectoComponent extends SeguridadComponent implements OnInit {

  //private firebaseUser: firebase.User;
  private userName: string;
  private userMail: string;
  private projectCode: string;
  private projectName: string;
  private leaderFirstname: string;
  private leaderSurname: string;
  private leaderEmail: string;
  private isSolutionsProject: boolean;
  private isProjectLeader: boolean;
  //  private msjerror: string;
  //  private showError: boolean = false;


  constructor(public router: Router, public af: AngularFire, private _proyectoService: ProyectoService) {
    super(router, af);
    this.isSolutionsProject = false;
    this.isProjectLeader = false;
  }

  ngOnInit() {
  }

  private loggedUser() {
    let userName, userMail;
    this.af.auth.subscribe(
      auth => {
        var firebaseUser: firebase.User;
        firebaseUser = auth.auth;
        userName = firebaseUser.displayName;
        userMail = firebaseUser.email;
      });
      return {userName, userMail};
  }

  private saveNuevoProyecto(): void {
	  let leader;
    let type = this.isSolutionsProject ? 'soluciones' : 'operaciones';
    if( this.isProjectLeader ) {
      let user = this.loggedUser();
      leader = new Leader(user.userName, user.userMail);
    } else {
      let name = this.leaderFirstname + " " + this.leaderSurname;
      leader = new Leader(name, this.leaderEmail);
      //TODO enviar petición para registrarse en la aplicación.
    }
    let proyecto = new Project(this.projectName, this.projectCode, type , leader);
    this._proyectoService.create(proyecto).subscribe(r => console.log(r));
  }

  crearProyecto() {
	  this.saveNuevoProyecto()
    if( this.isProjectLeader ) {
      let routePath = '/wizard/' + this.projectName;
      this.router.navigate([routePath])
    } else {
      console.log("Proyecto asigando a otra persona!");
      this.router.navigate(['/menu'])
    }

	  // this.af.auth.createUser({email:this.email,password:'initial01'})
    // .then((success) => {
    //   console.log(success);
    //   success.auth.sendEmailVerification();
    //   this.router.navigate(['/menu'])})
    // .catch((error) => {
    //     this.msjerror=error.message;
    //     this.showError=true
    // });
  }

}
