import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  instagramLogoSource: string =  'https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
  userImageSource: string = '../../../assets/img/me.jpg'

  constructor() { }

  ngOnInit(): void {
  }
}