import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { PostModule } from './components/post/post.module';
import { AsideDataComponent } from './components/aside-data/aside-data.component';
import { StoriesModule } from './components/stories/stories.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { PerfilComponent } from './components/perfil/perfil.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AsideDataComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    PostModule,
    StoriesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
