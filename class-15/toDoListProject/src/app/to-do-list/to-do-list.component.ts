import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../shared/to-do.service';
import { Todo } from './to-do/todo.model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  constructor(private todoService:ToDoService) { }
  todoList: Todo[] = []
    ngOnInit(): void {
  }

}
