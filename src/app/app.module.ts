import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { PostModule } from './components/post/post.module';
import { AsideDataComponent } from './components/aside-data/aside-data.component';
import { StoriesModule } from './components/stories/stories.module';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AsideDataComponent
  ],
  imports: [
    BrowserModule,
    PostModule,
    StoriesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
