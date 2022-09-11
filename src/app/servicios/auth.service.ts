import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from "@angular/router";
import {UsuarioService} from "./usuario.service";
import {Usuario} from "../modelos/usuario";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  usuario: Usuario;

  constructor( private usuarioServicio: UsuarioService,
               private router: Router) {

    this.usuarioServicio.usuario.subscribe(
      datos => { this.usuario = datos});


  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)  {
    if (this.usuario){
      if ( route.data['roles'] && route.data['roles'].indexOf(this.usuario.rol) === -1){
        return false;
      }
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
