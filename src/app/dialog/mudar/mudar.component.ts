import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../../interfaces/user'


@Component({
  selector: 'app-mudar',
  templateUrl: './mudar.component.html',
  styleUrls: ['./mudar.component.css']
})
export class MudarComponent implements OnInit {

  userImageSource: string = '../../../assets/img/me.jpg'

  constructor(
    public dialogRef: MatDialogRef<MudarComponent>,
  ) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
