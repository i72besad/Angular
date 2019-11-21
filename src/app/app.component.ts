import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 8';
  secciones = [
    "Instalación",
    "Hola-Mundo",
    "Ejemplos",
    "Ejercicios",
    "Glosario"
  ]
}
