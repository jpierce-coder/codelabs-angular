import { NgFor } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../shared/todo.model';
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-edit-to-do-dialog',
  templateUrl: './edit-to-do-dialog.component.html',
  styleUrls: ['./edit-to-do-dialog.component.scss']
})
export class EditToDoDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditToDoDialogComponent>, @Inject() public todo: Todo) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close()
  }

  onFormSubmit(form: NgForm) {

  }
}
