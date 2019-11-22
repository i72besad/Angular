/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-cli',
  templateUrl: 'angular-cli.component.html',
  styleUrls: ['./angular-cli.component.css']
})
export class AngularCliComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}*/
import {Component, OnInit} from '@angular/core';

export interface PeriodicElement {
  name: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'add', description: 'Añadir paquetes a nuestra aplicación'},
  {name: 'analytics', description: 'Configures the gathering of Angular CLI usage metrics.'},
  {name: 'build', description: 'Compila una aplicación de Angular en un diretorio de salida denominado dist/ en la ruta dada. Debe ejecutarse dentro del directorio del proyecto'},
  {name: 'config', description: 'Modificar el fichero angular.json'},
  {name: 'deploy', description: 'Invoca al constructor para un proyecto específico'},
  {name: 'doc', description: 'Muestra la documentación oficial de Angular'},
  {name: 'e2e', description: 'Construye y sirve la aplicación de Angular, para después ejecutar test e2e usando Protractor'},
  {name: 'generate', description: 'Genera y/o modifica un archivo de Angular'},
  {name: 'help', description: 'Muestra la lista de todos los comandos'},
  {name: 'lint', description: 'Ejecuta test estáticos sobre el código fuente de una carpeta dada'},
  {name: 'new', description: 'Crea un nuevo espacio de trabajo y app inicial de Angular'},
  {name: 'run', description: 'Runs an Architect target with an optional custom builder configuration defined in your project.'},
  {name: 'serve', description: 'Construye y sirve la aplicación, actualizándose en tiempo real'},
  {name: 'test', description: 'Ejecuta tests unitarios sobre el proyecto'},
  {name: 'update', description: 'Actualiza tu aplicación y sus dependencias'},
  {name: 'version', description: 'Muestra tu versión de Angular'},
  {name: 'xi18n', description: '¿¿¿Muestra mensajes i18n desde el código fuente???'}
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-angular-cli',
  templateUrl: 'angular-cli.component.html',
  styleUrls: ['angular-cli.component.css']
})
export class AngularCliComponent {
  displayedColumns: string[] = ['name', 'description'];
  dataSource = ELEMENT_DATA;
}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */