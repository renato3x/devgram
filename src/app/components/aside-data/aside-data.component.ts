import { Component } from '@angular/core';
import * as faker from 'faker'
import { User } from '../../interfaces/user'

@Component({
  selector: 'aside-data',
  templateUrl: './aside-data.component.html',
  styleUrls: ['./aside-data.component.css']
})
export class AsideDataComponent {

  userImageSource: string = '../../../assets/img/me.jpg'
  users: User[] = this.generateUsers()
  year: number = new Date().getFullYear()
  seguir: string[] = this.generateSeguir()

  constructor() {}

  generateUsers() {
    let users: User[] = []

    for (let i = 0; i < 5; i++) {
      users.push({ username: faker.internet.userName().toLowerCase(), userImageSource: `https://i.pravatar.cc/${faker.datatype.number(1000)}` })
    }

    return users
  }

  generateSeguir(): string[]{
    let seguir: string[] = []
    for (let j = 0; j < this.users.length; j++) {
      seguir.push('Seguir')
    } 
    return seguir 
  }

  seguindo(i : number) {
    if(this.seguir[i] == 'Seguir') {
      this.seguir[i] = 'Seguindo'
    } else this.seguir[i] = 'Seguir'
  }
}
