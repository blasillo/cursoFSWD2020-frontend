import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../../modelos/usuario";
import {ProfesorService} from "../../../servicios/profesor.service";

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {

  listaEstudiantes: Array<Usuario>;

  profesor: Usuario;

  constructor( private profesorServicio: ProfesorService) {
    // @ts-ignore
    this.profesor = JSON.parse(localStorage.getItem('usuario'));
  }

  ngOnInit(): void {
    this.obtenerEstudiantes();
  }

  obtenerEstudiantes(){
    this.profesorServicio.obtnenerTodosEstudiantesPorProfesor( this.profesor.idUsuario )
      .subscribe(datos => {
      this.listaEstudiantes = datos;
    });
  }

}
