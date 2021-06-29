import { Component, OnInit } from '@angular/core';
import * as faker from 'faker'

@Component({
  selector: 'post-image',
  templateUrl: './post-image.component.html',
  styleUrls: ['./post-image.component.css']
})
export class PostImageComponent implements OnInit {

  imageLink: string = this.generateImageLink()

  constructor() { }

  generateImageLink(): string {
    let width = Math.round(Math.random() * 600)
    let height = Math.round(Math.random() * 600)
    
    while (width < 500) {
      width = Math.round(Math.random() * 600)
    }

    while (height < 500) {
      height = Math.round(Math.random() * 600)
    }

    return `https://picsum.photos/${width}/${height}`
  }

  ngOnInit(): void {
  }
}
