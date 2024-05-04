import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Task } from "src/model/models";

@Injectable()
export class TaskService {

    constructor(private http: HttpClient) {

    }

    private API_URL = 'http://localhost:9090/task/save';

    taskList: Task[] = [
      {
        id: 1,
        title: 'Complete project proposal',
        description: 'Write a detailed proposal for the new project.',
        dueDate: new Date('2024-03-20'),
        priority: 'High',
        category: 'Project Management',
        status: 'Pending'
      },
      {
        id: 2,
        title: 'Meeting with client',
        description: 'Schedule a meeting with the client to discuss project requirements.',
        dueDate: new Date('2024-03-18'),
        priority: 'High',
        category: 'Client Communication',
        status: 'In Progress'
      },
      {
        id: 3,
        title: 'Update website content',
        description: 'Review and update website content for accuracy and relevance.',
        dueDate: new Date('2024-03-25'),
        priority: 'Medium',
        category: 'Content Management',
        status: 'Pending'
      },
      {
        id: 4,
        title: 'Prepare presentation slides',
        description: 'Create slides for the upcoming presentation.',
        dueDate: new Date('2024-03-22'),
        priority: 'Medium',
        category: 'Presentation',
        status: 'Pending'
      },
      {
        id: 5,
        title: 'Review code changes',
        description: 'Review and provide feedback on recent code changes.',
        dueDate: new Date('2024-03-19'),
        priority: 'Low',
        category: 'Development',
        status: 'Completed'
      },
      {
        id: 6,
        title: 'Testing new feature',
        description: 'Test the implementation of a new feature in the application.',
        dueDate: new Date('2024-03-24'),
        priority: 'High',
        category: 'Quality Assurance',
        status: 'In Progress'
      },
      {
        id: 7,
        title: 'Content review meeting',
        description: 'Hold a meeting to review and discuss website content updates.',
        dueDate: new Date('2024-03-21'),
        priority: 'Medium',
        category: 'Content Management',
        status: 'Pending'
      },
      {
        id: 8,
        title: 'Client feedback analysis',
        description: 'Analyze client feedback and incorporate suggestions into the project.',
        dueDate: new Date('2024-03-23'),
        priority: 'Medium',
        category: 'Client Communication',
        status: 'Pending'
      },
      {
        id: 9,
        title: 'Bug fixes',
        description: 'Address and fix reported bugs in the application.',
        dueDate: new Date('2024-03-27'),
        priority: 'High',
        category: 'Development',
        status: 'Pending'
      },
      {
        id: 10,
        title: 'Team meeting',
        description: 'Conduct a team meeting to discuss project progress and assign tasks.',
        dueDate: new Date('2024-03-26'),
        priority: 'Low',
        category: 'Project Management',
        status: 'Pending'
      },
      {
        id: 11,
        title: 'Documentation update',
        description: 'Update project documentation with recent changes and improvements.',
        dueDate: new Date('2024-03-28'),
        priority: 'Medium',
        category: 'Documentation',
        status: 'Pending'
      },
      {
        id: 12,
        title: 'Performance optimization',
        description: 'Optimize application performance for better user experience.',
        dueDate: new Date('2024-03-30'),
        priority: 'High',
        category: 'Development',
        status: 'Pending'
      },
      {
        id: 13,
        title: 'Marketing strategy review',
        description: 'Review and revise marketing strategy for the upcoming quarter.',
        dueDate: new Date('2024-03-29'),
        priority: 'Medium',
        category: 'Marketing',
        status: 'Pending'
      },
      {
        id: 14,
        title: 'Data analysis',
        description: 'Perform data analysis to identify trends and insights.',
        dueDate: new Date('2024-03-31'),
        priority: 'Low',
        category: 'Analytics',
        status: 'Pending'
      },
      {
        id: 15,
        title: 'User training session',
        description: 'Conduct a training session for users on new application features.',
        dueDate: new Date('2024-04-01'),
        priority: 'Medium',
        category: 'Training',
        status: 'Pending'
      }
    ];

      public getTask() {
        return this.taskList;
      }

      public createTask(task: Task) {
        const token = localStorage.getItem('jwtToken'); // Retrieve the token
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
        });
        console.log(token);
        return this.http.post(this.API_URL, task, { headers }).subscribe((response) => {
          console.log(response);
        });
      }
}