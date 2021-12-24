import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { PostHeaderComponent } from './post-header/post-header.component';
import { PostImageComponent } from './post-image/post-image.component';
import { PostFooterComponent } from './post-footer/post-footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PostComponent,
    PostHeaderComponent,
    PostImageComponent,
    PostFooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PostComponent
  ]
})
export class PostModule { }
