import { Component } from '@angular/core';

import { faUser , faHome, faSignIn } from '@fortawesome/free-solid-svg-icons';
import {UsuarioService} from "./servicios/usuario.service";
import {Router} from "@angular/router";
import {Usuario} from "./modelos/usuario";
import {Rol} from "./modelos/rol";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  usuario: Usuario;

  iconoUsuario = faUser;
  iconoInicio  = faHome;
  iconoLogin   = faSignIn;

  title = 'Cursos';

  constructor(private usuarioServicio: UsuarioService, private router: Router){
    this.usuarioServicio.usuario.subscribe( datos => {
      this.usuario = datos;
    });
  }

  logOut() {
    this.usuarioServicio.logout();
    this.router.navigate(['/']);
  }

  get esEstudiante() {
    return this.usuario && this.usuario.rol === Rol.ESTUDIANTE;
  }

  get esProfesor() {
    return this.usuario && this.usuario.rol === Rol.PROFESOR;
  }

  get esAdministrador() {
    return this.usuario && this.usuario.rol === Rol.ADMINISTRADOR;
  }




}

