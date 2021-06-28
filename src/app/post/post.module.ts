import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from '../components/post/post.component';
import { PostHeaderComponent } from '../components/post/post-header/post-header.component';
import { PostImageComponent } from '../components/post/post-image/post-image.component';
import { PostFooterComponent } from '../components/post/post-footer/post-footer.component';
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
    PostComponent,
    PostHeaderComponent,
    PostImageComponent,
    PostFooterComponent
  ]
})
export class PostModule { }
