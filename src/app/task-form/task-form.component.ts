import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  taskForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      dueDate: new FormControl(''),
      priority: new FormControl(''),
      category: new FormControl(''),
      status: new FormControl('')
  })

  onSubmit() {
    console.log(this.taskForm.value);
  }
}
