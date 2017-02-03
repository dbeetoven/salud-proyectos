import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Project } from '../model/project';
import { Observable } from 'rxjs/Observable';
//Se puede separar en otro archivos !
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProyectoService {

  //Sacar URLs a archivo properties, o algo así !!!!!
  private backendUrl = 'http://localhost:3000';
  private saveEndpoint = this.backendUrl + '/proyecto/save';
  private getAllEndpoint = this.backendUrl + '/proyecto/getAll';
  private getByIdEndpoint = this.backendUrl + '/proyecto/getById';
  private deleteEndpoint = this.backendUrl + '/proyecto/delete';
  private updateEndpoint = this.backendUrl + '/proyecto/update';

  constructor(private http:Http) { };

  create(proyecto: Project): Observable<Project> {
  		console.log(' *** ProyectoService.create() *** ');

      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      let body = JSON.stringify( proyecto );
      console.log('Se guarda proyecto: ' + body + ' a ' + this.saveEndpoint);
      return Observable.create(observer => {
          this.http.post(this.saveEndpoint, body, options)
              .map((res: Response) => res.json())
              .subscribe((result) => {
                console.log("Se creo el Proyecto" + body);
                observer.next(result);
                observer.complete();
              });
      });
  }

  getAll(): Observable<Project[]> {
    console.log(' *** ProyectoService.getAll() *** ');
    console.log('Se solicitan proyectos. - Url: ' + this.getAllEndpoint);
    return Observable.create(observer => {
        this.http.get(this.getAllEndpoint)
            .map((res: Response) => res.json())
            .subscribe((result) => {
                observer.next(result);
                observer.complete();
            });
    });
  }

  getById(id:string) : Observable<Project> {
    console.log(' *** ProyectoService.getById() *** ');

    console.log('Se solicita proyecto id:' + id + '. - Url: ' + this.getByIdEndpoint);
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

  delete(id:string) : Observable<Project> {
    console.log(' *** ProyectoService.delete() *** ');
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

  update(id:string, proyecto:Project) : Observable<Project> {
    console.log(' *** ProyectoService.update() *** ');

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let body = JSON.stringify( proyecto );
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


  		/**
function fetchImage(url){
    return new Promise(function(resolve, reject){
        var img = new Image()
        img.onload = function(){
            resolve(url)
        }
        img.onerror = function(){
            reject(url)
        }
        img.src = url
    })
}
  		*/

}
