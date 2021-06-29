import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'post-header',
  templateUrl: './post-header.component.html',
  styleUrls: ['./post-header.component.css']
})
export class PostHeaderComponent implements OnInit {

  @Input()
  userImageSource!: string

  @Input()
  username!: string

  constructor() { }

  ngOnInit(): void {
  }
}
