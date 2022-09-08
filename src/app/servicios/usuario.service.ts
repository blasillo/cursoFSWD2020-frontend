import { Injectable } from '@angular/core';

import {Usuario} from "../modelos/usuario";
import {BehaviorSubject, map, Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

let API_URL = 'http://localhost:8080/api/v1/usuarios/';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public usuario: Observable<Usuario>;

  private usuarioSubject: BehaviorSubject<Usuario>;


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



  // @ts-ignore
  login (usuario:Usuario):Observable<any> {
    const cabeceras = new HttpHeaders(
      usuario ? {
        'authorization':'Basic ' + btoa (usuario.nombreUsuario +':'+ usuario.clave)
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
}
