import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  public count: number = 0;

  constructor() {
    console.log('Service created');
  }

  public increase(): void {
    this.count++;
  }

  public decrease(): void {
    this.count--;
  }
}
