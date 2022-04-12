import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as faker from 'faker'
import { MudarComponent } from 'src/app/dialog/mudar/mudar.component';
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

  constructor(
    public dialog: MatDialog
  ) {}

  generateUsers() {
    let users: User[] = []

    for (let i = 0; i < 5; i++) {
      users.push({ username: faker.internet.userName().toLowerCase(), userImageSource: `https://i.pravatar.cc/${faker.datatype.number(1000)}` })
    }

    return users
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MudarComponent, {
       
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog foi fechado');
      
    });
  }


}
