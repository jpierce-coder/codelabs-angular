import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoformComponent } from './todoform/todoform.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoComponent } from './shared/todo/todo.component';
import { SharedComponent } from './shared/shared.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoformComponent,
    TodolistComponent,
    TodoComponent,
    SharedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
