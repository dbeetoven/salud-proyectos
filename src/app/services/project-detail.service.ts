import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { ProjectDetail } from '../model/project-detail';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProjectDetailService {

  //Sacar URLs a archivo properties, o algo así !!!!!
  private backendUrl = 'http://localhost:3000';
  private saveEndpoint = this.backendUrl + '/proyectoDetalle/save';
  private getAllEndpoint = this.backendUrl + '/proyectoDetalle/getAll';
  private getByIdEndpoint = this.backendUrl + '/proyectoDetalle/getById';
  private deleteEndpoint = this.backendUrl + '/proyectoDetalle/delete';
  private updateEndpoint = this.backendUrl + '/proyectoDetalle/update';
  private getByCodeEndpoint = this.backendUrl + '/proyectoDetalle/getByCode';

  constructor(private http:Http) { }

  create(detailedProject: ProjectDetail): Observable<ProjectDetail> {
  		console.log(' *** ProjectDetailService.create() *** ');

      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      let body = JSON.stringify( detailedProject );
      console.log('Se guarda proyecto detallado: ' + body + ' a ' + this.saveEndpoint);
      return Observable.create(observer => {
          this.http.post(this.saveEndpoint, body, options)
              .map((res: Response) => res.json())
              .subscribe((result) => {
                console.log("Se creo el Proyecto Detallado" + body);
                observer.next(result);
                observer.complete();
              });
      });
  }

  getAll(): Observable<ProjectDetail[]> {
    console.log(' *** ProjectDetailService.getAll() *** ');
    console.log('Se solicitan detalles de proyectos. - Url: ' + this.getAllEndpoint);
    return Observable.create(observer => {
        this.http.get(this.getAllEndpoint)
            .map((res: Response) => res.json())
            .subscribe((result) => {
                observer.next(result);
                observer.complete();
            });
    });
  }

  getById(id:string) : Observable<ProjectDetail> {
    console.log(' *** ProjectDetailService.getById() *** ');

    console.log('Se solicita detalle de proyecto id:' + id + '. - Url: ' + this.getByIdEndpoint);
    let idFilter = this.getByIdEndpoint + '/' + id;
    return Observable.create(observer => {
        this.http.get(idFilter)
            .map((res: Response) => res.json())
            .subscribe((result) => {
              observer.next(result);
              observer.complete();
            });
    });
  }

  //Quizá cambiarlo a getByCode ->  agregar code en el modelo. Sii el code es unívoco.
  getByName(code:string) : Observable<ProjectDetail[]> {
    console.log(' *** ProjectDetailService.getByName() *** ');

    console.log('Se solicita detalle de proyecto name:' + code + '. - Url: ' + this.getByCodeEndpoint);
    let idFilter = this.getByCodeEndpoint + '/' + code;
    return Observable.create(observer => {
        this.http.get(idFilter)
            .map((res: Response) => res.json())
            .subscribe((result) => {
              observer.next(result);
              observer.complete();
            });
    });
  }

  delete(id:string) : Observable<ProjectDetail> {
    console.log(' *** ProjectDetailService.delete() *** ');
    console.log('Se borra proyecto id:' + id + '. - Url: ' + this.deleteEndpoint);
    let idFilter = this.deleteEndpoint + '/' + id;
    return Observable.create(observer => {
        this.http.delete(idFilter)
            .map((res: Response) => res.json())
            .subscribe((result) => {
              observer.next(result);
              observer.complete();
            });
    });
  }

  update(id:string, detailedProject:ProjectDetail) : Observable<ProjectDetail> {
    console.log(' *** ProjectDetailService.update() *** ');

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let body = JSON.stringify( detailedProject );
    console.log(body);
    console.log('Se actualiza proyecto id:' + id + '. - Url: ' + this.updateEndpoint);
    let idFilter = this.updateEndpoint + '/' + id;
    return Observable.create(observer => {
        this.http.put(idFilter, body, options)
        .map((res: Response) => res.json())
        .subscribe((result) => {
            observer.next(result);
            observer.complete();
        });
    });
  }
}
