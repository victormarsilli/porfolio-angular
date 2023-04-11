import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
{path:'inicio',component:InicioComponent},
{path:'contacto',component:ContactoComponent},
{path:'login',component:LoginComponent},
{path:'',redirectTo: '/inicio', pathMatch: 'full'},
{path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
