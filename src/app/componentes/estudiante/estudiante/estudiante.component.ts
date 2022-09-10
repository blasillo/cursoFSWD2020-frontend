import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../../modelos/usuario";
import {Curso} from "../../../modelos/curso";
import {ActivatedRoute} from "@angular/router";
import {UsuarioService} from "../../../servicios/usuario.service";

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  idEstudiante: string | null;
  estudiante: Usuario;
  listaCursos: Array<Curso>;


  constructor ( private route: ActivatedRoute, private usuarioServicio: UsuarioService) {
    // @ts-ignore
    this.estudiante = JSON.parse(localStorage.getItem("usuario"));
  }

  ngOnInit():void {
    this.route.paramMap.subscribe(params => {
      if(params.has('id')){
        this.idEstudiante = params.get('id');
      }

      if(this.idEstudiante || this.estudiante) {
        this.obtenerCursosEstudiante();
      }
    });
  }

  obtenerCursosEstudiante(){
    if(!this.idEstudiante){
      this.idEstudiante = this.estudiante.idUsuario.toString();
    }
    this.usuarioServicio.obtenerCursosEstudiante(this.idEstudiante).subscribe(
      datos => { this.listaCursos = datos; });
  }





}
