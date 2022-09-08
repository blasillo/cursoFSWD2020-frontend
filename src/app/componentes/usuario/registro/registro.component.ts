import { Component, OnInit } from '@angular/core';

import {Usuario} from '../../../modelos/usuario';
import {UsuarioService} from "../../../servicios/usuario.service";
import {Router} from "@angular/router";

import { faUser , faCircleUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: Usuario = new Usuario();

  mensaje: string = '';

  iconoUsuario = faCircleUser;

  constructor(private usuarioServicio : UsuarioService,
              private router: Router) { }

  ngOnInit(): void {
    if ( this.usuarioServicio.usuarioValor) {
      this.router.navigate(['/inicio']);
    }
  }

  registrar (){
    this.usuarioServicio.registroUsuario( this.usuario ).subscribe( datos => {
      this.router.navigate(['/login']);
    },
      err => {this.mensaje = 'El nombre de usuario ya está registrado';});
  }

}
