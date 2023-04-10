import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ErrorComponent } from './components/error/error.component';


const routes: Routes = [
{path:'',component:inicioComponent},
{path:'',redirectTo:'/'},
{path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
