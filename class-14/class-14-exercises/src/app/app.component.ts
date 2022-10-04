import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() myPosts: string[] = [
    "I'm going out to Glade Top Trail",
    "We're taking out the overlanding rig this weekend",
    "Where are we meeting at @MarkTwainMafia?",
    "Can't wait to go out camping in Mark Twain National Forest this weekend!!"
  ]
}
