import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { InstalacionComponent } from './componentes/instalacion/instalacion.component';
import { HolaMundoComponent } from './componentes/hola-mundo/hola-mundo.component';
import { ArquitecturaComponent } from './componentes/arquitectura/arquitectura.component';
import { AngularCliComponent } from './componentes/angular-cli/angular-cli.component';
import { EjemplosComponent } from './componentes/ejemplos/ejemplos.component';
import { GlosarioComponent } from './componentes/glosario/glosario.component';
import { AboutUsComponent } from './componentes/about-us/about-us.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';


const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload'
};

const routes: Routes = [
  {path: '', pathMatch: "full", redirectTo: '', component: HomeComponent},
  {path: 'instalación', component: InstalacionComponent},
  {path: 'arquitectura', component: ArquitecturaComponent},
  {path: 'hola-mundo', component: HolaMundoComponent},
  {path: 'angular-cli', component: AngularCliComponent},
  {path: 'ejemplos', component: EjemplosComponent},
  {path: 'glosario', component: GlosarioComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,
                                  InstalacionComponent, 
                                  HolaMundoComponent,
                                  ArquitecturaComponent,
                                  AngularCliComponent,
                                  EjemplosComponent,
                                  GlosarioComponent,
                                  AboutUsComponent,
                                  PageNotFoundComponent]
