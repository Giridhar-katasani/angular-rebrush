import { Component, OnInit } from '@angular/core';
import { Task } from 'src/model/models';
import { TaskService } from '../services/task.service';
import { BehaviouralSubjectService } from '../services/behavioural.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  
  defaultCategory: string = 'All';

  defaultPriority: string = 'High';

  defaultStatus: string = 'Pending';

  allTaskList: Task[] = [];

  selectedTaskList: Task[] = [];

  caterogyList: Task[] = [];

  statusList: Task[] = [];

  priorityList: Task[] = [];

  filteredTasks: any;

  filterState!: { category: string; priority: string; status: string; } | { category: ''; priority: ''; status: '' };
  
  searchQuery: string = "";

  constructor(private taskService: TaskService, private behaviouralService: BehaviouralSubjectService) {
    this.allTaskList = this.taskService.getTask();
    this.filteredTasks = this.allTaskList;
  }

  ngOnInit(): void {
    this.behaviouralService.searchQuery$.subscribe((searchQuery: string) => {
      this.searchQuery = searchQuery;
      this.onFilterChange(this.filterState);
    })
  }

  onFilterChange(filter: { category: string, priority: string, status: string }) {
    this.filterState = filter;
    // Apply filters based on selected filters
    let filteredTasks = this.allTaskList;

    if (filter?.category) {
      if(filter.category === 'All') {
        filteredTasks = this.allTaskList;
      } else {
        filteredTasks = filteredTasks.filter(task => task.category === filter.category);
      }
    }

    if (filter?.priority) {
      filteredTasks = filteredTasks.filter(task => task.priority === filter.priority);
    }

    if (filter?.status) {
      filteredTasks = filteredTasks.filter(task => task.status === filter.status);
    }

    if(this.searchQuery) {
      filteredTasks = filteredTasks.filter((task: Task) => {
        return task.title.toLowerCase().includes(this.searchQuery.toLowerCase()) || task.description.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    }
    // Update filteredTasks with the filtered result
    this.filteredTasks = filteredTasks;
    console.log(this.filteredTasks);
  }

  // onSearchQueryChange(searchQuery: string) {
  //   // this.searchQuery = searchQuery;
  //   //   this.onFilterChange(this.filterState);
  //   this.filteredTasks = this.filteredTasks.filter((task: Task) => {
  //     return task.title.toLowerCase().includes(this.searchQuery.toLowerCase()) || task.description.toLowerCase().includes(this.searchQuery.toLowerCase());
  //   });
  // }
}
