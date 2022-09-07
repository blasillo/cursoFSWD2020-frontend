import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    NoAutorizadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
