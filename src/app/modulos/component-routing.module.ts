import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsideDataComponent } from '../components/aside-data/aside-data.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { PostComponent } from '../components/post/post.component';
import { StoriesComponent } from '../components/stories/stories.component';

const routes: Routes = [
{
  path:'aside-data',
  component:AsideDataComponent,
},
  {path:'navbar',
  component:NavbarComponent,
  },
  {path:'post',
  component:PostComponent,
  },
  {path:'stories',
  component:StoriesComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
