import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  linkRepo = 'https://github.com/i72besad/Angular.git';
  secciones = [
    "Instalación",
    "Arquitectura",
    "Hola-Mundo",
    "Angular-CLI",
    "Ejemplos",
    "Glosario"
  ]
}
