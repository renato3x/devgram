import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
    
  {
    path: '',
    pathMatch: 'full',     
    component: HomeComponent
  },

  {
    path: 'soulcodeacademy',
    loadChildren: ()=> import('./components/perfil/perfil.module').then(m=> m.PerfilModule)
  },
  {
    path: 'components',
    loadChildren: ()=> import('./components/component.module').then(m=> m.ComponentModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
  
export class AppRoutingModule { }
