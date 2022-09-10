import { Injectable } from '@angular/core';

import {Usuario} from "../modelos/usuario";
import {BehaviorSubject, map, Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RegistroCurso} from "../modelos/registro-curso";

let API_URL = 'http://localhost:8080/api/v1/usuarios/';

let API_ESTUDIANTES_URL = 'http://localhost:8080/api/v1/estudiantes/';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public usuario: Observable<Usuario>;

  private usuarioSubject: BehaviorSubject<Usuario>;

  cabeceras : HttpHeaders;


  constructor( private http: HttpClient) {
    // @ts-ignore
    this.usuarioSubject = new BehaviorSubject<Usuario>( JSON.parse(localStorage.getItem ('usuario')));
    this.usuario = this.usuarioSubject.asObservable();
  }

  public get usuarioValor(): Usuario {
    return this.usuarioSubject.value;
  }

  registroUsuario (usuario:Usuario): Observable<any> {
    return this.http.post( API_URL + "registro", JSON.stringify( usuario),
      {headers: {'Content-Type': 'application/json; charset=UTF-8'}});
  }

  obtenerTodosCursos (): Observable<any> {
    return this.http.get( API_URL + 'cursos',
      {headers: {'Content-Type': 'application/json; charset=UTF-8'}});
  }

  ponerCabeceras () {
    this.cabeceras = new HttpHeaders({
      authorization:'Bearer ' + this.usuarioSubject.value.token,
      "Content-Type": "application/json; charset=UTF-8"
    });

  }



  // @ts-ignore
  login (usuario:Usuario):Observable<any> {
    const cabeceras = new HttpHeaders(
      usuario ? {
        'Authorization':'Basic ' + btoa (usuario.nombreUsuario +':'+ usuario.clave)
      } : {}
    );

    return this.http.get<any> (API_URL + 'login' , {headers: cabeceras})
      .pipe (
        map (response => {
          if (response) {
            localStorage.setItem('usuario',JSON.stringify(response));
            this.usuarioSubject.next(response);
          }
          return response;
        })
      );
  }

  logout (): void {
        localStorage.removeItem('usuario');
        //this.usuarioSubject.next(null);
  }

  inscribirse ( registroCurso : RegistroCurso ): Observable<any> {
    this.ponerCabeceras();
    return this.http.post ( API_ESTUDIANTES_URL + "inscripcion" ,
                                JSON.stringify(registroCurso),
                        {headers: this.cabeceras});
  }

  obtenerCursosEstudiante(idEstudiante: string): Observable<any> {
    this.ponerCabeceras();

    return this.http.get (API_ESTUDIANTES_URL + idEstudiante + "/cursos",
      {headers: this.cabeceras});
  }

}
