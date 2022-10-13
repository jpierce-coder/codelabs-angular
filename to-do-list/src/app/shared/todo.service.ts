import { Injectable } from '@angular/core';
import { Todo } from './todo/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [
    {
      action: "Dishes"
    },
    {
      action: "Soccer Practice"
    }
  ]

  getTodos(){
    return this.todos.slice();
  }
  constructor() { }
}
