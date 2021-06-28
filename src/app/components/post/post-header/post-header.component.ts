import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'post-header',
  templateUrl: './post-header.component.html',
  styleUrls: ['./post-header.component.css']
})
export class PostHeaderComponent implements OnInit {

  userImageSource: string = '../../../../assets/img/user.jpg'

  constructor() { }

  ngOnInit(): void {
  }

}
