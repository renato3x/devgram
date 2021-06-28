import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'post-footer',
  templateUrl: './post-footer.component.html',
  styleUrls: ['./post-footer.component.css']
})
export class PostFooterComponent implements OnInit {

  userImageSource: string = '../../../../assets/img/user.jpg'
  comment: string = ''

  constructor() { }

  ngOnInit(): void {
    
  }
}
