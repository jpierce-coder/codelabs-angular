import { Component } from '@angular/core';
import { EmailService } from './email.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'List of Emails';
  emails:string[];
  constructor(email: EmailService) {
    this.emails = email.getEmail();
  };

}
