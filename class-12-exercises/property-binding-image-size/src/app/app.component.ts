import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'property-binding-image-size';
  width:number = 50;
  height:number = 350;



  constructor() {
    setTimeout(()=> {
      this.width = 250
    }, 1000)
  }
}
