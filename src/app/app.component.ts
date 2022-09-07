import { Component } from '@angular/core';

import { faUser , faHome, faSignIn } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  iconoUsuario = faUser;
  iconoInicio  = faHome;
  iconoLogin   = faSignIn;

  title = 'Cursos';
}

