import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from 'src/model/models';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  
  @Output() filterChange = new EventEmitter<{ category: string, priority: string, status: string }>();

  categoryList: string[] = ['All', 'Project Management', 'Client Communication', 'Content Management'];
  priorityList: string[] = ['High', 'Medium', 'Low'];
  statusList: string[] = ['Pending', 'In Progress', 'Completed'];

  selectedCategory: string = '';
  selectedPriority: string = '';
  selectedStatus: string = '';

  emitFilterChange() {
    this.filterChange.emit({
      category: this.selectedCategory,
      priority: this.selectedPriority,
      status: this.selectedStatus
    });
  }

}
