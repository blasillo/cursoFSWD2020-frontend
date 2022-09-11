import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../../modelos/usuario";
import {UsuarioService} from "../../../servicios/usuario.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: Usuario ;

  constructor(private usuarioServicio: UsuarioService,
              private router: Router) {


    // @ts-ignore
    this.usuario = JSON.parse( localStorage.getItem("usuario"));
  }

  ngOnInit(): void {
    if(!this.usuario){
      this.router.navigate(['/login']);
    }
  }

}
