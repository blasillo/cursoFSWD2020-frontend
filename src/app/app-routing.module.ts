import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { InicioComponent} from "./componentes/usuario/inicio/inicio.component";
import {LoginComponent} from "./componentes/usuario/login/login.component";
import {RegistroComponent} from "./componentes/usuario/registro/registro.component";
import {EstudianteComponent} from "./componentes/estudiante/estudiante/estudiante.component";
import {ProfesorComponent} from "./componentes/profesor/profesor/profesor.component";
import {AdministradorComponent} from "./componentes/administrador/administrador/administrador.component";
import {NoEncontradoComponent} from "./componentes/error/no-encontrado/no-encontrado.component";
import {NoAutorizadoComponent} from "./componentes/error/no-autorizado/no-autorizado.component";

const routes:Routes = [
  { path:'', redirectTo: 'inicio', pathMatch: 'full'},
  { path:'inicio', component: InicioComponent },
  { path:'login', component: LoginComponent },
  { path:'registro', component: RegistroComponent },
  { path:'estudiante', component: EstudianteComponent },
  { path:'estudiante/:id', component: EstudianteComponent },
  { path: 'profesor', component: ProfesorComponent},
  { path: 'administrador', component: AdministradorComponent},

  {path:'404', component: NoEncontradoComponent},
  {path:'401', component: NoAutorizadoComponent}


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule { }
