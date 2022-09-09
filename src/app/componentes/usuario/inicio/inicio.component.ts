import { Component, OnInit } from '@angular/core';
import {Curso} from "../../../modelos/curso";
import {Usuario} from "../../../modelos/usuario";
import {UsuarioService} from "../../../servicios/usuario.service";
import {Route} from "@angular/router";
import {RegistroCurso} from "../../../modelos/registro-curso";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  listaCursos: Array<Curso> = [];
  mensaje: string = '';
  aviso: string ='';
  usuario: Usuario;


  constructor(private usuarioServicio: UsuarioService) {
    this.usuario = this.usuarioServicio.usuarioValor;
  }

  ngOnInit(): void {
    this.obtenerTodosCursos();
  }

  obtenerTodosCursos(){
    this.usuarioServicio.obtenerTodosCursos().subscribe( datos =>{
      this.listaCursos = datos;
    });
  }

  inscribirse(curso: Curso): void {

      if(!this.usuario){
        this.mensaje = "Hay que iniciar sesión para apuntarse a un curso";
        return;
      }
      var registroCurso = new RegistroCurso();

      registroCurso.curso = curso;
      registroCurso.estudiante = this.usuario;

      this.usuarioServicio.inscribirse( registroCurso).subscribe(
        datos => { this.aviso = "Inscrito."; },
          err => { this.mensaje = "Se ha producido un error.";}
      );
  }



}
