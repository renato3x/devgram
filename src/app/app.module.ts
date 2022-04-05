import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { PostModule } from './components/post/post.module';
import { AsideDataComponent } from './components/aside-data/aside-data.component';
import { StoriesModule } from './components/stories/stories.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AsideDataComponent,
   
  ],
  imports: [
    BrowserModule,
    PostModule,
    StoriesModule,
    AppRoutingModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
