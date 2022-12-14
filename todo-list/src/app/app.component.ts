import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  tasks: Task[] = [
    new Task("Visit Ann"),
    new Task("Call Dad"),
    new Task("Go to the gym"),
    new Task("Wash the dishes"),
    new Task("Shop for the party")
  ]

  add(newTask: string) {
    this.tasks.push(new Task(newTask))
  }

  remove(existingTask: Task) {
    let userConfirmed = confirm(`Are you sure you want to remove ${existingTask}?`)

    if (userConfirmed) {
      this.tasks = this.tasks.filter(task => task != existingTask)
    }
  }

  markAsDone(task: Task) {
    task.isDone = true;
  }
}

class Task {
  constructor(public title: string) {

  }

  public isDone = false
}
