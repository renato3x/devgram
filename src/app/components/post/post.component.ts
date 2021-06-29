import { Component, Input, OnInit } from '@angular/core';

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
}
