import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstalacionComponent } from './componentes/instalacion/instalacion.component';
import { HolaMundoComponent } from './componentes/hola-mundo/hola-mundo.component';
import { EjemplosComponent } from './componentes/ejemplos/ejemplos.component';
import { EjerciciosComponent } from './componentes/ejercicios/ejercicios.component';
import { GlosarioComponent } from './componentes/glosario/glosario.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';
import { AngularCliComponent } from './componentes/angular-cli/angular-cli.component';

@NgModule({
  declarations: [
    AppComponent,
    InstalacionComponent,
    HolaMundoComponent,
    EjemplosComponent,
    EjerciciosComponent,
    GlosarioComponent,
    PageNotFoundComponent,
    AngularCliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
