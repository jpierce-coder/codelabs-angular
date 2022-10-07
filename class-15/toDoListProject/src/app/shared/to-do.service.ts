import { Injectable } from '@angular/core';
import { Todo } from '../to-do-list/to-do/todo.model';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  todos: Todo[] = [
    {
      action: "Dishes"
    },
    {
      action: "Soccer Practice"
    }
  ]


  constructor() { }

}
