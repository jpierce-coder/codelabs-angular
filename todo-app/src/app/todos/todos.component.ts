import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../shared/data.service';
import { Todo } from '../shared/todo.model';
import { MatDialog } from "@angular/material/dialog";
import { EditToDoDialogComponent } from '../edit-to-do-dialog/edit-to-do-dialog.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  showValidationErrors: boolean;

  constructor(private dataService: DataService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) return (this.showValidationErrors = true);
    this.dataService.addTodo(new Todo(form.value.text));

    this.showValidationErrors = false;
    form.reset();
  }

  toggleCompleted(todo: Todo) {
    // set todo to completed
    todo.completed = !todo.completed;
  }

  editToDo(todo) {



    const index = this.todos.indexOf(todo);

    let dialogRef = this.dialog.open(EditToDoDialogComponent, {
      width: '700px',
    });
    // we need index of todo, user needs to enter new information
    // this.dataService.updateTodo()
  }
}
