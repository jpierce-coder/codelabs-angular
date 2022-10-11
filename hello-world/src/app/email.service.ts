import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  getEmail() {
    return [
      'email 1',
      'email 2',
      'email 3'
    ]
  }
  constructor() { }
}
