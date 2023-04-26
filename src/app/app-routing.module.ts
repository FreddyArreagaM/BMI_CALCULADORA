import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ResultadoComponent } from './components/resultado/resultado.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'resultado/:valor', component: ResultadoComponent },
  { path: '**', redirectTo: '' }//Esto permite redireccionar a la pagina principal cuando se escriba
  //una ruta que no tiene nada que ver.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
