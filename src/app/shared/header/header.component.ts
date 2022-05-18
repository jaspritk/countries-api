import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  images: any = [];
  imageIndex: any = 0;

  ngOnInit(): void {

    this.images = ['./assets/light.png', './assets/dark.png']

  }

  toggleTheme() {
    this.imageIndex++;
    if (this.imageIndex === this.images.length) {
      this.imageIndex = 0;
    }
    document.body.classList.toggle('light-theme');
  }

}
