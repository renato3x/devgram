import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { PostModule } from './components/post/post.module';
import { AsideDataComponent } from './components/aside-data/aside-data.component';
import { StoriesModule } from './components/stories/stories.module';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MudarComponent } from './dialog/mudar/mudar.component';
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AsideDataComponent,
    MudarComponent,
    
    
  ],
  imports: [
    BrowserModule,
    PostModule,
    StoriesModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
