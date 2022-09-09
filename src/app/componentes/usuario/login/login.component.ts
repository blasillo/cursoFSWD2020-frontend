import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../../modelos/usuario";
import {UsuarioService} from "../../../servicios/usuario.service";
import {Router} from "@angular/router";
import {faCircleUser} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  iconoUsuario = faCircleUser;

  usuario: Usuario = new Usuario();
  mensaje: string;

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    if ( this.usuarioService.usuarioValor) {
      this.router.navigate(['/inicio']);
      return;
    }
  }

  login(): void{
      this.usuarioService.login(this.usuario).subscribe( datos =>{
        this.router.navigate(['/inicio'])
      },
        error => {this.mensaje ='Usuario o contraseña incorrectos'
      });
  }


}
