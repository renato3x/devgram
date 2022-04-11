import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PostFooterComponent } from './post-footer/post-footer.component';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  username!: string

  @Input()
  userImageSource!: string

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(PostFooterComponent) postFooterComponent: any;
  changeLikeCheckedValue(): void {
    this.postFooterComponent.changeLikeCheckedValue();
  }
}
