import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { Task } from 'src/model/models';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor(private taskService: TaskService) { }

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
    let val : Task = {
      ...this.taskForm.value,
      title: this.taskForm.value.title ?? null,
      description: this.taskForm.value.description ?? null,
      dueDate: this.taskForm.value.dueDate ? new Date(this.taskForm.value.dueDate) : null,
      priority: this.taskForm.value.priority ?? null,
      category: this.taskForm.value.category ?? null,
      status: this.taskForm.value.status ?? null
    };
    this.taskService.createTask(val);
    // this.service
  }
}
