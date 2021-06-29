import { Component, Input, OnInit } from '@angular/core';
import * as faker from 'faker'

@Component({
  selector: 'post-footer',
  templateUrl: './post-footer.component.html',
  styleUrls: ['./post-footer.component.css']
})
export class PostFooterComponent implements OnInit {

  @Input() username!: string

  randomUserImage: string = faker.image.avatar()
  randomUsername: string = faker.internet.userName().toLowerCase()
  randomNumber: number = faker.datatype.number(3000)
  commentary: string = faker.lorem.sentence()
  comment: string = ''

  constructor() { }

  ngOnInit(): void {
    
  }
}
