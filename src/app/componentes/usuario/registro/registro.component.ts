import { Component, OnInit } from '@angular/core';

import {Usuario} from '../../../modelos/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: Usuario = new Usuario();

  mensaje: string;



  constructor() { }

  ngOnInit(): void {
  }

}
