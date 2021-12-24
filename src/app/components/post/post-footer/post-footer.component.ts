import { Component, Input, OnInit } from '@angular/core';
import * as faker from 'faker'

@Component({
  selector: 'post-footer',
  templateUrl: './post-footer.component.html',
  styleUrls: ['./post-footer.component.css']
})
export class PostFooterComponent implements OnInit {

  @Input() username!: string

  pulse: boolean = false
  saveChecked: boolean = false
  likeChecked: boolean = false
  randomUserImage: string = `https://i.pravatar.cc/${faker.datatype.number(1000)}`
  randomUsername: string = faker.internet.userName().toLowerCase()
  randomNumber: number = faker.datatype.number(999)
  commentary: string = faker.lorem.sentence()
  comment: string = ''

  constructor() {
    faker.setLocale('pt_BR')
  }

  ngOnInit(): void {
  }

  changeLikeCheckedValue() {
    this.pulse = true
    this.likeChecked = !this.likeChecked
    setTimeout(() => this.pulse = false, 300)
  }
}
