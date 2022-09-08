import { Component, OnInit } from '@angular/core';

import {Usuario} from '../../../modelos/usuario';
import {UsuarioService} from "../../../servicios/usuario.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: Usuario = new Usuario();

  mensaje: string = '';



  constructor(private usuarioServicio : UsuarioService,
              private router: Router) { }

  ngOnInit(): void {
    //if ( this.usuarioServicio.)
  }

}
