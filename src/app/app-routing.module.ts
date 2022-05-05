import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { PerfilComponent } from './components/perfil/perfil.component';
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
  
  
  {
    path: '',
    pathMatch: 'full',     
    component: HomeComponent
  },

  {
    path: 'soulcodeacademy',
    component: PerfilComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
  
export class AppRoutingModule { }
