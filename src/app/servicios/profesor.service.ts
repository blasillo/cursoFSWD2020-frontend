import { Injectable } from '@angular/core';
import {Usuario} from "../modelos/usuario";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

let PROF_API_URL = "http://localhost:8080/api/v1/profesores/";

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
  usuario: Usuario;
  cabeceras: HttpHeaders;

  constructor(private http: HttpClient) {
    // @ts-ignore
    this.usuario = JSON.parse( localStorage.getItem("usuario"));
    this.ponerCabeceras();
  }



  obtnenerTodosEstudiantesPorProfesor (idProfesor: number): Observable<any> {
    return this.http.get(PROF_API_URL + idProfesor + "/estudiantes",
      {headers: this.cabeceras});
  }

  ponerCabeceras () {
    this.cabeceras = new HttpHeaders({
      authorization: 'Bearer ' + this.usuario.token,
      "Content-Type": "application/json; charset=UTF-8"
    });
  }
}
