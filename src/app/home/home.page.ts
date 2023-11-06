import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {
    document.addEventListener('touchmove', ev => {      
      console.log(ev.touches);
    });
  }

  public slideChanged(ev: any): void {
    console.log('Slide changed', ev);
  }
}



