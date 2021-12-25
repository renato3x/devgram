import { Component, ElementRef, ViewChild } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import * as faker from 'faker'

@Component({
  selector: 'stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent {

  users: User[] = this.generateStories()

  constructor() {}

  generateStories(): User[] {
    let storiesQuantity = 0

    while (storiesQuantity < 9) {
      storiesQuantity = faker.datatype.number(50)
    }

    let users: User[] = []

    for (let i = 0; i < storiesQuantity; i++) {
      users.push({ username: faker.internet.userName().toLowerCase(), userImageSource: `https://i.pravatar.cc/${faker.datatype.number(1000)}` })
    }

    return users
  }
}
