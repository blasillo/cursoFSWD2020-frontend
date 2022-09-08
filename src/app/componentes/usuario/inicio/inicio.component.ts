import { Component, OnInit } from '@angular/core';
import {Curso} from "../../../modelos/curso";
import {Usuario} from "../../../modelos/usuario";
import {UsuarioService} from "../../../servicios/usuario.service";
import {Route} from "@angular/router";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  listaCursos: Array<Curso> = [];
  mensaje: string = '';
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

}
