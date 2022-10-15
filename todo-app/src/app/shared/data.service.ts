import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] = [
    new Todo('This is a test'),
    new Todo('This is a placeholder for todo text kjsadlfkjaskjd hfakjdshf; laskdhflaiussh ;glkahsdf; jksadjflka jksad;flkas df jksa;dfj aksjdflkasjf', true)
  ];

  constructor() { }


  getAllTodos() {
    return this.todos
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  updateTodo(index: number, updateTodo: Todo) {
    this.todos[index] = updateTodo;
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1)
  }
}
