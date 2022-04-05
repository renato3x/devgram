import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import * as faker from 'faker'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pagina: number = 5
  users: User[] = []
  contador: number = 0

  obs: ScrollIntoViewOptions | undefined

  constructor() {
    faker.setLocale('pt_BR')
  }


  generateFakeData() {

      return ({ username: faker.internet.userName().toLowerCase(), userImageSource: `https://i.pravatar.cc/${faker.datatype.number(1000)}` })
    

    /* users.push({
      username: 'renato3x',
      userImageSource: '../assets/img/me.jpg'
    }) */

    //return users
  }

  ngOnInit(): void {
     let i = 0
    while(i < 5){
      this.users.push(this.generateFakeData())

      i++
    } 
  }

   onScroll(){

     this.contador ++;
     
    if(this.contador > 10){
      this.NewPost()
      this.contador = 0
    }
    



  }

  NewPost(): void{
    this.users.push(this.generateFakeData()) 
  }

  
}
