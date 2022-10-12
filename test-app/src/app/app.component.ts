import { Component } from '@angular/core';

import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'test-app';

  public totalCount: number = 0;

  public constructor(public shared: SharedService) {}

  public updateTotalCount(count: number): void {
    this.totalCount += count;
  }
}
