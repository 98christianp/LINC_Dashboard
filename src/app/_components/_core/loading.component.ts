import { Component, OnInit } from '@angular/core';

// Loading component, used to show the loading svg animation
@Component({
  selector: 'app-loading',
  template: `
    <img src="/assets/loading.svg">
  `,
  styles: [`
    :host {
      display: block;
    }
    img {
      display: block;
      margin: 20px auto;
      width: 50px;
    }
  `]
})


export class LoadingComponent {

}
