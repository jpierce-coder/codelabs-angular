import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: {
    username: string,
    id: number
  }[] = [
    {
      username: 'John',
      id: 2
    },
    {
      username: 'Billy',
      id: 52
    },
    {
      username: 'Sally',
      id: 67
    }
  ]
}
