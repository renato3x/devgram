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

  //Aqui foi necessário criar duas variáveis para controlar se os botões são visíveis ou não, o a esquerda desaparece quando a rolagem ainda não foi iniciada e o da direita desaparece quando a rolagem chegou ao fim
  rightScroll: boolean = true
  leftScroll: boolean = false
  //foi necessário também manipular o scroll a partir do .ts, então precisamos trazer uma referência ao elemento aqui
  @ViewChild('scrollMe') scrollMe!: ElementRef;

  constructor() {}

  generateStories(): User[] {
    let storiesQuantity = 0

    //aumentei a quantidade mínima de stories para que sempre seja gerada uma rolagem
    while (storiesQuantity < 16) {
      storiesQuantity = faker.datatype.number(50)
    }

    let users: User[] = []

    for (let i = 0; i < storiesQuantity; i++) {
      users.push({ username: faker.internet.userName().toLowerCase(), userImageSource: `https://i.pravatar.cc/${faker.datatype.number(1000)}` })
    }

    return users
  }

  // as funções abaixo manipulam as ações realizadas com o botão de rolagem
  scroll(){
    this.leftScroll = true;
    let i = 0;
    let position = this.scrollMe.nativeElement.scrollLeft
    //usei o setInterval porque não consegui fazer com que o scroll fosse gradativo, então fiz com que o scroll fosse "arrastado" aos poucos
    let time = setInterval(()=>
      {
        this.scrollMe.nativeElement.scrollLeft += 8;
        i++;
        if (this.scrollMe.nativeElement.scrollLeft == position) this.rightScroll = false;
        else position = this.scrollMe.nativeElement.scrollLeft
        if (i==75) clearInterval(time)  
      },
      10
    )
  }

  scrollBack(){
    this.rightScroll =true;
    let i = 0;
    let time = setInterval(()=>
      {
        this.scrollMe.nativeElement.scrollLeft -= 8;
        i++;
        if (i==75) clearInterval(time)  
      },
      10
    )
    let time2 = setTimeout(() => {
      if(this.scrollMe.nativeElement.scrollLeft == 0){
        this.leftScroll = false
      }
    }, 760);
  }

}
