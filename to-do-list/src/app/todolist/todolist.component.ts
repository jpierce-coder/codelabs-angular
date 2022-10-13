import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';
import { Todo } from '../shared/todo/todo.model';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor(private todoService:TodoService) { }
  todoList: Todo[] = []

  ngOnInit(): void {
    this.todoList = this.todoService.getTodos();

  }

}
