import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/usuario/login/login.component';
import { RegistroComponent } from './componentes/usuario/registro/registro.component';
import { PerfilComponent } from './componentes/usuario/perfil/perfil.component';
import { InicioComponent } from './componentes/usuario/inicio/inicio.component';
import { ProfesorComponent } from './componentes/profesor/profesor/profesor.component';
import { EstudianteComponent } from './componentes/estudiante/estudiante/estudiante.component';
import { AdministradorComponent } from './componentes/administrador/administrador/administrador.component';
import { NoEncontradoComponent } from './componentes/error/no-encontrado/no-encontrado.component';
import { NoAutorizadoComponent } from './componentes/error/no-autorizado/no-autorizado.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    PerfilComponent,
    InicioComponent,
    ProfesorComponent,
    EstudianteComponent,
    AdministradorComponent,
    NoEncontradoComponent,
    NoAutorizadoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
