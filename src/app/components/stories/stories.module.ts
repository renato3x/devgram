import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoriesComponent } from './stories.component';

@NgModule({
  declarations: [
    StoriesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StoriesComponent
  ]
})
export class StoriesModule { }
